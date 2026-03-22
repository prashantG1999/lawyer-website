import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                Law<span>yer</span> India
            </div>
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
        </header>
    );
};

export default Header;
