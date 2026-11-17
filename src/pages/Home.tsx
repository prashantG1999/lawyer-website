import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImage from '../assets/Juriva_Logo.png';
import { blogPosts } from '../data/blogData.ts';
import { practiceAreasList } from '../data/practiceAreasData.ts';

const faqs = [
    {
        question: "How can I consult or hire an experienced lawyer in Kota, Rajasthan?",
        answer: "You can schedule a consultation with Juriva Legal by contacting our Kota chambers via phone (+91 96642 81653), WhatsApp, or email (jurivalegal@gmail.com). Our chambers are situated at Sogaria and R.K. Puram in Kota, Rajasthan. We provide comprehensive case evaluations for civil litigation, criminal defense, banking/DRT, and land disputes."
    },
    {
        question: "Does Juriva Legal practice before the Rajasthan High Court and DRT Jaipur?",
        answer: "Yes, Advocate Nishant Giri and the chamber team represent clients before the Rajasthan High Court (Jaipur Bench) for writ petitions, civil/criminal appeals, and revisions, as well as before the Debt Recovery Tribunal (DRT Jaipur) for SARFAESI and debt recovery proceedings across Rajasthan."
    },
    {
        question: "What legal assistance is available for property and revenue land disputes in Kota and Rajasthan?",
        answer: "Juriva Legal provides comprehensive litigation for ancestral property partition, title declarations, illegal possession, agricultural land tenancy disputes under the Rajasthan Tenancy Act, and mutation/partition matters before Revenue Courts (Tehsildar, SDM, Collector, and Board of Revenue Rajasthan, Ajmer)."
    },
    {
        question: "What representation is provided in Kota District Courts for criminal and cheque bounce matters?",
        answer: "We represent clients before the Chief Judicial Magistrate (CJM), Judicial Magistrates, and Sessions Courts of Kota for regular and anticipatory bail, trials under BNS and BNSS, and fast-track prosecution or defense in Section 138 Negotiable Instruments Act (cheque bounce) cases."
    }
];

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <div className="home-page">
            <Helmet>
                <title>Juriva Legal | Leading Lawyers in Kota &amp; Advocates in Rajasthan</title>
                <meta
                    name="description"
                    content="Looking for a trusted lawyer in Kota or advocate in Rajasthan? Juriva Legal provides strategic legal counsel across Kota District Courts, Rajasthan High Court, DRT Jaipur, civil, criminal, banking, and land disputes."
                />
                <meta name="keywords" content="Lawyer in Kota, Lawyer in Rajasthan, Advocate in Kota, Advocate in Rajasthan, Best Lawyer in Kota, Top Advocates Kota, Law Firm in Kota, Law Firm in Rajasthan, Rajasthan High Court Advocate, Kota District Court Lawyer, DRT Lawyer Jaipur, Civil Lawyer Kota, Criminal Lawyer Kota, Revenue Land Lawyer Kota" />
                <link rel="canonical" href="https://jurivalegal.in/" />
                <meta property="og:title" content="Juriva Legal | Leading Lawyers in Kota &amp; Advocates in Rajasthan" />
                <meta property="og:description" content="Trusted legal counsel and courtroom representation in Kota and throughout Rajasthan across District Courts, Rajasthan High Court, and DRT Jaipur." />
                <meta property="og:url" content="https://jurivalegal.in/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Juriva Legal | Lawyers in Kota &amp; Advocates in Rajasthan" />
                <meta name="twitter:description" content="Trusted courtroom litigation and legal advisory across Kota District Courts, Rajasthan High Court, and DRT Jaipur." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>
                        <span className="hero-logo-wrapper">
                            <img
                                src={logoImage}
                                alt="Juriva Legal Logo"
                                className="hero-logo-large"
                                width="200"
                                height="200"
                                fetchPriority="high"
                                decoding="async"
                            />
                            <span>JURIVA <span style={{ color: 'var(--secondary-color)' }}>LEGAL</span></span>
                        </span>
                        <span className="hero-tagline">Lawyers in Kota &amp; Advocates in Rajasthan</span>
                    </h1>
                    <p className="font-bookman">
                        JURIVA LEGAL is a premier chamber of advocates and lawyers in Kota, Rajasthan, headed by Advocate Nishant Giri. We provide strategic counsel and robust courtroom litigation across Kota District &amp; Sessions Courts, the Rajasthan High Court, Debt Recovery Tribunal (DRT Jaipur), Revenue Courts, and tribunals throughout Rajasthan.
                    </p>
                    <div className="cta-group">
                        <NavLink to="/contact" className="cta-button">Get In Touch</NavLink>
                        <NavLink to="/services" className="cta-button secondary">Explore Practice Areas</NavLink>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro-section">
                <div className="container">
                    <div className="intro-quote-centered">
                        <div className="quote-wrapper">
                            <blockquote>
                                "Ubi Jus, Ibi Remedium"
                            </blockquote>
                            <p className="quote-desc">
                                Where there is a right, there is a remedy. Serving clients in Kota and across Rajasthan, our practice is grounded in meticulous legal analysis, statutory depth, and steadfast courtroom advocacy before District Courts, High Court, and tribunals in Rajasthan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas of Practice Preview Section */}
            <section className="home-services-preview">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center' }}>
                        <h2>Areas of Legal Practice in <span>Kota &amp; Rajasthan</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0.5rem auto 0' }}>
                            Comprehensive legal representation, trial advocacy, and dispute resolution across Kota courts and Rajasthan statutory forums.
                        </p>
                    </div>

                    <div className="home-services-grid">
                        {practiceAreasList.map((area) => (
                            <div
                                key={area.id}
                                className="home-service-card"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate(`/services/${area.id}`);
                                }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        window.scrollTo(0, 0);
                                        navigate(`/services/${area.id}`);
                                    }
                                }}
                            >
                                <div>
                                    <span className="home-service-icon" aria-hidden="true">{area.icon}</span>
                                    <h3>{area.title}</h3>
                                    <p>{area.description}</p>
                                </div>
                                <span className="home-service-link">
                                    Explore Practice &rarr;
                                </span>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <NavLink to="/services" className="cta-button" onClick={() => window.scrollTo(0, 0)}>
                            View All Practice Details
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Court & Tribunal Practice in Rajasthan */}
            <section className="home-forums-section">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center' }}>
                        <h2>Court &amp; Tribunal Practice Across <span>Rajasthan</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '720px', margin: '0.5rem auto 0' }}>
                            Active litigation and representation before judicial and quasi-judicial authorities in Kota and throughout Rajasthan.
                        </p>
                    </div>

                    <div className="forums-grid">
                        <div className="forum-card">
                            <span className="forum-badge">Kota Courts</span>
                            <h3>Kota District &amp; Sessions Judiciary</h3>
                            <p>
                                Comprehensive trial courtroom litigation before District &amp; Sessions Courts of Kota for civil suits, permanent injunctions, ancestral property partition, title declarations, and criminal trials under the Bharatiya Nyaya Sanhita (BNS) and BNSS.
                            </p>
                        </div>

                        <div className="forum-card">
                            <span className="forum-badge">High Court</span>
                            <h3>Rajasthan High Court Practice</h3>
                            <p>
                                Dedicated representation in constitutional writ petitions under Articles 226 and 227, civil and criminal revisions, first appeals, second appeals, and bail applications before the High Court of Judicature for Rajasthan (Jaipur Bench).
                            </p>
                        </div>

                        <div className="forum-card">
                            <span className="forum-badge">DRT Jaipur</span>
                            <h3>Banking &amp; DRT Practice in Rajasthan</h3>
                            <p>
                                Defense of borrowers, guarantors, and business enterprises under the SARFAESI Act, 2002 and RDB Act, 1993 before the Debt Recovery Tribunal (DRT Jaipur) and DRAT, including securing stays against property auctions and physical possession.
                            </p>
                        </div>

                        <div className="forum-card">
                            <span className="forum-badge">Revenue Courts</span>
                            <h3>Revenue &amp; Land Laws in Rajasthan</h3>
                            <p>
                                Dedicated advocacy under the Rajasthan Tenancy Act and Rajasthan Land Revenue Act before Revenue Courts (Tehsildar, SDM, District Collector, and Board of Revenue Rajasthan, Ajmer) for agricultural land partition and mutation.
                            </p>
                        </div>
                    </div>

                    {/* Regional Chamber Highlight */}
                    <div className="nri-highlight-box">
                        <h3>Legal Chambers in Kota Serving Clients Across Rajasthan</h3>
                        <p>
                            With chambers established at Sogaria and R.K. Puram in Kota, Juriva Legal represents individuals, families, and businesses across Kota, Bundi, Baran, Jhalawar (Hadoti region), Jaipur, and throughout Rajasthan. We provide comprehensive litigation and dispute resolution tailored to state laws, local court procedures, and client needs.
                        </p>
                        <NavLink to="/contact" className="cta-button" onClick={() => window.scrollTo(0, 0)}>
                            Consult Chamber Counsel in Kota
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Latest Legal Insights Section */}
            <section className="home-blog-section">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2>Legal Insights &amp; <span>Articles</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                            Legal analyses, case law commentaries, and practical guides on Rajasthan judicial practice and Indian law.
                        </p>
                    </div>

                    <div className="blog-grid">
                        {blogPosts.slice(0, 3).map((post) => (
                            <article
                                key={post.id}
                                className="blog-card"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate(`/blog/${post.slug}`);
                                }}
                            >
                                <div>
                                    <span className="card-category">{post.category}</span>
                                    <h3 className="card-title">{post.title}</h3>
                                    <p className="card-summary">{post.summary}</p>
                                </div>
                                <div className="card-footer">
                                    <span>{post.date}</span>
                                    <span className="read-more-link">Read Article &rarr;</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <NavLink to="/blog" className="cta-button secondary" onClick={() => window.scrollTo(0, 0)}>
                            Explore All Insights &rarr;
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="home-faq-section">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center' }}>
                        <h2>Frequently Asked <span>Questions</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                            Key information on retaining legal counsel, courtroom representation, and case evaluation in Kota and Rajasthan.
                        </p>
                    </div>

                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={openFaq === index}
                                >
                                    <span>{faq.question}</span>
                                    <span className="faq-icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </button>
                                {openFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get in Touch CTA Section */}
            <section className="home-cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Get in Touch with Chamber Counsel in Kota</h2>
                        <p>Contact the chamber to schedule an in-person or remote legal consultation regarding your matter in Kota or across Rajasthan.</p>

                        <div className="cta-info-grid">
                            <div className="cta-info-item">
                                <div className="cta-item-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="cta-item-content">
                                    <h4>Chambers</h4>
                                    <p className="cta-primary-text">Sogaria &amp; R.K Puram</p>
                                    <p className="cta-secondary-text">Kota, Rajasthan</p>
                                </div>
                            </div>
                            <div className="cta-info-item">
                                <div className="cta-item-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="cta-item-content">
                                    <h4>Phone</h4>
                                    <p className="cta-primary-text">
                                        <a href="tel:+919664281653">+91 96642 81653</a>
                                    </p>
                                    <p className="cta-secondary-text">
                                        <a href="tel:+918824770804">+91 88247 70804</a>
                                    </p>
                                </div>
                            </div>
                            <div className="cta-info-item">
                                <div className="cta-item-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.8 1.15-2.96-.19-.3a8.19 8.19 0 0 1-1.26-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                                    </svg>
                                </div>
                                <div className="cta-item-content">
                                    <h4>WhatsApp</h4>
                                    <p className="cta-primary-text">
                                        <a href="https://wa.me/919664281653" target="_blank" rel="noopener noreferrer">+91 96642 81653</a>
                                    </p>
                                    <p className="cta-secondary-text">
                                        <a href="https://wa.me/919664281653" target="_blank" rel="noopener noreferrer" className="cta-action-link">Chat Directly &rarr;</a>
                                    </p>
                                </div>
                            </div>
                            <div className="cta-info-item">
                                <div className="cta-item-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22 6 12 13 2 6"></polyline>
                                    </svg>
                                </div>
                                <div className="cta-item-content">
                                    <h4>Email</h4>
                                    <p className="cta-primary-text cta-email-text">
                                        <a href="mailto:jurivalegal@gmail.com">jurivalegal@gmail.com</a>
                                    </p>
                                    <p className="cta-secondary-text">
                                        <a href="mailto:jurivalegal@gmail.com" className="cta-action-link">Write to Chamber &rarr;</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/contact" className="cta-button">Contact Chamber</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
