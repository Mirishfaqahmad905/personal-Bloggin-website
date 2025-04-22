import React from 'react';
import '../CompCss/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Welcome to The Writing Desk, your go-to blog for inspiring stories,
            tips, and insights on writing, lifestyle, and more.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Tags/Category Section */}
        <div className="footer-section tags">
          <h3>Tags</h3>
          <div className="tag-list">
            <a href="/tag/technology" className="tag">Technology</a>
            <a href="/tag/lifestyle" className="tag">Lifestyle</a>
            <a href="/tag/travel" className="tag">Travel</a>
            <a href="/tag/food" className="tag">Food</a>
            <a href="/tag/writing" className="tag">Writing</a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates and exclusive content delivered to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Writing Desk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;