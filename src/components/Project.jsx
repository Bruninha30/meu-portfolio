import React from "react";
import "../style/Project.css";


  const projectsList = [
  {
    id: 1,
    name: "Meu Portfólio",
    description:
      "Portfólio de Bruna Santos – Desenvolvedora Front-End, mostrando meus projetos e habilidades adquiridas com HTML, CSS e JavaScript.",
    githubUrl: "https://github.com/Bruninha30/meu-portfolio",
  },
  {
    id: 2,
    name: "Desafio Lista de Tarefas",
    description:
      "Projeto da DNC para criação de lista de tarefas, usando JavaScript para praticar lógica e interatividade.",
    githubUrl: "https://github.com/Bruninha30/lista-de-tarefas",
  },
  {
    id: 3,
    name: "Calculadora IMC",
    description:
      "Criando uma calculadora de IMC para ganhar experiência prática em JavaScript.",
    githubUrl: "https://github.com/Bruninha30/calculadoraIMC",
  },
  {
    id: 4,
    name: "Jogo Bíblico - Adivinha",
    description:
      "Um quiz bíblico desenvolvido para meus filhos, utilizando lógica em JavaScript e interatividade.",
    githubUrl: "https://github.com/Bruninha30/jogo-b-blico-advinha",
  },
  {
    id: 5,
    name: "Oficina TH",
    description:
      "Página responsiva da oficina, com foco em funcionalidades práticas e layout adaptável a qualquer dispositivo.",
    githubUrl: "https://github.com/Bruninha30/th-car-oficina",
  },
  {
    id: 6,
    name: "Landing Page DNC",
    description:
      "Desenvolvendo um projeto de Landing Page com a escola DNC, aplicando HTML, CSS e práticas de design responsivo.",
    githubUrl: "https://github.com/Bruninha30/projeto-landing-Page",
  },
  {
    id: 7,
    name: "React DNC Bruna",
    description:
      "Projeto base em React para aprendizado e desenvolvimento de portfólio, usando boas práticas e componentes reutilizáveis.",
    githubUrl: "https://github.com/Bruninha30/react-dnc-brunav2",
  },
  {
    id: 8,
    name: "Desafio Lista de Tarefas DNC 3",
    description:
      "Outro desafio da DNC para criação de lista de tarefas, explorando lógica e design responsivo.",
    githubUrl: "https://github.com/Bruninha30/RID-187349-desafio-4",
  },

  
  {
    id: 9,
    name: "Página Responsiva DNC",
    description:
      "Projeto de página responsiva da escola DNC, aplicando HTML, CSS e boas práticas de design.",
    githubUrl: "https://github.com/Bruninha30/pagina-responsiva",
  },
  {
    id: 10,
    name: "Portfólio Modelo DNC",
    description:
      "Modelo de portfólio fornecido pela DNC, usado como referência para desenvolver meus próprios projetos.",
    githubUrl: "https://github.com/Bruninha30/Porftf-lio",
  },
  {
    id: 11,
    name: "Desafio DNC 2",
    description:
      "Projeto desenvolvido para praticar habilidades em design responsivo e experiência do usuário.",
    githubUrl: "https://github.com/Bruninha30/RID-187349-Desafio2",
  }
];


export default function Projects({ projectsRef }) {
  return (
    <section ref={projectsRef} id="projects" className="projects-section">
      <h2 className="projects-title">✨ Meus Projetos</h2>
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
