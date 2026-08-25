import React, { useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
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
        .filter(item => item.id !== area.id)
        .slice(0, 3);

    return (
        <>
            <section className="practice-area-page">
                <div className="practice-area-container">
                    <Helmet>
                        <title>{area.title} | Juriva Legal, Kota, Rajasthan</title>
                        <meta name="description" content={`${area.title} legal representation & strategic advocacy by Juriva Legal in Kota, Rajasthan. ${area.description}`} />
                        <meta property="og:title" content={`${area.title} | Juriva Legal, Kota, Rajasthan`} />
                        <meta property="og:description" content={area.description} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:title" content={`${area.title} | Juriva Legal, Kota, Rajasthan`} />
                        <meta name="twitter:description" content={area.description} />
                    </Helmet>
                    
                    {/* Breadcrumb Navigation */}
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/">Home</NavLink>
                        <span>&rsaquo;</span>
                        <NavLink to="/services">Practice Areas</NavLink>
                        <span>&rsaquo;</span>
                        <span className="current" aria-current="page">{area.title}</span>
                    </nav>

                    {/* Header with Image on Left */}
                    <div className="practice-area-header-with-image">
                        {area.image && (
                            <div className="practice-area-header-img-wrap">
                                <img 
                                    src={area.image} 
                                    alt={area.title} 
                                    className="practice-area-header-img" 
                                    width="140"
                                    height="140"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        )}
                        <div className="practice-area-header-text">
                            <h1>{area.title}</h1>
                            <p className="practice-area-subtitle">{area.subtitle}</p>
                        </div>
                    </div>
                    
                    <div className="practice-area-details">
                        {/* Legal Maxim Highlight */}
                        {area.maxim && area.maxim.latin && (
                            <div className="practice-area-maxim-box">
                                <div className="maxim-quote-mark">&ldquo;</div>
                                <div className="maxim-content">
                                    <p className="maxim-latin">{area.maxim.latin}</p>
                                    {area.maxim.meaning && (
                                        <p className="maxim-meaning">{area.maxim.meaning}</p>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        {/* Main Body Paragraphs */}
                        <div className="practice-area-paragraphs">
                            {area.paragraphs.map((para, index) => (
                                <p key={index} className={index === 0 ? "practice-area-lead-para" : ""}>
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Core Legal Services */}
                        {area.services && area.services.length > 0 && (
                            <div className="practice-area-section-block">
                                <h2 className="practice-area-block-title">
                                    <span className="block-title-icon">⚖️</span>
                                    Core Legal &amp; Litigation Services
                                </h2>
                                <ul className="practice-area-services-list">
                                    {area.services.map((srv, idx) => (
                                        <li key={idx} className="practice-area-service-item">
                                            <span className="service-bullet-icon">✦</span>
                                            <span>{srv}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Courts, Tribunals & Forums */}
                        {area.forums && (
                            <div className="practice-area-section-block">
                                <h2 className="practice-area-block-title">
                                    <span className="block-title-icon">🏛️</span>
                                    Courts, Tribunals &amp; Jurisdictional Forums
                                </h2>
                                <div className="practice-area-badge-box">
                                    <p className="practice-area-forum-text">{area.forums}</p>
                                </div>
                            </div>
                        )}

                        {/* Key Governing Legislation */}
                        {area.laws && (
                            <div className="practice-area-section-block">
                                <h2 className="practice-area-block-title">
                                    <span className="block-title-icon">📜</span>
                                    Key Governing Legislation &amp; Statutory Framework
                                </h2>
                                <div className="practice-area-badge-box laws-box">
                                    <p className="practice-area-laws-text">{area.laws}</p>
                                </div>
                            </div>
                        )}
                        
                        <div className="practice-area-footer-nav">
                            <Link to="/services" className="back-link">
                                &larr; Back to All Practice Areas
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
                                    <div className="related-card-img-wrap">
                                        <img 
                                            src={related.image} 
                                            alt={related.title} 
                                            width="120"
                                            height="120"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="related-card-body">
                                        <h3>{related.title}</h3>
                                        <p>{related.description}</p>
                                        <span className="related-card-arrow">Read More &rarr;</span>
                                    </div>
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

