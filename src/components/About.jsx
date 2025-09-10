import React from 'react';
import '../style/About.css';

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef} id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">Sobre Mim</h2>
        <p className="about-text">
         Desenvolvedora Front-End apaixonada por criar interfaces web funcionais e interativas com HTML, CSS, JavaScript e React, sempre priorizando a experiência do usuário.
        </p>
        <p className="about-text">
          Tenho experiência na criação de interfaces com React e no gerenciamento de estados com Hooks. Estou aprendendo continuamente novas tecnologias e aprimorando minhas habilidades para desenvolver projetos web cada vez mais funcionais e atrativos.
        </p>
      </div>
    </section>
  );
}
