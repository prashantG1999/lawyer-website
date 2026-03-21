import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Justice. Integrity. Excellence.</h1>
                    <p>Providing top-tier legal representation with a commitment to your success.</p>
                    <a href="/contact" className="cta-button">Book a Consultation</a>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <h2>Why Choose Us?</h2>
                    <p>
                        We combine deep legal knowledge with a client-centric approach. Whether you are facing a complex corporate dispute or a personal legal matter, we stand by your side.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
