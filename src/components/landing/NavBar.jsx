import React, { useState } from 'react';
import '../../styles/navbar.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Adopta</a></li>
            <li><a href="#">Participar</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
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
