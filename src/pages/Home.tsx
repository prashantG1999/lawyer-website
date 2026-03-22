import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>
                        <span>Justice. Integrity.</span>
                        Excellence in Law.
                    </h1>
                    <p>Providing top-tier legal representation with a commitment to your success and a focus on results.</p>
                    <div className="cta-group">
                        <NavLink to="/contact" className="cta-button">Book a Consultation</NavLink>
                        <NavLink to="/services" className="cta-button secondary">Explore Services</NavLink>
                    </div>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose Us?</h2>
                    </div>
                    <p>
                        We combine deep legal knowledge with a client-centric approach. Whether you are facing a complex corporate dispute or a personal legal matter, we stand by your side with unwavering dedication.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
