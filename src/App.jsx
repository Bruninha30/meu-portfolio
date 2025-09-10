import React, { useRef } from "react";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header className="header">
        <h1 className="logo">Bruna Santos</h1>
        <nav className="nav-links">
          <button onClick={() => scrollToSection(homeRef)}>Home</button>
          <button onClick={() => scrollToSection(aboutRef)}>Sobre</button>
        </nav>
      </header>

      <main>
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Bruna Santos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
