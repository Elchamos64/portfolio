import "../styles/App.css";
import React from "react";


const Header = () => {
    return (
        <div className="header">
            <h1 className="name">Oscar. </h1>
            <NavBar />
        </div>
    );
};
const NavBar = () => {
    return (
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="#projects">Projects</a>
      </nav>
    );
  };

export default Header;