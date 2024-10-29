import React, { useState } from 'react';
import '../../styles/navbar.css';
import logo from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
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
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/gatos" onClick={handleLinkClick}>
                Gatos
              </Link>
            </li>
            <li>
              <Link to="/perros" onClick={handleLinkClick}>
                Perros
              </Link>
            </li>
            {location.pathname === '/' ? (
              <>
                <li>
                  <a href="#participar" onClick={handleLinkClick}>
                    Participar
                  </a>
                </li>
                <li>
                  <a href="#noticias" onClick={handleLinkClick}>
                    Noticias
                  </a>
                </li>
              </>
            ) : null}
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
