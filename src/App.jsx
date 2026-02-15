import React, { useState, useRef, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  // Refs para cada seção
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Contador de scroll
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollCount((prev) => prev + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolar suavemente para uma seção
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      {/* Navbar fixo */}
      <header>
        <Navbar
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </header>

      {/* Conteúdo principal */}
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

      {/* Footer com redes sociais e contador de scroll */}
      <Footer scrollCount={scrollCount} />
    </div>
  );
}
