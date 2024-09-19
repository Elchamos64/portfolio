import "../styles/App.css";
import React, { useState } from "react";

const Header = () => {
    return (
        <div className="header">
            <h1 className="name">Oscar.</h1>
            <NavBar />
        </div>
    );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    );
};

export default Header;
