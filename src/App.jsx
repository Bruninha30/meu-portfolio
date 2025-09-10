import React, { useState, useRef, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Hook useState para contar quantas vezes o usuário rolou
  const [scrollCount, setScrollCount] = useState(0);

  // Hook useEffect para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollCount((prev) => prev + 1); // incrementa toda vez que rolar
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hook useRef + função para rolar para cada seção
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      <main>
        <Home 
          homeRef={homeRef} 
          scrollToSection={scrollToSection} 
          projectsRef={projectsRef} 
          contactRef={contactRef} 
        />
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Bruna Santos. Todos os direitos reservados.</p>
        <p>{scrollCount}</p>
      </footer>
    </div>
  );
}
