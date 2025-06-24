import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to style accordingly

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">NewsApp</div>

      <div className="nav-links">
        <a href="/" className="link">Home</a>
     
        {/* All categories shown in top navbar */}
               
        <Link to="/category/politics" className="link">About</Link>
        <Link to="/category/sports" className="link">Services</Link>
        <Link to="/category/education" className="link">contact</Link>
        <Link to="/category/entertainment" className="link">Entertainment</Link>
        <Link to="/category/politics" className="link">Politics</Link>
        <Link to="/category/sports" className="link">Sports</Link>
        <Link to="/category/education" className="link">Education</Link>
        <Link to="/category/economy" className="link">Economy</Link>
        <Link to="/category/business" className="link">Business</Link>
        <Link to="/category/technology" className="link">Technology</Link>
        <Link to="/category/health" className="link">Health</Link>
      </div>
    </nav>
  );
}
