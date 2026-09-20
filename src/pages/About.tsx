import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about-page">
            <Helmet>
                <title>About Juriva Legal | Advocates & Solicitors, Kota, Rajasthan</title>
                <meta 
                    name="description" 
                    content="JURIVA LEGAL is a legal practice based in Rajasthan, with practice areas including civil and criminal litigation, banking and financial laws, revenue and land law, negotiable instruments law, family and matrimonial law, personal law and succession, and arbitration and alternative dispute resolution." 
                />
            </Helmet>

            <div className="about-wrapper">
                <header className="about-header">
                    <span className="about-badge">CHAMBER PROFILE</span>
                    <h1>JURIVA <span>LEGAL</span></h1>
                    <p className="about-lead about-lead-subtitle">Advocates &amp; Solicitors</p>
                    <p className="about-lead">
                        JURIVA LEGAL is a legal practice based in Rajasthan, with practice areas including civil and criminal litigation, banking and financial laws, revenue and land law, negotiable instruments law, family and matrimonial law, personal law and succession, and arbitration and alternative dispute resolution.
                    </p>
                    <div className="about-header-divider"></div>
                </header>

                <div className="about-content">
                    {/* Section 1: Legal Practice */}
                    <article className="about-section">
                        <h2>Legal Practice</h2>
                        <div className="about-body">
                            <p>
                                <strong>JURIVA LEGAL</strong> is a legal practice based in Rajasthan, undertaking matters before courts, tribunals, statutory authorities and other legally constituted forums, subject to the applicable jurisdiction, statutory framework and procedural requirements.
                            </p>
                            <p>
                                The practice encompasses matters relating to civil and criminal litigation, banking and financial laws, revenue and land law, negotiable instruments law, family and matrimonial law, personal law and succession, and arbitration and alternative dispute resolution.
                            </p>
                            <p>
                                The nature of legal work undertaken in any matter depends upon the facts and circumstances of the matter, the applicable law, the jurisdiction of the concerned forum and the procedural requirements governing the proceedings.
                            </p>
                        </div>
                    </article>

                    {/* Section 2: Areas of Legal Practice */}
                    <article className="about-section">
                        <h2>Areas of Legal Practice</h2>
                        <div className="about-body">
                            <p>
                                The practice includes matters arising under various branches of substantive and procedural law. These include civil proceedings, criminal proceedings, property and land-related matters, banking and financial disputes, proceedings relating to negotiable instruments, family and matrimonial proceedings, succession and personal-law matters, and proceedings relating to arbitration and other forms of alternative dispute resolution.
                            </p>
                            <p>
                                The practice also encompasses proceedings arising at different stages of the legal process, including proceedings at the original, appellate, revisional, supervisory and writ jurisdictions, wherever applicable.
                            </p>
                            <p>
                                Legal work may include legal research, examination of relevant statutory provisions and precedents, preparation and drafting of pleadings and other legal documents, representation in proceedings, and consideration of remedies available under the applicable legal and procedural framework.
                            </p>
                        </div>
                    </article>

                    {/* Section 3: Courts, Tribunals and Other Forums */}
                    <article className="about-section">
                        <h2>Courts, Tribunals and Other Forums</h2>
                        <div className="about-body">
                            <p>
                                Matters may be undertaken before District Courts, Sessions Courts, Commercial Courts, Family Courts, Magistrate Courts and other subordinate courts, subject to the jurisdiction and applicable procedural requirements of the concerned forum.
                            </p>
                            <p>
                                Where legally permissible and within the applicable jurisdiction, matters may also involve proceedings before High Courts and the Supreme Court of India, including proceedings arising from orders or judgments of subordinate courts, tribunals and other legally constituted authorities.
                            </p>
                            <p>
                                The practice also encompasses proceedings before specialised tribunals, statutory authorities, regulatory bodies and quasi-judicial forums, where applicable to the subject matter of the proceedings and the jurisdiction conferred upon the concerned authority or forum.
                            </p>
                        </div>
                    </article>

                    {/* Section 4: Nature and Stages of Proceedings */}
                    <article className="about-section">
                        <h2>Nature and Stages of Proceedings</h2>
                        <div className="about-body">
                            <p>
                                Legal proceedings may arise at different stages and under different jurisdictions depending upon the nature of the matter.
                            </p>
                            <p>
                                The practice includes matters involving original jurisdiction, where proceedings are instituted before the forum having jurisdiction over the subject matter; appellate jurisdiction, where an order or judgment is challenged before an appellate forum; and revisional or supervisory jurisdiction, where such jurisdiction is available under the applicable law.
                            </p>
                            <p>
                                The practice may also include proceedings invoking the writ jurisdiction of High Courts under Articles 226 and 227 of the Constitution of India, where the facts, circumstances and applicable law provide for such a remedy.
                            </p>
                            <p>
                                The availability, maintainability and scope of any particular legal remedy depend upon the governing legislation, jurisdiction of the concerned forum, procedural requirements, limitation and the facts of the individual matter.
                            </p>
                        </div>
                    </article>

                    {/* Section 5: Banking, Financial and Commercial Matters */}
                    <article className="about-section">
                        <h2>Banking, Financial and Commercial Matters</h2>
                        <div className="about-body">
                            <p>
                                The practice includes matters arising in the field of banking and financial laws, including proceedings concerning applicable debt-recovery, securitisation and financial-recovery frameworks.
                            </p>
                            <p>
                                Commercial and business-related matters may include proceedings arising from contractual, financial and commercial relationships and disputes, subject to the jurisdiction and statutory framework applicable to the particular matter.
                            </p>
                            <p>
                                Where proceedings involve specialised tribunals, statutory authorities or other designated forums, the nature and scope of representation depend upon the jurisdiction conferred upon the relevant forum and the applicable procedural law.
                            </p>
                        </div>
                    </article>

                    {/* Section 6: Civil, Property and Revenue Matters */}
                    <article className="about-section">
                        <h2>Civil, Property and Revenue Matters</h2>
                        <div className="about-body">
                            <p>
                                The practice includes civil litigation and property-related proceedings, including matters concerning rights, obligations, contracts, property and other civil disputes arising under applicable law.
                            </p>
                            <p>
                                Revenue and land-related matters may include proceedings concerning land records, revenue proceedings, land-related rights and disputes, and proceedings before competent revenue authorities and judicial forums, depending upon the nature of the matter and the jurisdiction prescribed by law.
                            </p>
                            <p>
                                The legal issues arising in such matters are examined with reference to the applicable statutes, rules, notifications, records, documents and judicial precedents relevant to the proceedings.
                            </p>
                        </div>
                    </article>

                    {/* Section 7: Criminal Proceedings */}
                    <article className="about-section">
                        <h2>Criminal Proceedings</h2>
                        <div className="about-body">
                            <p>
                                The practice also encompasses matters arising under criminal law and criminal procedure, including proceedings before competent criminal courts and other forums having jurisdiction under applicable law.
                            </p>
                            <p>
                                Depending upon the nature and stage of the proceedings, such matters may include proceedings before Magistrate Courts, Sessions Courts, High Courts and other legally constituted forums, subject to applicable jurisdiction and procedural requirements.
                            </p>
                            <p>
                                The nature of proceedings and available remedies depend upon the allegations, applicable statutory provisions, stage of proceedings and jurisdiction of the concerned forum.
                            </p>
                        </div>
                    </article>

                    {/* Section 8: Family and Matrimonial Matters */}
                    <article className="about-section">
                        <h2>Family and Matrimonial Matters</h2>
                        <div className="about-body">
                            <p>
                                The practice includes matters arising under applicable family and matrimonial laws, including proceedings relating to marriage, matrimonial disputes, maintenance, custody, succession and other connected legal issues, wherever applicable.
                            </p>
                            <p>
                                Such proceedings may involve original proceedings as well as appeals, revisions or other remedies available under the applicable statutory and procedural framework.
                            </p>
                            <p>
                                The nature of the proceedings and the legal remedies available depend upon the applicable personal law, statutory provisions, jurisdiction and facts of the matter.
                            </p>
                        </div>
                    </article>

                    {/* Section 9: Negotiable Instruments Matters */}
                    <article className="about-section">
                        <h2>Negotiable Instruments Matters</h2>
                        <div className="about-body">
                            <p>
                                The practice includes matters arising under the Negotiable Instruments Act and other applicable laws, including proceedings concerning dishonour of cheques and related legal proceedings.
                            </p>
                            <p>
                                Such matters may involve proceedings before competent courts as well as appellate, revisional or other forums where a remedy is available under the applicable law.
                            </p>
                        </div>
                    </article>

                    {/* Section 10: Personal Law and Succession */}
                    <article className="about-section">
                        <h2>Personal Law and Succession</h2>
                        <div className="about-body">
                            <p>
                                The practice includes matters concerning personal laws, succession, inheritance and related legal proceedings, subject to the personal law and statutory framework applicable to the particular matter.
                            </p>
                            <p>
                                Proceedings may involve determination of rights, succession-related questions, inheritance, testamentary and other connected issues before the forum having jurisdiction over the matter.
                            </p>
                        </div>
                    </article>

                    {/* Section 11: Arbitration and Alternative Dispute Resolution */}
                    <article className="about-section">
                        <h2>Arbitration and Alternative Dispute Resolution</h2>
                        <div className="about-body">
                            <p>
                                The practice also encompasses matters relating to arbitration and alternative dispute resolution, including proceedings arising under the applicable arbitration law and related procedural provisions.
                            </p>
                            <p>
                                Depending upon the circumstances of the matter, proceedings may arise in relation to arbitration agreements, arbitral proceedings, interim measures, challenges to arbitral awards, enforcement and other remedies available under the applicable statutory framework.
                            </p>
                        </div>
                    </article>

                    {/* Section 12: Legal Research, Drafting and Representation */}
                    <article className="about-section">
                        <h2>Legal Research, Drafting and Representation</h2>
                        <div className="about-body">
                            <p>
                                Legal work undertaken in a matter may involve examination of the relevant statutory provisions, rules, regulations, notifications, judicial precedents and documentary material applicable to the dispute or proceeding.
                            </p>
                            <p>
                                The practice also includes preparation and drafting of pleadings, applications, replies, written submissions, appeals, revisions, petitions and other legal documents, as applicable to the nature and stage of the proceedings.
                            </p>
                            <p>
                                Representation in proceedings is undertaken before the forum having jurisdiction over the particular matter and in accordance with the applicable procedural requirements.
                            </p>
                        </div>
                    </article>

                    {/* Section 13: Jurisdiction and Applicable Law */}
                    <article className="about-section">
                        <h2>Jurisdiction and Applicable Law</h2>
                        <div className="about-body">
                            <p>
                                The jurisdiction in which a matter may be instituted or defended depends upon the applicable substantive and procedural law, territorial and pecuniary jurisdiction, subject-matter jurisdiction, limitation requirements and other conditions prescribed by law.
                            </p>
                            <p>
                                The availability of an appeal, revision, review, supervisory remedy, writ proceeding or other legal remedy similarly depends upon the statutory framework and the facts and circumstances of the matter.
                            </p>
                            <p>
                                Accordingly, the legal course applicable to a particular matter is determined with reference to the relevant law, jurisdiction, procedural requirements and factual circumstances.
                            </p>
                        </div>
                    </article>

                    {/* Section 14: Professional Information & Notice */}
                    <article className="about-section about-professional-card">
                        <div className="professional-card-header">
                            <div className="professional-card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    <circle cx="12" cy="11" r="3"/>
                                </svg>
                            </div>
                            <h2>Professional Information</h2>
                        </div>
                        <div className="about-body">
                            <p>
                                <strong>JURIVA LEGAL</strong> undertakes legal practice in the areas stated above. Details concerning the advocate, professional qualifications, enrolment particulars, office details and areas of practice may be provided separately on this website.
                            </p>
                            <p className="professional-disclaimer">
                                The information contained on this website is intended to provide general information concerning the legal practice and its areas of practice. It is not intended to constitute legal advice or to create an advocate-client relationship in the absence of a professional engagement in accordance with applicable law and professional requirements.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default About;
