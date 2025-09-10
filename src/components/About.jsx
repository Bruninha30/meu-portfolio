import React from 'react';
import '../style/About.css';
import minhaFoto from '../assets/minha-foto.jpg'; // Coloque sua foto nessa pasta

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef} id="about" className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src={minhaFoto} alt="Bruna Santos" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Sobre Mim</h2>
          <p className="about-text">
            Sou <strong>Bruna Santos</strong>, desenvolvedora front-end apaixonada por transformar ideias
            em experiências digitais funcionais, modernas e acessíveis.
          </p>
          <p className="about-text">
            Sou formada em <strong>Análise e Desenvolvimento de Sistemas pela UNOPAR</strong>, onde adquiri
            uma base sólida em programação, banco de dados, análise de requisitos e desenvolvimento
            de sistemas. Essa formação me permitiu compreender tanto o aspecto técnico quanto o
            estratégico do desenvolvimento de software.
          </p>
          <p className="about-text">
            Além da graduação, investi em cursos que ampliaram minhas habilidades em diferentes áreas,
            como <strong>Administração, Secretariado e Vendas</strong>, que fortaleceram minha organização,
            comunicação e visão prática sobre atendimento ao cliente.
          </p>
          <p className="about-text">
            Atualmente, estou cursando <strong>Front-End pela DNC</strong>, aprofundando meus conhecimentos
            em <strong>HTML, CSS, JavaScript e React</strong>. Também desenvolvi projetos práticos como
            sorteador de números, jogo de adivinhação e protótipos de sistemas de gestão, sempre buscando
            aplicar lógica, interatividade e boas práticas de código.
          </p>
          <p className="about-text">
            Entre outros aprendizados, já explorei <strong>Lógica de Programação, Algoritmos, Desenvolvimento
            Web, Banco de Dados, Git e GitHub, Metodologias Ágeis e Scrum</strong>.
          </p>
          <p className="about-text">
            Minha trajetória acadêmica e prática reflete minha <strong>busca constante por evolução</strong>.
            Estou sempre em aprendizado contínuo, acompanhando tendências de tecnologia e design para
            aplicar em projetos reais.
          </p>
          <p className="about-text">
            Estou entusiasmada para aplicar minhas habilidades técnicas e minha paixão por desenvolvimento
            front-end em projetos que proporcionem experiências digitais únicas. Estou sempre aberta a
            novos desafios e oportunidades de aprendizado.
          </p>
        </div>
      </div>
    </section>
  );
}
