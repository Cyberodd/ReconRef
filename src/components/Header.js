import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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