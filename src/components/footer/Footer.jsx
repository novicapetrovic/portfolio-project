import React from "react";
import "./footer.css";
import {FiInstagram, FiTwitter, FiLinkedin} from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testiominials</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/novica-petrovic-790ba0137/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Novica Petrovic</small>
      </div>
    </footer>
  );
};

export default Footer;
