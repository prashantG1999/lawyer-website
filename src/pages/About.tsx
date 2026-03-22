import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-container">
                <h1>About Our <span>Firm</span></h1>
                <p>
                    With over 20 years of excellence, our team of dedicated legal professionals provides 
                    personalized solutions tailored to the unique needs of our clients. We believe in 
                    justice, integrity, and the relentless pursuit of excellence in every case we handle.
                </p>
            </div>
        </section>
    );
};

export default About;
