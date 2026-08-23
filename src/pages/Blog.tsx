import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Blog.css';
import { blogPosts, blogCategories } from '../data/blogData.ts';

const Blog: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    const featuredPost = useMemo(() => {
        return blogPosts.find((post) => post.featured) || blogPosts[0];
    }, []);

    const handlePostClick = (slug: string) => {
        window.scrollTo(0, 0);
        navigate(`/blog/${slug}`);
    };

    return (
        <>
            <Helmet>
                <title>Legal Insights & Blog | Juriva Legal</title>
                <meta 
                    name="description" 
                    content="Stay informed with expert legal analysis, practical advice, and updates on Indian SARFAESI Act, Civil Litigation, Criminal Defense, and Property Laws." 
                />
                <meta property="og:title" content="Legal Insights & Blog | Juriva Legal" />
                <meta property="og:description" content="Stay informed with expert legal analysis, practical advice, and updates on Indian SARFAESI Act, Civil Litigation, Criminal Defense, and Property Laws." />
                <meta property="og:type" content="blog" />
                <meta name="twitter:title" content="Legal Insights & Blog | Juriva Legal" />
                <meta name="twitter:description" content="Stay informed with expert legal analysis, practical advice, and updates on Indian SARFAESI Act, Civil Litigation, Criminal Defense, and Property Laws." />
            </Helmet>

            <div className="blog-page">
                {/* Hero Header */}
                <header className="blog-hero">
                    <div className="container">
                        <h1>Legal <span>Insights</span> & Articles</h1>
                        <p className="blog-subtitle">
                            Expert commentary, legal analyses, and strategic updates on Indian judicial procedures, banking litigation, and dispute resolution.
                        </p>
                    </div>
                </header>

                <main className="container">
                    {/* Search & Category Filter */}
                    <div className="blog-controls">
                        <div className="search-box">
                            <span className="search-icon">🔍</span>
                            <input 
                                type="text"
                                className="search-input"
                                placeholder="Search by topic, keyword, or law..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="category-filters" role="tablist" aria-label="Blog categories">
                            {blogCategories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Article Banner (Visible when no specific search is performed) */}
                    {selectedCategory === 'All' && searchQuery === '' && featuredPost && (
                        <article 
                            className="featured-post"
                            onClick={() => handlePostClick(featuredPost.slug)}
                        >
                            <span className="featured-tag">Featured Article</span>
                            <h2 className="featured-title">{featuredPost.title}</h2>
                            <p className="featured-summary">{featuredPost.summary}</p>
                            <div className="post-meta">
                                <span className="meta-author">{featuredPost.author}</span>
                                <span>•</span>
                                <span>{featuredPost.date}</span>
                                <span>•</span>
                                <span>{featuredPost.readTime}</span>
                            </div>
                        </article>
                    )}

                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="blog-grid">
                            {filteredPosts.map((post) => (
                                <article 
                                    key={post.id}
                                    className="blog-card"
                                    onClick={() => handlePostClick(post.slug)}
                                >
                                    <div>
                                        <span className="card-category">{post.category}</span>
                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="card-summary">{post.summary}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span>{post.date}</span>
                                        <span className="read-more-link">
                                            Read Article &rarr;
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <h3>No Articles Found</h3>
                            <p>Try adjusting your search query or selecting a different category.</p>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
};

export default Blog;
