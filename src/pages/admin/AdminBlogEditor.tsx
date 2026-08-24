import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  createBlogPost, 
  updateBlogPost, 
  fetchPostBySlug, 
  generateSlug 
} from '../../services/blogService.ts';
import { type BlogPost, blogCategories } from '../../data/blogData.ts';
import '../BlogPostDetail.css';
import './AdminBlogEditor.css';

type ViewMode = 'split' | 'edit' | 'preview';

const categoriesList = blogCategories.filter(c => c !== 'All') as Array<BlogPost['category']>;

const AdminBlogEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [loading, setLoading] = useState<boolean>(isEditing);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [manualSlug, setManualSlug] = useState(false);
  const [category, setCategory] = useState<BlogPost['category']>('Civil Law');
  const [author, setAuthor] = useState('Adv. Nishant Giri');
  const [date, setDate] = useState(() => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  const [readTime, setReadTime] = useState('5 min read');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [keyTakeaways, setKeyTakeaways] = useState<string[]>(['']);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [featured, setFeatured] = useState(false);

  // Load existing post if editing
  useEffect(() => {
    if (!id) return;

    const loadPost = async () => {
      try {
        setLoading(true);
        const post = await fetchPostBySlug(id);
        if (post) {
          setTitle(post.title);
          setSlug(post.slug);
          setManualSlug(true);
          setCategory(post.category);
          setAuthor(post.author);
          setDate(post.date);
          setReadTime(post.readTime);
          setSummary(post.summary);
          setContent(post.content);
          setKeyTakeaways(post.keyTakeaways && post.keyTakeaways.length > 0 ? post.keyTakeaways : ['']);
          setTags(post.tags || []);
          setFeatured(Boolean(post.featured));
        } else {
          setError('Article not found.');
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  // Automatically update slug and read time when title/content change (unless manually edited)
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!manualSlug) {
      setSlug(generateSlug(val));
    }
  };

  const handleContentChange = (val: string) => {
    setContent(val);
    // Estimate read time (approx 200 words per minute)
    const wordCount = val.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    setReadTime(`${minutes} min read`);
  };

  // Tag Handlers
  const handleAddTag = () => {
    const trimmed = tagInput.trim().replace(/^#/, '');
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  // Key Takeaways Handlers
  const handleTakeawayChange = (index: number, val: string) => {
    const updated = [...keyTakeaways];
    updated[index] = val;
    setKeyTakeaways(updated);
  };

  const handleAddTakeaway = () => {
    setKeyTakeaways([...keyTakeaways, '']);
  };

  const handleRemoveTakeaway = (index: number) => {
    if (keyTakeaways.length === 1) {
      setKeyTakeaways(['']);
      return;
    }
    setKeyTakeaways(keyTakeaways.filter((_, i) => i !== index));
  };

  // Markdown helper toolbar insertion
  const insertMarkdown = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('blog-content-area') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end);
    const replacement = `${prefix}${selected || 'Text'}${suffix}`;

    const newContent = content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError('Article title is required.');
      return;
    }
    if (!content.trim()) {
      setError('Article content cannot be empty.');
      return;
    }

    const finalSlug = slug.trim() || generateSlug(title);
    const cleanedTakeaways = keyTakeaways.map((t) => t.trim()).filter(Boolean);

    const postData: Omit<BlogPost, 'id'> = {
      title: title.trim(),
      slug: finalSlug,
      category,
      author: author.trim() || 'Adv. Nishant Giri',
      date,
      readTime,
      summary: summary.trim() || title.trim(),
      content: content.trim(),
      keyTakeaways: cleanedTakeaways,
      tags,
      featured
    };

    try {
      setSubmitting(true);
      if (isEditing && id) {
        await updateBlogPost(id, postData);
      } else {
        await createBlogPost(postData);
      }
      navigate('/admin');
    } catch (err) {
      setError((err as Error).message || 'Failed to save article.');
      setSubmitting(false);
    }
  };

  // Markdown live formatter for preview
  const formatInlineMarkdown = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(<strong key={match.index}>{token.slice(2, -2)}</strong>);
      } else if (token.startsWith('*') && token.endsWith('*')) {
        parts.push(<em key={match.index}>{token.slice(1, -1)}</em>);
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const previewFormattedContent = useMemo(() => {
    if (!content.trim()) return null;
    const blocks = content.trim().split('\n\n');
    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx}>{trimmed.replace('### ', '')}</h3>;
      }
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split('\n').map((item) => item.replace(/^\d+\.\s*/, ''));
        return (
          <ol key={idx}>
            {items.map((item, itemIdx) => (
              <li key={itemIdx}>{formatInlineMarkdown(item)}</li>
            ))}
          </ol>
        );
      }
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').map((item) => item.replace(/^[-*]\s*/, ''));
        return (
          <ul key={idx}>
            {items.map((item, itemIdx) => (
              <li key={itemIdx}>{formatInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
      }
      return <p key={idx}>{formatInlineMarkdown(trimmed)}</p>;
    });
  }, [content]);

  if (loading) {
    return (
      <div className="admin-editor-page">
        <div className="editor-container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p>Loading article data...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Article' : 'New Article'} | Juriva Legal Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="admin-editor-page">
        <div className="editor-container">
          {/* Top Nav */}
          <div className="editor-top-nav">
            <div>
              <NavLink to="/admin" className="btn-secondary" style={{ marginBottom: '0.8rem', display: 'inline-flex' }}>
                &larr; Back to Dashboard
              </NavLink>
              <h1>{isEditing ? 'Edit Legal Article' : 'Write New Legal Article'}</h1>
            </div>

            <div className="editor-nav-actions">
              <div className="view-mode-toggle">
                <button
                  type="button"
                  className={`view-mode-btn ${viewMode === 'edit' ? 'active' : ''}`}
                  onClick={() => setViewMode('edit')}
                >
                  Editor Only
                </button>
                <button
                  type="button"
                  className={`view-mode-btn ${viewMode === 'split' ? 'active' : ''}`}
                  onClick={() => setViewMode('split')}
                >
                  Split View
                </button>
                <button
                  type="button"
                  className={`view-mode-btn ${viewMode === 'preview' ? 'active' : ''}`}
                  onClick={() => setViewMode('preview')}
                >
                  Live Preview
                </button>
              </div>

              <button
                type="submit"
                form="blog-post-form"
                className="btn-primary"
                disabled={submitting}
              >
                {submitting ? 'Publishing...' : isEditing ? 'Save Changes' : 'Publish Article'}
              </button>
            </div>
          </div>

          {error && <div className="login-error-alert" style={{ marginBottom: '1.5rem' }}>{error}</div>}

          {/* Editor & Preview Layout */}
          <div className={`editor-layout ${viewMode === 'split' ? 'split' : viewMode === 'edit' ? 'edit-only' : 'preview-only'}`}>
            {/* Form Section */}
            {viewMode !== 'preview' && (
              <form id="blog-post-form" onSubmit={handleSubmit} className="editor-card">
                <div className="editor-group">
                  <label htmlFor="title">Article Title *</label>
                  <input
                    id="title"
                    type="text"
                    className="editor-input"
                    placeholder="e.g. Understanding SARFAESI Act 2002: Key Borrower Rights"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    required
                  />
                </div>

                <div className="form-grid-2">
                  <div className="editor-group">
                    <label htmlFor="slug">URL Slug</label>
                    <input
                      id="slug"
                      type="text"
                      className="editor-input"
                      value={slug}
                      onChange={(e) => {
                        setManualSlug(true);
                        setSlug(e.target.value);
                      }}
                      placeholder="auto-generated-slug"
                    />
                  </div>

                  <div className="editor-group">
                    <label htmlFor="category">Practice Area / Category</label>
                    <select
                      id="category"
                      className="editor-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value as BlogPost['category'])}
                    >
                      {categoriesList.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="editor-group">
                    <label htmlFor="author">Author</label>
                    <input
                      id="author"
                      type="text"
                      className="editor-input"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>

                  <div className="editor-group">
                    <label htmlFor="date">Publication Date</label>
                    <input
                      id="date"
                      type="text"
                      className="editor-input"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="editor-group">
                  <label htmlFor="summary">Executive Summary / Abstract</label>
                  <textarea
                    id="summary"
                    rows={3}
                    className="editor-textarea"
                    placeholder="Brief 2-3 sentence overview displayed on blog cards and search engine previews..."
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </div>

                {/* Key Takeaways */}
                <div className="editor-group">
                  <label>Key Legal Takeaways (Bullet Box)</label>
                  {keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="dynamic-list-row">
                      <input
                        type="text"
                        className="editor-input"
                        placeholder={`Takeaway #${idx + 1}`}
                        value={takeaway}
                        onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn-remove-item"
                        onClick={() => handleRemoveTakeaway(idx)}
                        title="Remove point"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button type="button" className="btn-add-item" onClick={handleAddTakeaway}>
                    + Add Takeaway Point
                  </button>
                </div>

                {/* Tags */}
                <div className="editor-group">
                  <label>Topic Tags</label>
                  <div className="dynamic-list-row">
                    <input
                      type="text"
                      className="editor-input"
                      placeholder="e.g. SARFAESI, DRT, Bail"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                    />
                    <button type="button" className="btn-secondary" onClick={handleAddTag}>
                      Add Tag
                    </button>
                  </div>
                  <div className="tags-container">
                    {tags.map((t) => (
                      <span key={t} className="tag-chip">
                        #{t}
                        <button
                          type="button"
                          className="tag-chip-remove"
                          onClick={() => handleRemoveTag(t)}
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Editor */}
                <div className="editor-group">
                  <label htmlFor="blog-content-area">Article Content (Markdown Supported) *</label>
                  <div className="markdown-toolbar">
                    <button type="button" className="toolbar-btn" onClick={() => insertMarkdown('### ', '')}>
                      H3 Heading
                    </button>
                    <button type="button" className="toolbar-btn" onClick={() => insertMarkdown('**', '**')}>
                      <strong>Bold</strong>
                    </button>
                    <button type="button" className="toolbar-btn" onClick={() => insertMarkdown('*', '*')}>
                      <em>Italic</em>
                    </button>
                    <button type="button" className="toolbar-btn" onClick={() => insertMarkdown('- ', '')}>
                      • Bullet List
                    </button>
                    <button type="button" className="toolbar-btn" onClick={() => insertMarkdown('1. ', '')}>
                      1. Numbered List
                    </button>
                  </div>
                  <textarea
                    id="blog-content-area"
                    className="editor-textarea content-textarea"
                    placeholder="Write the full body of the legal article here..."
                    value={content}
                    onChange={(e) => handleContentChange(e.target.value)}
                    required
                  />
                </div>

                {/* Featured Checkbox */}
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                  />
                  Feature this article prominently on top of the Blog page
                </label>
              </form>
            )}

            {/* Live Preview Section */}
            {viewMode !== 'edit' && (
              <div className="preview-card post-detail-page">
                <span className="preview-badge">Live Reader Preview</span>
                
                <header className="post-header" style={{ marginBottom: '1.5rem' }}>
                  <span className="post-category">{category}</span>
                  <h1 className="post-title" style={{ fontSize: '1.8rem' }}>
                    {title || 'Article Title Preview'}
                  </h1>
                  <div className="post-meta-bar">
                    <div className="author-info">
                      <div className="author-avatar">NG</div>
                      <span>{author}</span>
                    </div>
                    <span>•</span>
                    <span>{date}</span>
                    <span>•</span>
                    <span>{readTime}</span>
                  </div>
                </header>

                {keyTakeaways.some((t) => t.trim()) && (
                  <div className="takeaways-box" style={{ marginBottom: '1.5rem' }}>
                    <h4>💡 Key Legal Takeaways</h4>
                    <ul>
                      {keyTakeaways.filter((t) => t.trim()).map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="post-article-content">
                  {previewFormattedContent || (
                    <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      Article content preview will appear here as you type...
                    </p>
                  )}
                </div>

                {tags.length > 0 && (
                  <div className="post-tags" style={{ marginTop: '1.5rem' }}>
                    <span className="tag-label">Topics:</span>
                    {tags.map((tag) => (
                      <span key={tag} className="tag-pill">#{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBlogEditor;
