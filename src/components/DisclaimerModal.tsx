import React, { useState, useEffect } from 'react';
import './DisclaimerModal.css';

const DisclaimerModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window === 'undefined') return false;
        const params = new URLSearchParams(window.location.search);
        if (params.get('reset') === 'true') {
            localStorage.removeItem('juriva_disclaimer_agreed');
        }
        const agreed = localStorage.getItem('juriva_disclaimer_agreed');
        return agreed !== 'true';
    });

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add('disclaimer-active');
        } else {
            document.body.classList.remove('disclaimer-active');
        }
        return () => {
            document.body.classList.remove('disclaimer-active');
        };
    }, [isVisible]);

    const handleAgree = () => {
        localStorage.setItem('juriva_disclaimer_agreed', 'true');
        setIsVisible(false);
    };

    const handleDisagree = () => {
        window.location.href = 'https://www.google.com';
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="disclaimer-overlay">
            <div className="disclaimer-modal" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
                <div className="disclaimer-header">
                    <h2 id="disclaimer-title" className="disclaimer-title">Disclaimer</h2>
                    <button 
                        className="disclaimer-close" 
                        onClick={handleDisagree} 
                        aria-label="Close and decline disclaimer"
                    >
                        &times;
                    </button>
                </div>
                
                <div className="disclaimer-body">
                    <p className="disclaimer-intro">
                        The rules of the Bar Council of India prohibit law firms/advocates from soliciting work or advertising in any manner. By clicking on 'I AGREE', the user acknowledges that:
                    </p>
                    
                    <ul className="disclaimer-list">
                        <li className="disclaimer-item">
                            <div className="disclaimer-bullet"></div>
                            <p className="disclaimer-text">
                                The user wishes to gain more information about Juriva Legal, its practice areas and its attorneys, for his/her own information and use.
                            </p>
                        </li>
                        <li className="disclaimer-item">
                            <div className="disclaimer-bullet"></div>
                            <p className="disclaimer-text">
                                The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site is not intended to, and will not create any lawyer-client relationship.
                            </p>
                        </li>
                        <li className="disclaimer-item">
                            <div className="disclaimer-bullet"></div>
                            <p className="disclaimer-text">
                                None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
                            </p>
                        </li>
                        <li className="disclaimer-item">
                            <div className="disclaimer-bullet"></div>
                            <p className="disclaimer-text">
                                Juriva Legal is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
                            </p>
                        </li>
                    </ul>
                </div>
                
                <div className="disclaimer-footer">
                    <button className="disclaimer-btn disclaimer-btn-agree" onClick={handleAgree}>
                        I Agree
                    </button>
                    <button className="disclaimer-btn disclaimer-btn-disagree" onClick={handleDisagree}>
                        Disagree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerModal;
