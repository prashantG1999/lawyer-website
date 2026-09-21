import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/Juriva_Logo.png';
import './Header.css';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 50);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let isScrolled = window.scrollY > 50;

        const handleScroll = () => {
            const currentScrolled = window.scrollY > 50;
            if (currentScrolled !== isScrolled) {
                isScrolled = currentScrolled;
                setScrolled(currentScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable background scroll when the mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <header className={`site-header-wrapper ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
                {/* Top Contact Details Banner */}
                <aside className="top-banner" aria-label="Chamber Contact Information">
                    <div className="top-banner-container">
                        <div className="top-banner-left">
                            <span className="banner-item banner-location">
                                <svg className="banner-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Sogaria & R.K Puram, Kota</span>
                            </span>
                            <span className="banner-separator">•</span>
                            <span className="banner-item banner-hours">
                                <svg className="banner-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
                            </span>
                        </div>

                        <div className="top-banner-right">
                            <a href="tel:+919664281653" className="banner-item banner-link banner-phone" title="Call +91 96642 81653">
                                <svg className="banner-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>+91 96642 81653</span>
                            </a>
                            <span className="banner-separator banner-phone-separator">•</span>
                            <a href="tel:+919660460445" className="banner-item banner-link banner-phone" title="Call +91 96604 60445">
                                <svg className="banner-svg-icon banner-phone-icon-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>+91 96604 60445</span>
                            </a>
                            <span className="banner-separator">•</span>
                            <a href="https://wa.me/919664281653" target="_blank" rel="noopener noreferrer" className="banner-item banner-link banner-whatsapp" title="Chat on WhatsApp (+91 96642 81653)">
                                <svg className="banner-svg-icon banner-wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.8 1.15-2.96-.19-.3a8.19 8.19 0 0 1-1.26-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                            <span className="banner-separator">•</span>
                            <a href="https://www.instagram.com/jurivalegalco?stkn=NzZhNzF3bWd4NzN6" target="_blank" rel="noopener noreferrer" className="banner-item banner-link banner-instagram" title="Follow on Instagram (@jurivalegalco)">
                                <svg className="banner-svg-icon banner-ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                <span>Instagram</span>
                            </a>
                            <span className="banner-separator banner-sep-email">•</span>
                            <a href="mailto:jurivalegal@gmail.com" className="banner-item banner-link banner-email" title="Email Chamber">
                                <svg className="banner-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22 6 12 13 2 6"></polyline>
                                </svg>
                                <span>jurivalegal@gmail.com</span>
                            </a>
                            <NavLink to="/contact" className="banner-cta-btn" title="Contact Us">
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </aside>

                {/* Main Navigation Bar */}
                <div className="site-header-nav">
                    <NavLink to="/" className="logo">
                        <img
                            src={logoImage}
                            alt="Juriva Legal"
                            className="logo-icon-img"
                            width="36"
                            height="36"
                            decoding="async"
                        />
                        Juriva <span>Legal</span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="nav-links">
                        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            About
                        </NavLink>
                        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Services
                        </NavLink>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Blog & Insights
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Contact
                        </NavLink>
                    </nav>

                    {/* Hamburger Toggle Button */}
                    <button
                        className={`menu-toggle ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>

                {/* Mobile Sidebar Navigation */}
                <nav className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
                    <div className="sidebar-links">
                        <NavLink to="/" end onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            About
                        </NavLink>
                        <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Services
                        </NavLink>
                        <NavLink to="/blog" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Blog & Insights
                        </NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Contact
                        </NavLink>
                    </div>
                </nav>
            </header>

            {/* Overlay */}
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default Header;
