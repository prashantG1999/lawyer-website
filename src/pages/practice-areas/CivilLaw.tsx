import React from 'react';
import './PracticeArea.css';

const CivilLaw: React.FC = () => {
    return (
        <section className="practice-area-page">
            <div className="practice-area-container">
                <h1>Civil Law</h1>
                <p className="practice-area-subtitle">Expert representation in civil disputes</p>
                <div className="practice-area-details">
                    <p>
                        Our practice specializes in property disputes, breach of contract, recovery suits, injunctions, and landlord-tenant litigation under the CPC and local state laws.
                    </p>
                    <p>
                        We understand that civil litigation can be complex and emotionally draining. We are committed to providing strategic and practical solutions to protect your rights and interests in all civil matters, ensuring a thorough approach from filing to the final judgment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CivilLaw;
