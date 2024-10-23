import React, { useState } from 'react';
import '../styles/NavBar.css'; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">PEPTOPIA</div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#inicio">Inicio</a>
        <a href="#adoptar">Adoptar</a>
        <a href="#participar">Participar</a>
        <a href="#blog">Blog</a>
        <a href="#sobre-nosotros">Sobre Nosotros</a>
      </div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavBar;
