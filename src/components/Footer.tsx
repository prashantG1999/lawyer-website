import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Law<span>yer</span> India</h3>
                    <p>
                        Established in 2005, we provide expert legal representation with 
                        unwavering commitment and integrity.
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
                    <p>New Delhi, India</p>
                    <p>info@lawyerindia.com</p>
                    <p>+91 98765 43210</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Lawyer India. All rights reserved.</p>
                <p>Designed for Excellence.</p>
            </div>
        </footer>
    );
};

export default Footer;
