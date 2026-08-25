import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about">
            <Helmet>
                <title>About Us | Juriva Legal - Advocates in Kota, Rajasthan</title>
                <meta 
                    name="description" 
                    content="Learn about Juriva Legal's courtroom and tribunal advocacy based in Kota, Rajasthan, providing strategic legal representation across Indian courts." 
                />
            </Helmet>
            <div className="about-container">
                <h1>About <span>Juriva Legal</span></h1>
                <p className="about-subtitle">Comprehensive Legal Expertise You Can Trust</p>
                <div className="about-details">
                    <p>
                        Navigating the complexities of the Indian legal system requires more than a thorough knowledge of the law, it demands strategy, precision, empathy, and dedicated advocacy. With <em>years of extensive experience</em> in legal practice, we provide comprehensive legal representation and strategic counsel tailored to the unique facts, objectives, and challenges of each matter.
                    </p>
                    <p>
                        Our practice extends across <em>judicial, quasi-judicial, and specialised forums</em>, enabling us to advise and represent clients at every critical stage of a legal dispute. We appear before <strong>District Courts, Sessions Courts, Commercial Courts, Family Courts, Magistrate Courts, and other subordinate courts</strong>, while also representing clients before <strong>High Courts and the Supreme Court of India</strong>, subject to applicable jurisdiction and procedural requirements.
                    </p>
                    <p>
                        Our experience encompasses matters falling within <em>original, appellate, revisional, supervisory, and writ jurisdictions</em>. Whether initiating proceedings, defending a claim, challenging an adverse order, pursuing an appeal or revision, or seeking constitutional remedies through <strong>writ jurisdiction under Articles 226 and 227 of the Constitution of India</strong>, our approach is guided by the nature of the dispute and the most appropriate legal remedy available.
                    </p>
                    <p>
                        We also represent and advise clients before <em>specialised tribunals, statutory authorities, regulatory bodies, and quasi-judicial forums</em>, including proceedings involving banking, finance, commercial disputes, taxation, regulatory compliance, service matters, consumer disputes, insolvency, and other specialised areas of law. From proceedings at the <strong>original jurisdiction stage</strong> to challenges before <em>appellate and higher judicial forums</em>, we develop litigation strategies designed to address both immediate concerns and long-term legal objectives.
                    </p>
                    <p>
                        Our practice is built upon the pillars of <em>integrity, transparency, confidentiality, and an unwavering commitment to the interests of our clients</em>. We believe that effective advocacy begins with understanding, not merely the legal issue, but also the circumstances, commercial realities, personal concerns, and objectives underlying each matter.
                    </p>
                    <p>
                        Whether you are facing a <em>high-stakes commercial or corporate dispute, a banking or financial proceeding, a sensitive matrimonial or family matter, a civil or property dispute, a criminal proceeding, a regulatory action, or an appeal against an adverse order</em>, your matter is approached with careful legal analysis, meticulous preparation, and focused advocacy.
                    </p>
                    <p>
                        We do not believe in a one-size-fits-all approach to legal representation. <em>Every matter demands its own strategy, every client requires an individualised approach, and every legal remedy must be pursued with purpose.</em> From the first consultation through trial, appeal, revision, writ proceedings, or proceedings before specialised tribunals and authorities, we strive to provide clear advice, strong representation, and legally sound solutions at every stage.
                    </p>
                    <p>
                        Our objective is not merely to represent our clients, but to <em>understand their position, identify the most effective legal pathway, anticipate challenges, and pursue the remedy best suited to their interests</em> with diligence, discretion, and an uncompromising commitment to professional excellence.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

