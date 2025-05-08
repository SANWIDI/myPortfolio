import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">
          © {new Date().getFullYear()} Mireille Sanwidi
        </p>

        <ul className="footer-links">
          <li>
            <NavLink to="/review" className="nav-link">
              Connect
            </NavLink>
          </li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/SANWIDI" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/nongd-zanga-sanwidi"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
