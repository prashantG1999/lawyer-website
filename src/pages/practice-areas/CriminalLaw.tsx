import React from 'react';
import './PracticeArea.css';

const CriminalLaw: React.FC = () => {
    return (
        <section className="practice-area-page">
            <div className="practice-area-container">
                <h1>Criminal Law</h1>
                <p className="practice-area-subtitle">Strong defense and legal representation</p>
                <div className="practice-area-details">
                    <p>
                        Offering strong defense representation and bail applications, handling matters ranging from white-collar crimes and fraud to private complaints and FIR quashing.
                    </p>
                    <p>
                        A criminal charge requires immediate and decisive action. Our experienced team works meticulously to build a robust defense strategy, protecting your rights and guiding you through every step of the criminal justice system with utmost confidentiality.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CriminalLaw;
