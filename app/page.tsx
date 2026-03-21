'use client'

import { useState, useEffect } from 'react'

const STACK = [
  'Next.js 14', 'React', 'TypeScript', 'CSS Modules',
  'Node.js', 'Vercel', 'GitHub', 'Arduino (C++)',
  'REST APIs', 'Responsive Design', 'Git',
]

const PROJECTS = [
  {
    meta: '2026 · Web · Education',
    name: 'Batalha dos Farroups',
    desc: 'Official competition platform for a school event. Includes rankings, task management, announcements, gallery, and a teacher admin area. Built with Next.js 14 and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'CSS Modules', 'Vercel'],
    url: '#',
  },
  {
    meta: '2025 · Web · Personal',
    name: 'Personal Website',
    desc: 'Portfolio and personal site showcasing projects and skills. Deployed on a custom domain with a clean, minimal design.',
    tags: ['Next.js', 'TypeScript', 'Vercel'],
    url: 'https://losungsjager.hanst030.com',
  },
]

const SERVICES = [
  {
    number: '01',
    icon: '⚡',
    name: 'Landing Pages',
    desc: 'High-converting landing pages with clean design, fast load times, and full responsiveness. Delivered ready to deploy on Vercel.',
    price: 'Starting at $80',
  },
  {
    number: '02',
    icon: '🧩',
    name: 'Complete Web Apps',
    desc: 'Full web applications with admin panels, authentication, database integration, and custom features built to your spec.',
    price: 'Starting at $200',
  },
]

export default function Home() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      setTime(now)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <span className="nav-logo">
          &lt;<span>YOUR_NAME</span> /&gt;
        </span>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#contact" className="nav-cta">Hire me</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <p className="hero-tag">
          Full-Stack Developer · Brazil · {time && `${time} BRT`}
        </p>
        <h1 className="hero-title">
          I build<br />
          <em>web products</em><br />
          that work.
        </h1>
        <p className="hero-desc">
          Next.js developer focused on landing pages and complete web applications.
          Clean code, sharp design, delivered on time.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Start a project →
          </a>
          <a href="#projects" className="btn-secondary">
            See my work ↓
          </a>
        </div>
        <p className="hero-scroll-hint">scroll to explore</p>
      </section>

      <hr className="divider" />

      {/* SERVICES */}
      <section className="section" id="services">
        <p className="section-label">What I offer</p>
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.number}>
              <p className="service-number">{s.number}</p>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <p className="service-price">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* PROJECTS */}
      <section className="section" id="projects">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row"
            >
              <div>
                <p className="project-meta">{p.meta}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <span className="project-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* STACK */}
      <section className="section" id="stack">
        <p className="section-label">Technologies</p>
        <h2 className="section-title">My Stack</h2>
        <div className="stack-grid">
          {STACK.map((s) => (
            <span className="stack-item" key={s}>{s}</span>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="contact-box">
          <div>
            <h2 className="contact-title">
              Let&apos;s build<br />
              <em>something</em><br />
              together.
            </h2>
            <p className="contact-sub">
              Available for freelance projects.<br />
              Usually responds within 24 hours.
            </p>
          </div>
          <div className="contact-links">
            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="contact-link"
            >
              <span className="contact-link-icon">✉</span>
              <div>
                <span className="contact-link-label">Email</span>
                YOUR_EMAIL@gmail.com
              </div>
            </a>
            <a
              href="https://www.fiverr.com/YOUR_FIVERR"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">⚡</span>
              <div>
                <span className="contact-link-label">Fiverr</span>
                fiverr.com/YOUR_FIVERR
              </div>
            </a>
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">⌥</span>
              <div>
                <span className="contact-link-label">GitHub</span>
                github.com/YOUR_GITHUB
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-copy">© 2026 YOUR_NAME. Handcrafted in Brazil.</p>
        <div className="footer-links">
          <a href="https://www.fiverr.com/YOUR_FIVERR" target="_blank" rel="noopener noreferrer">Fiverr</a>
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:YOUR_EMAIL@gmail.com">Email</a>
        </div>
      </footer>
    </>
  )
}
