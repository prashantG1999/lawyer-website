import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
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
            <header className={`site-header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
                <div className="logo">
                    Law<span>yer</span> India
                </div>
                
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
