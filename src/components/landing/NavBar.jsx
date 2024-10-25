import React, { useState } from 'react';
import '../../styles/navbar.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <span className="logo-name">PETOPIA</span>
          <img src={logo} alt="Logo" />
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={handleLinkClick}>Inicio</a></li>
            <li><a href="#participar" onClick={handleLinkClick}>Participar</a></li>
            <li><a href="#blog" onClick={handleLinkClick}>Blog</a></li>
            <li><a href="#sobre-nosotros" onClick={handleLinkClick}>Sobre Nosotros</a></li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
