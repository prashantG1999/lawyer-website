import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>
                        <span>Juriva Legal</span>
                        Comprehensive Legal Expertise You Can Trust
                    </h1>
                    <p>
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
                                    <p><a href="mailto:nishantgiri102096@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>nishantgiri102096@gmail.com</a></p>
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
