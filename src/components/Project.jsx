import React from "react";
import "../style/Project.css";

const projectsList = [
  {
    id: 1,
    name: "Meu Portfólio",
    description: "Portfólio de Bruna Santos – Desenvolvedora Front-End, mostrando meus projetos e habilidades adquiridas com HTML, CSS e JavaScript.",
    githubUrl: "https://github.com/Bruninha30/meu-portfolio",
  },
  {
    id: 2,
    name: "Desafio Lista de Tarefas",
    description: "Projeto da DNC para criação de lista de tarefas, usando JavaScript para praticar lógica e interatividade.",
    githubUrl: "https://github.com/Bruninha30/lista-de-tarefas",
  },
  {
    id: 3,
    name: "Calculadora IMC",
    description: "Criando uma calculadora de IMC para ganhar experiência prática em JavaScript.",
    githubUrl: "https://github.com/Bruninha30/calculadoraIMC",
  },
  {
    id: 4,
    name: "Jogo Bíblico - Adivinha",
    description: "Um quiz bíblico desenvolvido para meus filhos, utilizando lógica em JavaScript e interatividade.",
    githubUrl: "https://github.com/Bruninha30/jogo-b-blico-advinha",
  },
  {
    id: 5,
    name: "Oficina TH",
    description: "Página responsiva da oficina, com foco em funcionalidades práticas e layout adaptável a qualquer dispositivo.",
    githubUrl: "https://github.com/Bruninha30/th-car-oficina",
  }
];

export default function Projects({ projectsRef }) {
  return (
    <section ref={projectsRef} id="projects" className="projects-section">
      <h2 className="projects-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
