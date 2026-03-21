import React from 'react';
import './Services.css';

const servicesList = [
    {
        title: 'Civil Litigation',
        description: 'Expert representation in civil disputes, property matters, and contract enforcement.',
        icon: '⚖️'
    },
    {
        title: 'Criminal Defense',
        description: 'Strategic defense for individuals facing criminal charges, ensuring fair trial rights.',
        icon: '🛡️'
    },
    {
        title: 'Corporate Law',
        description: 'Comprehensive legal advisory for businesses, startups, and mergers & acquisitions.',
        icon: '🏢'
    },
    {
        title: 'Family Law',
        description: 'Compassionate handling of divorce, child custody, and inheritance matters.',
        icon: '👨‍👩‍👧‍👦'
    },
    {
        title: 'Intellectual Property',
        description: 'Protecting your creative assets through trademarks, copyrights, and patents.',
        icon: '💡'
    },
    {
        title: 'Real Estate',
        description: 'Navigating complex property transactions, disputes, and regulatory compliance.',
        icon: '🏠'
    }
];

const Services: React.FC = () => {
    return (
        <section className="services-page">
            <div className="container">
                <div className="section-header">
                    <h1>Our Practice Areas</h1>
                    <p>Delivering specialized legal solutions with precision and care.</p>
                </div>
                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div key={index} className="service-card">
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
