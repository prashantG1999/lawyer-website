import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Services.css';
import { practiceAreasList } from '../data/practiceAreasData.ts';

const Services: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="services-page">
            <Helmet>
                <title>Practice Areas | Juriva Legal - Advocates in Kota, Rajasthan</title>
                <meta 
                    name="description" 
                    content="Comprehensive legal practice in Kota, Rajasthan: Banking Laws (DRT/SARFAESI), Civil Litigation, Criminal Defense, Revenue & Land Laws, NI Act, Family Law, Succession, and Arbitration." 
                />
            </Helmet>
            <div className="container">
                <div className="section-header">
                    <h1>Our Practice Areas</h1>
                    <p>Delivering specialized legal solutions with precision, strategic rigor, and dedicated advocacy.</p>
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
                            <div className="service-card-image-wrapper">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="service-card-image" 
                                    width="220"
                                    height="220"
                                    loading="lazy" 
                                    decoding="async"
                                />
                            </div>
                            
                            <div className="service-card-content">
                                {service.maxim && (
                                    <span className="service-card-maxim">
                                        &ldquo;{service.maxim.latin}&rdquo;
                                    </span>
                                )}
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <span className="service-card-link">
                                    Explore Practice Area &rarr;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;


