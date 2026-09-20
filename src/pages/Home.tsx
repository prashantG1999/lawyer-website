import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImage from '../assets/Juriva_Logo.png';
import { blogPosts } from '../data/blogData.ts';

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <Helmet>
                <title>Juriva Legal | Advocates & Legal Consultants in Kota, Rajasthan</title>
                <meta 
                    name="description" 
                    content="Juriva Legal delivers strategic legal counsel and robust litigation representation in Kota, Rajasthan across District Courts, DRT, and High Court." 
                />
                <meta property="og:title" content="Juriva Legal | Advocates & Legal Consultants in Kota, Rajasthan" />
                <meta property="og:description" content="Comprehensive legal expertise you can trust in Kota, Rajasthan and across Indian courts and tribunals." />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Juriva Legal | Advocates & Legal Consultants in Kota, Rajasthan" />
                <meta name="twitter:description" content="Comprehensive legal expertise you can trust in Kota, Rajasthan and across Indian courts and tribunals." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>
                        <span className="hero-logo-wrapper">
                            <img 
                                src={logoImage} 
                                alt="Juriva Legal Logo" 
                                className="hero-logo-large" 
                                width="200" 
                                height="200" 
                                fetchPriority="high"
                                decoding="async"
                            />
                            <span>Juriva <span style={{ color: 'var(--secondary-color)' }}>Legal</span></span>
                        </span>
                        Comprehensive Legal Expertise You Can Trust
                    </h1>
                    <p className="font-bookman">
                        With years of extensive experience practicing before various courts, tribunals, and quasi-judicial forums across India, we provide robust legal representation and strategic counsel, carefully tailored to the unique facts, objectives, and legal requirements of each client and matter.
                    </p>
                    <div className="cta-group">
                        <NavLink to="/contact" className="cta-button">Book a Consultation</NavLink>
                        <NavLink to="/services" className="cta-button secondary">Explore Practice Areas</NavLink>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h2>Dedicated to Securing <span>Justice</span></h2>
                            <p>
                                Navigating the complexities of the Indian legal system requires more than just knowledge of the law—it demands strategy, empathy, and dedicated advocacy.
                            </p>
                            <p>
                                Our practice is built on the pillars of integrity, transparency, and an unwavering commitment to securing justice for our clients. Whether you are facing a high-stakes corporate dispute, a sensitive family matter, or require a strong defense in a criminal proceeding, your case will be handled with the highest level of professionalism.
                            </p>
                        </div>
                        <div className="intro-quote">
                            <div className="quote-wrapper">
                                <blockquote>
                                    "Ubi Jus, Ibi Remedium"
                                </blockquote>
                                <p className="quote-desc">
                                    Where there is a right, there is a remedy. We craft bespoke legal strategies tailored to the unique facts, goals, and challenges of each client. No two matters are alike, and neither are our solutions. We listen, understand, and adapt, delivering precise, practical, and effective legal pathways that seek not just to represent, but to resolve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose My Practice Section */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose <span>Our Practice?</span></h2>
                    </div>
                    <div className="why-choose-grid">
                        <div className="why-card">
                            <div className="why-card-icon">⚖️</div>
                            <h3>Years of Experience</h3>
                            <p>Deep understanding of Indian courtroom dynamics, procedural nuances, and judicial precedents.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-card-icon">🤝</div>
                            <h3>Client-Centric Approach</h3>
                            <p>Clear communication without confusing legal jargon. You will always be kept informed about the progress of your case.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-card-icon">🎯</div>
                            <h3>Tailored Legal Strategies</h3>
                            <p>No two cases are the same. We analyze your specific situation to build a customized roadmap toward a favorable resolution.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Legal Insights Section */}
            <section className="home-blog-section">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2>Latest Legal <span>Insights</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                            Stay updated with our latest legal analyses, practical guidance, and case updates.
                        </p>
                    </div>

                    <div className="blog-grid">
                        {blogPosts.slice(0, 3).map((post) => (
                            <article
                                key={post.id}
                                className="blog-card"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate(`/blog/${post.slug}`);
                                }}
                            >
                                <div>
                                    <span className="card-category">{post.category}</span>
                                    <h3 className="card-title">{post.title}</h3>
                                    <p className="card-summary">{post.summary}</p>
                                </div>
                                <div className="card-footer">
                                    <span>{post.date}</span>
                                    <span className="read-more-link">Read Article &rarr;</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <NavLink to="/blog" className="cta-button secondary" onClick={() => window.scrollTo(0, 0)}>
                            Explore All Insights &rarr;
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Need Legal Assistance CTA Section */}
            <section className="home-cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Need Legal Assistance?</h2>
                        <p>Protect your rights and secure your peace of mind. Contact the chamber today to schedule a confidential consultation.</p>

                        <div className="cta-info-grid">
                            <div className="cta-info-item">
                                <div className="cta-item-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="cta-item-content">
                                    <h4>Chambers</h4>
                                    <p className="cta-primary-text">Sogaria &amp; R.K Puram</p>
                                    <p className="cta-secondary-text">Kota, Rajasthan</p>
                                </div>
                            </div>
                            <div className="cta-info-item">
                                <div className="cta-item-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="cta-item-content">
                                    <h4>Phone</h4>
                                    <p className="cta-primary-text">
                                        <a href="tel:+919664281653">+91 96642 81653</a>
                                    </p>
                                    <p className="cta-secondary-text">
                                        <a href="tel:+918824770804">+91 88247 70804</a>
                                    </p>
                                </div>
                            </div>
                            <div className="cta-info-item">
                                <div className="cta-item-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.8 1.15-2.96-.19-.3a8.19 8.19 0 0 1-1.26-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                                    </svg>
                                </div>
                                <div className="cta-item-content">
                                    <h4>WhatsApp</h4>
                                    <p className="cta-primary-text">
                                        <a href="https://wa.me/919664281653" target="_blank" rel="noopener noreferrer">+91 96642 81653</a>
                                    </p>
                                    <p className="cta-secondary-text">
                                        <a href="https://wa.me/919664281653" target="_blank" rel="noopener noreferrer" className="cta-action-link">Chat Directly &rarr;</a>
                                    </p>
                                </div>
                            </div>
                            <div className="cta-info-item">
                                <div className="cta-item-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22 6 12 13 2 6"></polyline>
                                    </svg>
                                </div>
                                <div className="cta-item-content">
                                    <h4>Email</h4>
                                    <p className="cta-primary-text cta-email-text">
                                        <a href="mailto:jurivalegal@gmail.com">jurivalegal@gmail.com</a>
                                    </p>
                                    <p className="cta-secondary-text">
                                        <a href="mailto:jurivalegal@gmail.com" className="cta-action-link">Write to Chamber &rarr;</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/contact" className="cta-button">Contact Chamber</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
