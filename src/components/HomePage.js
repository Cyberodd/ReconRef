import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/HomePage.css';

const HomePage = () => (
  <div className="home-page">
    <Header />
    <main className="main-content">
      <section className="content-section">
        <h1>Welcome to Our Website</h1>
        <p>This is where your main content goes.</p>
        <div className="button-group">
          <Link to="/register" className="button">Register</Link>
          <Link to="/login" className="button">Login</Link>
        </div>
      </section>
      <section className="image-section">
        <img src="/path-to-your-image.jpg" alt="Featured" />
      </section>
    </main>
  </div>
);

export default HomePage;