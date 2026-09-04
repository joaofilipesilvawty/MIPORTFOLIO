"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Sentinel Lab",
    type: "Cibersegurança · Web",
    year: "2025",
    className: "project-sentinel",
  },
  {
    number: "02",
    title: "Zero Trust",
    type: "Estratégia · Infraestrutura",
    year: "2024",
    className: "project-zero",
  },
  {
    number: "03",
    title: "Trace Protocol",
    type: "Investigação · Produto",
    year: "2024",
    className: "project-trace",
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Página inicial">
          Joao Filipe Silva<span>®</span>
        </a>
        <nav
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
        <a className="header-cta" href="mailto:ola@Joao Filipe Silvacosta.pt">
          Vamos falar <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="eyebrow">
          <span className="status-dot" /> Disponível para novos projectos{" "}
          <span className="hero-year">2025 — 26</span>
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
            <a
              className="text-link"
              href="mailto:ola@Joao Filipe Silvacosta.pt"
            >
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
          {projects.map((project, index) => (
            <button
              key={project.title}
              className={
                activeProject === index ? "project-row active" : "project-row"
              }
              onClick={() => setActiveProject(index)}
              aria-pressed={activeProject === index}
            >
              <span className="project-number">{project.number}</span>
              <span className="project-name">{project.title}</span>
              <span className="project-type">{project.type}</span>
              <span className="project-year">{project.year}</span>
              <ArrowUpRight className="project-arrow" size={20} />
            </button>
          ))}
        </div>
        <div
          className={`project-preview ${projects[activeProject].className}`}
          aria-live="polite"
        >
          <div className="preview-top">
            <span>{projects[activeProject].title}</span>
            <span>Projecto {projects[activeProject].number}</span>
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
                <div className="security-caption">
                  monitorização contínua / lisboa
                </div>
              </>
            )}
            {activeProject === 1 && (
              <>
                <div className="zero-word">ZERO</div>
                <div className="zero-line" />
                <div className="security-caption">
                  acesso mínimo · confiança máxima
                </div>
              </>
            )}
            {activeProject === 2 && (
              <>
                <div className="trace-title">
                  TRACE
                  <br />
                  <span>PROTOCOL</span>
                </div>
                <div className="trace-bar">log 07 / análise concluída</div>
              </>
            )}
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
          <a className="contact-email" href="mailto:ola@joaofilipesilva.com">
            ola@joaofilipesilva.com <ArrowUpRight size={22} />
          </a>
        </div>
      </section>
      <footer>
        <span>© 2025 Joao Filipe Silva</span>
        <div className="socials">
          <a href="#contacto">LinkedIn</a>
          <a href="#contacto">Instagram</a>
          <a href="#contacto">Behance</a>
        </div>
        <span>Feito com intenção.</span>
      </footer>
    </main>
  );
}
