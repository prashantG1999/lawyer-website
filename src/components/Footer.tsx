import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3 className="footer-logo">
                        <img src="/Juriva_Logo.png" alt="Juriva Legal" className="footer-logo-img" />
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
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/services">Practice Areas</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Kota, Rajasthan, India</p>
                    <p>nishantgiri102096@gmail.com</p>
                    <p>+91-9660460445</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Juriva Legal. All rights reserved.</p>
                <p>Designed for Excellence.</p>
            </div>
        </footer>
    );
};

export default Footer;
