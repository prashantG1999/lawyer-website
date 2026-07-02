import React from 'react';
import './PracticeArea.css';

const OtherLegalServices: React.FC = () => {
    return (
        <section className="practice-area-page">
            <div className="practice-area-container">
                <h1>Other Legal Services</h1>
                <p className="practice-area-subtitle">Comprehensive legal solutions</p>
                <div className="practice-area-details">
                    <p>
                        Proficient in consumer court disputes, cheque bounce cases (Section 138 of the NI Act), legal drafting, and comprehensive contract reviews.
                    </p>
                    <p>
                        Beyond our core practice areas, we provide a wide range of legal services tailored to meet your everyday legal needs. Whether you are dealing with a defective product, a dishonored cheque, or need a watertight contract, our team is equipped to deliver effective solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OtherLegalServices;
