import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/Juriva_Logo.png';

const Footer: React.FC = () => {
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
                        Established in 2019, providing expert legal representation with 
                        unwavering commitment and integrity across various courts and tribunals in India.
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
                    <h4>Contact Us</h4>
                    <p>Kota, Rajasthan, India</p>
                    <p>advnishantgiri@gmail.com</p>
                    <p>+91-9660460445</p>
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
        </footer>
    );
};

export default Footer;
