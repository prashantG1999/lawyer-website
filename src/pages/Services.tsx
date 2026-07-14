import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

import { practiceAreasList } from '../data/practiceAreasData.ts';


const Services: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="services-page">
            <div className="container">
                <div className="section-header">
                    <h1>Our Practice Areas</h1>
                    <p>Delivering specialized legal solutions with precision and care.</p>
                </div>
                <div className="services-grid">
                    {practiceAreasList.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-card"
                            onClick={() => {
                                window.scrollTo(0, 0);
                                navigate(`/services/${service.id}`);
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    window.scrollTo(0, 0);
                                    navigate(`/services/${service.id}`);
                                }
                            }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
