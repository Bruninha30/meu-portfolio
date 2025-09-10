import React from "react";
import "../style/Navbar.css";

export default function Navbar({ scrollToSection, homeRef, aboutRef, projectsRef, contactRef }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./logo.png" alt="Bruna Santos" className="logo-img" />
      </div>
      <div className="nav-buttons">
        <button onClick={() => scrollToSection(homeRef)}>Home</button>
        <button onClick={() => scrollToSection(aboutRef)}>Sobre</button>
        <button onClick={() => scrollToSection(projectsRef)}>Projetos</button>
        <button onClick={() => scrollToSection(contactRef)}>Contato</button>
      </div>
    </nav>
  );
}
