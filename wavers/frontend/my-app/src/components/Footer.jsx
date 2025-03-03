// Footer.jsx
import React from 'react';
import '../styles/Footer.css';  // Assuming you will add the CSS below in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Travel Journal. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/contact">Contact</a> | 
          <a href="/about">About</a> | 
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="social-media">
          <a href="#" aria-label="Facebook">
            <img src="/path/to/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="/path/to/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/path/to/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
