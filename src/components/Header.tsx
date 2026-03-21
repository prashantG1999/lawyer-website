import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="logo">Lawyer India</div>
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
