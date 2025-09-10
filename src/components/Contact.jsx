import React, { useState } from "react";
import "../style/Contact.css";

export default function Contact({ contactRef }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Substitua pelo seu email real
    const email = "seuemail@gmail.com";
    const subject = encodeURIComponent("Mensagem do Portfólio");
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    // Resetar campos
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section ref={contactRef} id="contact" className="contact-section">
      <h2 className="contact-title">Contato</h2>
      <p className="contact-text">
        Fique à vontade para enviar uma mensagem. Responderei o mais rápido possível!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
