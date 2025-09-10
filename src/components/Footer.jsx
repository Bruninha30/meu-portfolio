// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Bruna Santos. Todos os direitos reservados.</p>
      <div className="social-links">
        <a
          href="https://github.com/Bruninha30"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/brunadesenvolvedora"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/brunasantos.oficial_?igsh=dmlidjZhaDNwa3E3"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
