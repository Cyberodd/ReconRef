import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
    <nav className="nav">
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;