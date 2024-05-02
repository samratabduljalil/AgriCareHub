import React from 'react';
import './navbar.css';

import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-green-700 py-4 px-6">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="h-8 w-8" src="your-logo-image-url" alt="Logo" />
                <span className="font-semibold text-xl tracking-tight ml-2">Logo</span>
            </div>

            {/* Navbar Items */}
            <div className="flex-grow text-center">
                <ul className="flex justify-center space-x-4">
                    <li><NavLink to="/" className="nav_btn">Home</NavLink></li>
                    <li><NavLink to="/about" className="nav_btn" >About</NavLink></li>
                    <li><NavLink to="/services" className="nav_btn">Services</NavLink></li>
                    <li><NavLink to="/contact" className="nav_btn">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
