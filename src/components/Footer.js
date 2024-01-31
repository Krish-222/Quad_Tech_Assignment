import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque tincidunt odio, id sagittis risus mollis eu.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Theaters</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@screensurf.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ScreenSurfApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
