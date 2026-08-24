import React, { useState, useEffect, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../context/useAuth.ts';
import { 
  fetchAllPosts, 
  deleteBlogPost, 
  seedInitialPostsToFirestore 
} from '../../services/blogService.ts';
import { type BlogPost } from '../../data/blogData.ts';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const { user, logout, isConfigured } = useAuth();
  const navigate = useNavigate();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSeeding, setIsSeeding] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 4000);
  };

  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (err) {
      console.error('Failed to load posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleDelete = async (post: BlogPost) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to permanently delete the article:\n"${post.title}"?`
    );
    if (!confirmDelete) return;

    try {
      await deleteBlogPost(post.id);
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
      showToast(`Article "${post.title.substring(0, 30)}..." deleted.`);
    } catch (err) {
      alert('Failed to delete post from Firebase: ' + (err as Error).message);
    }
  };

  const handleSeedArticles = async () => {
    if (!window.confirm('Upload the standard starter legal articles to your Firebase Firestore database?')) {
      return;
    }

    try {
      setIsSeeding(true);
      const count = await seedInitialPostsToFirestore();
      showToast(`Successfully uploaded ${count} starter articles to Firebase!`);
      await loadPosts();
    } catch (err) {
      alert('Failed to seed articles: ' + (err as Error).message);
    } finally {
      setIsSeeding(false);
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchQuery = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchQuery;
    });
  }, [posts, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Owner Admin Dashboard | Juriva Legal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="admin-dashboard-page">
        <div className="dashboard-container">
          {/* Top Bar */}
          <div className="dashboard-top-bar">
            <div className="dashboard-title-group">
              <h1>Owner Blog Management</h1>
              <p>Signed in as <strong>{user?.email || 'Owner'}</strong></p>
            </div>

            <div className="dashboard-actions">
              <NavLink to="/blog" target="_blank" className="btn-secondary">
                🌐 View Public Blog
              </NavLink>
              <NavLink to="/admin/new-post" className="btn-primary">
                ✍️ Write New Article
              </NavLink>
              <button onClick={handleLogout} className="btn-outline-danger">
                Sign Out
              </button>
            </div>
          </div>

          {/* Configuration Alert if needed */}
          {!isConfigured && (
            <div className="sync-banner" style={{ background: '#fff8e6', borderColor: '#f2c744' }}>
              <div className="sync-banner-info">
                <strong style={{ color: '#723b13' }}>⚠️ Running in Local Static Fallback Mode</strong>
                <p>Add your Firebase API keys to your <code>.env</code> file to enable instant Cloud Firestore synchronization and multi-device persistence.</p>
              </div>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="dashboard-stats-grid">
            <div className="stat-card">
              <div className="stat-label">Total Published Articles</div>
              <div className="stat-value">{posts.length}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Practice Categories</div>
              <div className="stat-value">
                {new Set(posts.map((p) => p.category)).size}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Featured Articles</div>
              <div className="stat-value">
                {posts.filter((p) => p.featured).length}
              </div>
            </div>
          </div>

          {/* Seed initial posts helper banner if configured */}
          {isConfigured && (
            <div className="sync-banner">
              <div className="sync-banner-info">
                <strong>📦 Cloud Database Sync</strong>
                <p>If your Firebase database is empty, you can upload all default legal articles to Cloud Firestore with one click.</p>
              </div>
              <button 
                onClick={handleSeedArticles} 
                className="btn-secondary"
                disabled={isSeeding}
              >
                {isSeeding ? 'Uploading...' : 'Seed Starter Articles to Firestore'}
              </button>
            </div>
          )}

          {/* Filter / Search Bar */}
          <div className="dashboard-filter-bar">
            <div className="dashboard-search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search articles by title, topic, category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Showing {filteredPosts.length} of {posts.length} articles
            </span>
          </div>

          {/* Articles Table */}
          <div className="articles-card">
            {loading ? (
              <div className="dashboard-empty">
                <p>Loading legal articles from cloud...</p>
              </div>
            ) : filteredPosts.length > 0 ? (
              <table className="articles-table">
                <thead>
                  <tr>
                    <th>Article Title & Slug</th>
                    <th>Category</th>
                    <th>Date & Read Time</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post.id}>
                      <td className="article-title-cell">
                        <strong>
                          {post.title}
                          {post.featured && <span className="badge-featured">Featured</span>}
                        </strong>
                        <span className="article-slug-sub">/blog/{post.slug}</span>
                      </td>
                      <td>
                        <span className="badge-cat">{post.category}</span>
                      </td>
                      <td>
                        <div>{post.date}</div>
                        <small style={{ color: 'var(--text-muted)' }}>{post.readTime}</small>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div className="action-buttons-group" style={{ justifyContent: 'flex-end' }}>
                          <NavLink
                            to={`/blog/${post.slug}`}
                            target="_blank"
                            className="action-btn-sm action-btn-view"
                            title="View live article"
                          >
                            View
                          </NavLink>
                          <NavLink
                            to={`/admin/edit/${post.id}`}
                            className="action-btn-sm action-btn-edit"
                            title="Edit article"
                          >
                            Edit
                          </NavLink>
                          <button
                            onClick={() => handleDelete(post)}
                            className="action-btn-sm action-btn-delete"
                            title="Delete article"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="dashboard-empty">
                <h3>No articles found</h3>
                <p>Try clearing your search query or create a new legal article.</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <NavLink to="/admin/new-post" className="btn-primary">
                    ✍️ Create First Article
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>

        {toast && <div className="toast-message">{toast}</div>}
      </div>
    </>
  );
};

export default AdminDashboard;
