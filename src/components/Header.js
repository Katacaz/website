import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'; // Import the image
import './Header.css'; // Ensure you have created this CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Katacaz Gaming</h1>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          Menu
        </button>
      </header>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/content" onClick={toggleMenu}>Content Creation</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Review Blog</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
