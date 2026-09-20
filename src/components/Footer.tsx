import React, { useState } from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/Juriva_Logo.png';
import QrModal from './QrModal.tsx';

const Footer: React.FC = () => {
    const [isQrOpen, setIsQrOpen] = useState(false);
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3 className="footer-logo">
                        <img 
                            src={logoImage} 
                            alt="Juriva Legal" 
                            className="footer-logo-img" 
                            width="32" 
                            height="32" 
                            loading="lazy" 
                            decoding="async" 
                        />
                        Juriva <span>Legal</span>
                    </h3>
                    <p>
                        A legal practice based in Kota, Rajasthan, undertaking matters before courts, tribunals, statutory authorities and legally constituted forums.
                    </p>
                </div>
                
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><NavLink to="/" onClick={() => window.scrollTo(0, 0)}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</NavLink></li>
                        <li><NavLink to="/services" onClick={() => window.scrollTo(0, 0)}>Practice Areas</NavLink></li>
                        <li><NavLink to="/blog" onClick={() => window.scrollTo(0, 0)}>Blog & Insights</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</NavLink></li>
                        <li><NavLink to="/admin" onClick={() => window.scrollTo(0, 0)} style={{ opacity: 0.6, fontSize: '0.82rem' }}>🔒 Owner Portal</NavLink></li>
                    </ul>
                </div>
                
                <div className="footer-contact">
                    <h4>Contact & Chambers</h4>
                    <div className="footer-chamber-entry">
                        <p className="footer-chamber-name"><strong>📍 Sogaria</strong></p>
                        <p className="footer-chamber-detail">Sogaria, Kota, Rajasthan</p>
                        <p className="footer-chamber-phones">
                            <a href="tel:+919664281653">+91 96642 81653</a> &nbsp;|&nbsp; <a href="tel:+919660460445">+91 96604 60445</a>
                        </p>
                    </div>

                    <div className="footer-chamber-entry" style={{ marginTop: '0.85rem' }}>
                        <p className="footer-chamber-name"><strong>📍 R.K Puram</strong></p>
                        <p className="footer-chamber-detail">R.K Puram, Kota, Rajasthan</p>
                        <p className="footer-chamber-phones">
                            <a href="tel:+918824770804">+91 88247 70804</a>
                        </p>
                    </div>

                    <p className="footer-email-line" style={{ marginTop: '0.85rem' }}>
                        <a href="mailto:jurivalegal@gmail.com">jurivalegal@gmail.com</a>
                    </p>

                    <div className="footer-social-links">
                        <a 
                            href="https://wa.me/919664281653" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer-social-btn footer-wa-btn" 
                            title="Chat on WhatsApp (+91 96642 81653)"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.8 1.15-2.96-.19-.3a8.19 8.19 0 0 1-1.26-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                            </svg>
                            <span>WhatsApp</span>
                        </a>
                        <a 
                            href="https://www.instagram.com/jurivalegalco?stkn=NzZhNzF3bWd4NzN6" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer-social-btn footer-ig-btn" 
                            title="Follow on Instagram (@jurivalegalco)"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <span>Instagram</span>
                        </a>
                        <button 
                            type="button" 
                            className="footer-social-btn footer-qr-btn" 
                            onClick={() => setIsQrOpen(true)}
                            title="Scan Instagram QR Code"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                            <span>QR Scanner</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-disclaimer">
                    <p>
                        <strong>Disclaimer:</strong> As per the rules of the Bar Council of India, we are not permitted to solicit work or advertise. By accessing this website, you acknowledge that you are seeking information about Juriva Legal of your own accord and that there has been no solicitation, advertisement, or inducement by Juriva Legal or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement.
                    </p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Juriva Legal. All rights reserved.</p>
                </div>
            </div>

            <QrModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
        </footer>
    );
};

export default Footer;
