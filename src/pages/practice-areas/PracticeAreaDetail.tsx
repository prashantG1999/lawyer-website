import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPracticeAreaById, practiceAreasList } from '../../data/practiceAreasData.ts';
import './PracticeArea.css';

const PracticeAreaDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const area = id ? getPracticeAreaById(id) : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!area) {
        return (
            <section className="practice-area-page">
                <div className="practice-area-container">
                    <Helmet>
                        <title>Practice Area Not Found | Juriva Legal</title>
                        <meta name="description" content="The requested practice area was not found." />
                    </Helmet>
                    <h1>Practice Area Not Found</h1>
                    <div className="practice-area-details" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                        <p>The practice area you are looking for does not exist or has been moved.</p>
                        <Link to="/services" className="cta-button" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.8rem 2rem', textDecoration: 'none', backgroundColor: 'var(--secondary-color)', color: 'var(--text-primary)', borderRadius: 'var(--border-radius)', fontWeight: 'bold' }}>
                            Back to All Practice Areas
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    const relatedAreas = practiceAreasList
        .filter(item => item.id !== id)
        .slice(0, 3);

    return (
        <>
            <section className="practice-area-page">
                <div className="practice-area-container">
                    <Helmet>
                        <title>{area.title} | Juriva Legal</title>
                        <meta name="description" content={area.description} />
                    </Helmet>
                    
                    <h1>{area.title}</h1>
                    <p className="practice-area-subtitle">{area.subtitle}</p>
                    
                    <div className="practice-area-details">
                        {area.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        
                        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
                            <Link to="/services" style={{ textDecoration: 'none', color: 'var(--secondary-color)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                ← Back to All Practice Areas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {relatedAreas.length > 0 && (
                <section className="related-areas-section">
                    <div className="container">
                        <div className="section-title">
                            <h2>Related <span>Practice Areas</span></h2>
                        </div>
                        <div className="related-grid">
                            {relatedAreas.map((related) => (
                                <Link 
                                    key={related.id} 
                                    to={`/services/${related.id}`} 
                                    className="related-card"
                                >
                                    <span className="related-icon" role="img" aria-hidden="true">{related.icon}</span>
                                    <h3>{related.title}</h3>
                                    <p>{related.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default PracticeAreaDetail;
