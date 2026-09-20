import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about-page">
            <Helmet>
                <title>About Juriva Legal | Advocates & Solicitors, Kota, Rajasthan</title>
                <meta
                    name="description"
                    content="Juriva Legal is a legal practice based in Kota, Rajasthan, headed by Advocate Nishant Giri. The practice undertakes civil, criminal, banking, revenue, family, and arbitration matters before courts and tribunals."
                />
            </Helmet>

            <div className="about-wrapper">
                <header className="about-header">
                    <span className="about-badge">CHAMBER PROFILE</span>
                    <h1>JURIVA <span>LEGAL</span></h1>
                    <p className="about-lead about-lead-subtitle">Advocates &amp; Solicitors</p>
                    <p className="about-lead">
                        A legal practice based in Kota, Rajasthan, undertaking matters before courts, tribunals, statutory authorities and legally constituted forums across a range of civil and criminal jurisdictions.
                    </p>
                    <div className="about-header-divider"></div>
                </header>

                <div className="about-content">

                    {/* Section 1: The Advocate */}
                    <article className="about-section about-advocate-card">
                        <div className="advocate-card-inner">
                            <div className="advocate-avatar">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <div className="advocate-details">
                                <h2>Adv. Nishant Giri</h2>
                                <p className="advocate-designation">Advocate — Enrolled with the Bar Council of Rajasthan</p>
                                <p>
                                    Advocate Nishant Giri is the principal advocate of Juriva Legal, practising before the District and Sessions Courts of Kota, Revenue Courts and Authorities, Debt Recovery Tribunals, Family Courts, and the Rajasthan High Court, subject to applicable jurisdiction.
                                </p>
                                <p>
                                    The practice was established with chambers in Kota, Rajasthan, and undertakes matters in the fields of civil litigation, criminal law, banking and financial law, revenue and land law, negotiable instruments law, family and matrimonial law, personal law and succession, and arbitration and alternative dispute resolution.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Section 2: Chambers */}
                    <article className="about-section">
                        <h2>Chambers</h2>
                        <div className="about-body">
                            <p>
                                The practice maintains two chambers in Kota, Rajasthan — at <strong>Sogaria</strong> and at <strong>R.K. Puram</strong>. Client meetings, consultations, and instructions may be received at either chamber, subject to prior appointment and the availability of the advocate.
                            </p>
                            <p>
                                Kota, situated in Rajasthan, is a significant district headquarters with an active judicial infrastructure comprising District and Sessions Courts, Family Courts, Revenue Courts, and other subordinate judicial forums. The proximity of Kota to the Rajasthan High Court at Jodhpur (and its Principal Seat at Jodhpur and Bench at Jaipur) facilitates representation across multiple appellate jurisdictions where required.
                            </p>
                            <div className="about-chambers-grid">
                                <div className="about-chamber-card">
                                    <span className="about-chamber-icon">📍</span>
                                    <div>
                                        <strong>Sogaria Chamber</strong>
                                        <p>Sogaria, Kota, Rajasthan</p>
                                        <p><a href="tel:+919664281653">+91 96642 81653</a>&nbsp;|&nbsp;<a href="tel:+919660460445">+91 96604 60445</a></p>
                                    </div>
                                </div>
                                <div className="about-chamber-card">
                                    <span className="about-chamber-icon">📍</span>
                                    <div>
                                        <strong>R.K. Puram Chamber</strong>
                                        <p>R.K. Puram, Kota, Rajasthan</p>
                                        <p><a href="tel:+918824770804">+91 88247 70804</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Section 3: Scope of Practice */}
                    <article className="about-section">
                        <h2>Scope of Practice</h2>
                        <div className="about-body">
                            <p>
                                The practice undertakes matters before courts, tribunals, statutory authorities and other legally constituted forums, subject to the applicable jurisdiction, statutory framework and procedural requirements. The legal work undertaken may span original proceedings, appellate proceedings, revisional proceedings, supervisory jurisdiction, and writ jurisdiction under Articles 226 and 227 of the Constitution of India.
                            </p>
                            <p>
                                The matters undertaken by the practice span the following principal areas of law:
                            </p>
                            <ul className="about-practice-list">
                                <li>Civil litigation, including property disputes, injunctions, specific performance, partition, and contractual matters before civil and commercial courts</li>
                                <li>Criminal law, including bail proceedings, trial representation, and appellate matters before Magistrate and Sessions Courts and the High Court</li>
                                <li>Banking and financial laws, including proceedings under the SARFAESI Act, 2002 and the Recovery of Debts and Bankruptcy Act, 1993 before the Debt Recovery Tribunal and Debt Recovery Appellate Tribunal</li>
                                <li>Revenue and land laws, including tenancy rights, mutation proceedings, and appeals before revenue authorities and the Board of Revenue for Rajasthan</li>
                                <li>Negotiable instruments law, including cheque dishonour proceedings under Section 138 of the Negotiable Instruments Act, 1881</li>
                                <li>Family and matrimonial law, including divorce, maintenance, custody, and domestic violence proceedings before Family Courts and Magistrate Courts</li>
                                <li>Personal law and succession, including probate, letters of administration, succession certificates, and inheritance disputes</li>
                                <li>Arbitration and alternative dispute resolution under the Arbitration and Conciliation Act, 1996 and the Mediation Act, 2023</li>
                            </ul>
                        </div>
                    </article>

                    {/* Section 4: Courts & Forums */}
                    <article className="about-section">
                        <h2>Courts and Forums</h2>
                        <div className="about-body">
                            <p>
                                Depending upon the nature of the matter and applicable law, representation is undertaken before the following forums, subject to jurisdiction:
                            </p>
                            <div className="about-forums-grid">
                                <div className="about-forum-item">
                                    <strong>Civil &amp; Commercial Courts</strong>
                                    <span>District Courts, Commercial Courts, Munsiff Courts</span>
                                </div>
                                <div className="about-forum-item">
                                    <strong>Criminal Courts</strong>
                                    <span>Courts of Judicial Magistrate, Chief Judicial Magistrate, Courts of Session</span>
                                </div>
                                <div className="about-forum-item">
                                    <strong>Family Courts</strong>
                                    <span>Family Courts and Magistrate Courts for matrimonial proceedings</span>
                                </div>
                                <div className="about-forum-item">
                                    <strong>Revenue Authorities</strong>
                                    <span>Tehsildar, SDO, Collector, RAA, Board of Revenue (Ajmer)</span>
                                </div>
                                <div className="about-forum-item">
                                    <strong>Debt Recovery Tribunals</strong>
                                    <span>DRT Jaipur &amp; DRAT Delhi (SARFAESI / RDB Act matters)</span>
                                </div>
                                <div className="about-forum-item">
                                    <strong>High Court</strong>
                                    <span>Rajasthan High Court — writ, appellate, and revisional jurisdiction</span>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Section 5: Professional Disclaimer */}
                    <article className="about-section about-professional-card">
                        <div className="professional-card-header">
                            <div className="professional-card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    <circle cx="12" cy="11" r="3"/>
                                </svg>
                            </div>
                            <h2>Professional Information &amp; Disclaimer</h2>
                        </div>
                        <div className="about-body">
                            <p>
                                <strong>JURIVA LEGAL</strong> is the professional name of the practice of Advocate Nishant Giri, enrolled with the Bar Council of Rajasthan. The practice is subject to the Bar Council of India Rules and the Advocates Act, 1961 and their amendments from time to time.
                            </p>
                            <p className="professional-disclaimer">
                                As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website has been created solely to provide factual information about the legal practice and its areas of work to persons seeking such information. Nothing on this website constitutes legal advice or creates an advocate-client relationship. The information provided is general in nature and is not a substitute for advice from a qualified legal professional in respect of any specific matter.
                            </p>
                            <NavLink to="/contact" className="cta-button" style={{ display: 'inline-block', marginTop: '1.5rem' }} onClick={() => window.scrollTo(0, 0)}>
                                Contact Chamber
                            </NavLink>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default About;
