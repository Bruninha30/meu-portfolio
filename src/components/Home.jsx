import React from 'react';
import '../style/Home.css'; 

export default function Home({ homeRef, projectsRef, contactRef, scrollToSection }) {
  return (
    <section ref={homeRef} id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">
          Olá, eu sou <span className="title-nome">Bruna Santos</span>
        </h1>
        <p className="home-subtitle">
          Desenvolvedora <strong>Front-end</strong> apaixonada por transformar ideias em 
          experiências digitais únicas e funcionais.
        </p>
        <div className="home-buttons">
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="btn btn-primary"
          >
             Ver Projetos
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="btn btn-secondary"
          >
             Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
}
