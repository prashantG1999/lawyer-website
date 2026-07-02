import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const servicesList = [
    {
        id: 'civil-law',
        title: 'Civil Law',
        description: 'Specialized in property disputes, breach of contract, recovery suits, injunctions, and landlord-tenant litigation under the CPC and local state laws.',
        icon: '⚖️'
    },
    {
        id: 'criminal-law',
        title: 'Criminal Law',
        description: 'Offering strong defense representation and bail applications, handling matters ranging from white-collar crimes and fraud to private complaints and FIR quashing.',
        icon: '🛡️'
    },
    {
        id: 'family-law',
        title: 'Family & Matrimonial Law',
        description: 'Providing compassionate yet assertive guidance through divorce proceedings, child custody battles, maintenance/Alimony issues, and domestic violence cases.',
        icon: '👨‍👩‍👧‍👦'
    },
    {
        id: 'personal-law',
        title: 'Personal Law & Succession',
        description: 'Assisting with the drafting and execution of Wills, probate administration, partition suits, and succession certificates across different personal law frameworks in India.',
        icon: '📜'
    },
    {
        id: 'revenue-law',
        title: 'Revenue Law',
        description: 'Expertise in matters related to land revenue, agricultural land disputes, mutations, land demarcation, and proceedings before various revenue authorities and courts.',
        icon: '🌾'
    },
    {
        id: 'other-legal-services',
        title: 'Other Legal Services',
        description: 'Proficient in consumer court disputes, cheque bounce cases (Section 138 of the NI Act), legal drafting, and comprehensive contract reviews.',
        icon: '💼'
    }
];

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
                    {servicesList.map((service, index) => (
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
