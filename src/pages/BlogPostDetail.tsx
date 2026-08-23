import React, { useMemo } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './BlogPostDetail.css';
import { blogPosts } from '../data/blogData.ts';

const BlogPostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const post = useMemo(() => {
        return blogPosts.find((p) => p.slug === id || p.id === id);
    }, [id]);

    const relatedPosts = useMemo(() => {
        if (!post) return [];
        return blogPosts
            .filter((p) => p.id !== post.id && p.category === post.category)
            .slice(0, 3);
    }, [post]);

    if (!post) {
        return (
            <div className="container" style={{ padding: '8rem 1rem 4rem', textAlign: 'center' }}>
                <h2>Article Not Found</h2>
                <p style={{ margin: '1rem 0 2rem', color: 'var(--text-secondary)' }}>
                    The legal article you are looking for does not exist or has been moved.
                </p>
                <NavLink to="/blog" className="cta-button">
                    &larr; Back to Blog & Insights
                </NavLink>
            </div>
        );
    }

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

    const renderMarkdownParagraphs = (rawContent: string) => {
        const blocks = rawContent.trim().split('\n\n');
        return blocks.map((block, idx) => {
            const trimmed = block.trim();
            if (trimmed.startsWith('### ')) {
                return <h3 key={idx}>{trimmed.replace('### ', '')}</h3>;
            }
            if (/^\d+\.\s/.test(trimmed)) {
                const items = trimmed.split('\n').map(item => item.replace(/^\d+\.\s*/, ''));
                return (
                    <ol key={idx}>
                        {items.map((item, itemIdx) => (
                            <li key={itemIdx}>{formatInlineMarkdown(item)}</li>
                        ))}
                    </ol>
                );
            }
            if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').map(item => item.replace(/^[-\*]\s*/, ''));
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
    };

    return (
        <>
            <Helmet>
                <title>{`${post.title} | Juriva Legal Insights`}</title>
                <meta name="description" content={post.summary} />
                <meta property="og:title" content={`${post.title} | Juriva Legal Insights`} />
                <meta property="og:description" content={post.summary} />
                <meta property="og:type" content="article" />
                <meta name="twitter:title" content={`${post.title} | Juriva Legal Insights`} />
                <meta name="twitter:description" content={post.summary} />
            </Helmet>

            <article className="post-detail-page">
                <div className="container">
                    {/* Breadcrumb Navigation */}
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/">Home</NavLink>
                        <span>&rsaquo;</span>
                        <NavLink to="/blog">Blog & Insights</NavLink>
                        <span>&rsaquo;</span>
                        <span className="current" aria-current="page">{post.title}</span>
                    </nav>

                    {/* Article Header */}
                    <header className="post-header">
                        <span className="post-category">{post.category}</span>
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-meta-bar">
                            <div className="author-info">
                                <div className="author-avatar">NG</div>
                                <span>{post.author}</span>
                            </div>
                            <span>•</span>
                            <span>Published on {post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </header>

                    {/* Main Layout Grid */}
                    <div className="post-layout">
                        {/* Article Main Body */}
                        <div className="post-main">
                            {/* Key Takeaways Box */}
                            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                                <div className="takeaways-box">
                                    <h4>💡 Key Legal Takeaways</h4>
                                    <ul>
                                        {post.keyTakeaways.map((takeaway, i) => (
                                            <li key={i}>{takeaway}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Article Body Content */}
                            <div className="post-article-content">
                                {renderMarkdownParagraphs(post.content)}
                            </div>

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="post-tags">
                                    <span className="tag-label">Topics:</span>
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="tag-pill">#{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="post-sidebar">
                            {/* Consultation CTA Widget */}
                            <div className="sidebar-widget cta-widget">
                                <h4>Need Legal Advice?</h4>
                                <p>
                                    Get strategic counsel and experienced representation tailored to your unique legal matter.
                                </p>
                                <NavLink to="/contact" className="cta-widget-btn">
                                    Book a Consultation
                                </NavLink>
                            </div>

                            {/* Related Articles Widget */}
                            {relatedPosts.length > 0 && (
                                <div className="sidebar-widget related-posts-widget">
                                    <h4>Related Articles</h4>
                                    {relatedPosts.map((rel) => (
                                        <div 
                                            key={rel.id} 
                                            className="related-post-item"
                                            onClick={() => {
                                                window.scrollTo(0, 0);
                                                navigate(`/blog/${rel.slug}`);
                                            }}
                                        >
                                            <h5>{rel.title}</h5>
                                            <div className="related-post-date">{rel.date}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPostDetail;
