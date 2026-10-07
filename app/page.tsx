"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const EMAIL = "ola@joaofilipesilva.com";

const projects = [
  {
    number: "01",
    title: "Sentinel Lab",
    type: "Cibersegurança · Web",
    year: "2025",
    className: "project-sentinel",
    caption: "monitorização contínua / lisboa",
  },
  {
    number: "02",
    title: "Zero Trust",
    type: "Estratégia · Infraestrutura",
    year: "2024",
    className: "project-zero",
    caption: "acesso mínimo · confiança máxima",
  },
  {
    number: "03",
    title: "Trace Protocol",
    type: "Investigação · Produto",
    year: "2024",
    className: "project-trace",
    caption: "log 07 / análise concluída",
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
        <a className="wordmark" href="#top" aria-label="Página inicial">
          Joao Filipe Silva<span>®</span>
        </a>
        <nav
          id="mobile-nav"
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Navegação principal"
        >
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>
          <a href="#trabalho" onClick={() => setMenuOpen(false)}>
            Trabalho
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </nav>
        <a className="header-cta" href={`mailto:${EMAIL}`}>
          Vamos falar <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        </div>
      </header>
      {menuOpen ? (
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <section className="hero section-wrap">
        <div className="eyebrow">
        </div>
        <h1>
          Ideias com
          <br />
          <em>forma.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            Sou o Joao Filipe Silva, especialista em cibersegurança
            independente. Protejo sistemas, encontro vulnerabilidades e
            transformo risco em confiança.
          </p>
          <a className="circle-link" href="#trabalho" aria-label="Ver trabalho">
            <ArrowUpRight size={25} />
          </a>
        </div>
      </section>

      <section id="sobre" className="about section-wrap">
        <div className="section-label">/ Sobre mim</div>
        <div className="about-content">
          <p className="about-lead">
            Trabalho entre a análise e a estratégia para transformar sistemas
            complexos em segurança clara e accionável.
          </p>
          <div className="about-detail">
            <p>
              Com mais de 8 anos a trabalhar com pessoas curiosas e equipas
              ambiciosas, ajudo a encontrar o que torna uma ideia única — e a
              dar-lhe uma voz própria.
            </p>
            <a className="text-link" href={`mailto:${EMAIL}`}>
              Mais sobre mim <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="trabalho" className="work section-wrap">
        <div className="work-heading">
          <div className="section-label">/ Trabalho seleccionado</div>
          <span className="work-count">
            {String(projects.length).padStart(2, "0")} projectos
          </span>
        </div>
        <div className="project-list">
          {projects.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={
                activeProject === index ? "project-row active" : "project-row"
              }
              onClick={() => setActiveProject(index)}
              onMouseEnter={() => setActiveProject(index)}
              onFocus={() => setActiveProject(index)}
              aria-pressed={activeProject === index}
            >
              <span className="project-number">{item.number}</span>
              <span className="project-name">{item.title}</span>
              <span className="project-type">{item.type}</span>
              <span className="project-year">{item.year}</span>
              <ArrowUpRight className="project-arrow" size={20} />
            </button>
          ))}
        </div>
        <div className={`project-preview ${project.className}`} aria-live="polite">
          <div className="preview-top">
            <span>{project.title}</span>
            <span>Projecto {project.number}</span>
          </div>
          <div className="preview-art">
            {activeProject === 0 && (
              <>
                <div className="terminal-grid" />
                <strong>
                  secure
                  <br />
                  <i>by design.</i>
                </strong>
              </>
            )}
            {activeProject === 1 && (
              <>
                <div className="zero-word">ZERO</div>
                <div className="zero-line" />
              </>
            )}
            {activeProject === 2 && (
              <div className="trace-title">
                TRACE
                <br />
                <span>PROTOCOL</span>
              </div>
            )}
            <div className="security-caption">{project.caption}</div>
          </div>
        </div>
      </section>

      <section className="services section-wrap">
        <div className="section-label">/ O que faço</div>
        <div className="service-grid">
          <div>
            <span>01</span>
            <h3>Auditoria</h3>
            <p>
              Identificação de vulnerabilidades e análise de risco para sistemas
              mais resilientes.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Defesa</h3>
            <p>
              Estratégias de segurança simples, práticas e preparadas para o
              mundo real.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Resposta</h3>
            <p>
              Investigação e resposta a incidentes com clareza, método e atenção
              ao detalhe.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact section-wrap">
        <div className="section-label">/ Contacto</div>
        <div>
          <h2>
            Tem uma ideia?
            <br />
            <em>Vamos dar-lhe forma.</em>
          </h2>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            {EMAIL} <ArrowUpRight size={22} />
          </a>
        </div>
      </section>
      <footer>
        <span>© 2026 Joao Filipe Silva</span>
        <div className="socials">
          <a href={`mailto:${EMAIL}`}>LinkedIn</a>
          <a href={`mailto:${EMAIL}`}>Instagram</a>
          <a href={`mailto:${EMAIL}`}>GitHub</a>
        </div>
        <span>Feito com intenção.</span>
      </footer>
    </main>
  );
}
