import React from 'react';
import './Home.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImage from '../assets/Juriva_Logo.png';
import { blogPosts } from '../data/blogData.ts';

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>
                        <span className="hero-logo-wrapper">
                            <img src={logoImage} alt="Juriva Legal Logo" className="hero-logo-large" />
                            <span>Juriva <span style={{ color: 'var(--secondary-color)' }}>Legal</span></span>
                        </span>
                        Comprehensive Legal Expertise You Can Trust
                    </h1>
                    <p className="font-bookman">
                        With years of extensive experience practicing across various courts and tribunals in India,
                        providing robust legal representation and strategic counsel tailored to your unique situation.
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
                                    "Justice delayed is justice denied."
                                </blockquote>
                                <p className="quote-desc">
                                    We focus on providing efficient, result-oriented legal strategies, prioritizing mediation and settlement where possible, and fierce litigation when necessary.
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
                                <span className="icon">📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p>Kota, Rajasthan, India</p>
                                </div>
                            </div>
                            <div className="cta-info-item">
                                <span className="icon">📞</span>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919660460445" style={{ color: 'inherit', textDecoration: 'none' }}>+91-9660460445</a></p>
                                </div>
                            </div>
                            <div className="cta-info-item">
                                <span className="icon">✉️</span>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:advnishantgiri@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>advnishantgiri@gmail.com</a></p>
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
