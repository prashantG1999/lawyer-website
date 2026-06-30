import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-container">
                <h1>About <span>Juriva Legal</span></h1>
                <p className="about-subtitle">Comprehensive Legal Expertise You Can Trust</p>
                <div className="about-details">
                    <p>
                        Navigating the complexities of the Indian legal system requires more than just knowledge of the law—it demands strategy, empathy, and dedicated advocacy. With <strong>years of extensive experience</strong> practicing across various courts and tribunals in India, we provide robust legal representation and strategic counsel tailored to your unique situation.
                    </p>
                    <p>
                        Our practice is built on the pillars of integrity, transparency, and an unwavering commitment to securing justice for our clients. Whether you are facing a high-stakes corporate dispute, a sensitive family matter, or require a strong defense in a criminal proceeding, your case will be handled with the highest level of professionalism.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
