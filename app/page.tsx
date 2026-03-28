'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Reveal, Typewriter } from '../components/Animations'

const ParticlesBackground = lazy(() => import('../components/ParticlesBackground'))
const Hero3D = lazy(() => import('../components/Hero3D'))

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="4" fill="#CC1111"/>
    <rect x="8" y="8" width="6" height="20" rx="1" fill="white"/>
    <rect x="22" y="8" width="6" height="20" rx="1" fill="white"/>
    <rect x="8" y="15" width="20" height="6" rx="1" fill="#111111"/>
  </svg>
)

const STACK = [
  'Next.js 14', 'React', 'TypeScript', 'CSS Modules',
  'Node.js', 'Vercel', 'GitHub', 'Arduino (C++)',
  'REST APIs', 'Responsive Design', 'Git',
]

const PROJECTS = [
  {
    meta: '2025 · Web · Robotics',
    name: 'Losungsjager — FTC Robotics Team',
    desc: 'Official portfolio website for my FTC robotics team. Showcases the team, robot builds, competition history, and achievements. Designed and built from scratch.',
    tags: ['Next.js', 'TypeScript', 'CSS Modules', 'Vercel'],
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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
      {mounted && (
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
      )}

      {/* NAV */}
      <motion.nav
        className="nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Logo />
          <span>HansThill</span>
        </span>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#contact" className="nav-cta">Hire me</a></li>
        </ul>
      </motion.nav>

      {/* HERO */}
      <section className="hero" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '40px', minHeight: '80vh' }}>
          <div>
            <motion.p
              className="hero-tag"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Full-Stack Developer · Brazil · {time && `${time} BRT`}
            </motion.p>

            <h1 className="hero-title">
              <Typewriter text="I build" delay={0.4} />{' '}
              <br />
              <Typewriter text="web products" className="hero-em" delay={0.8} />
              <br />
              <Typewriter text="that work." delay={1.4} />
            </h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Next.js developer focused on landing pages and complete web applications.
              Clean code, sharp design, delivered on time.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.6 }}
            >
              <a href="#contact" className="btn-primary">Start a project →</a>
              <a href="#projects" className="btn-secondary">See my work ↓</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            style={{ height: '500px' }}
          >
            {mounted && (
              <Suspense fallback={null}>
                <Hero3D />
              </Suspense>
            )}
          </motion.div>
        </div>

        <motion.p
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          scroll to explore
        </motion.p>
      </section>

      <hr className="divider" />

      {/* SERVICES */}
      <section className="section" id="services" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="section-label">What I offer</p>
          <h2 className="section-title">Services</h2>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.15}>
              <motion.div
                className="service-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <p className="service-number">{s.number}</p>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
                <p className="service-price">{s.price}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* PROJECTS */}
      <section className="section" id="projects" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="section-label">Selected work</p>
          <h2 className="section-title">Projects</h2>
        </Reveal>
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
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
              </motion.a>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* STACK */}
      <section className="section" id="stack" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="section-label">Technologies</p>
          <h2 className="section-title">My Stack</h2>
        </Reveal>
        <div className="stack-grid">
          {STACK.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <motion.span
                className="stack-item"
                whileHover={{ scale: 1.05, borderColor: '#CC1111', color: '#CC1111' }}
                transition={{ duration: 0.15 }}
              >
                {s}
              </motion.span>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* CONTACT */}
      <section className="section" id="contact" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
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
              <motion.a
                href="mailto:Hanspro.030@gmail.com"
                className="contact-link"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <span className="contact-link-icon">✉</span>
                <div>
                  <span className="contact-link-label">Email</span>
                  Hanspro.030@gmail.com
                </div>
              </motion.a>
              <motion.a
                href="https://www.fiverr.com/hansthill"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <span className="contact-link-icon">⚡</span>
                <div>
                  <span className="contact-link-label">Fiverr</span>
                  fiverr.com/hansthill
                </div>
              </motion.a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="footer" style={{ position: 'relative', zIndex: 1 }}>
        <p className="footer-copy">© 2026 HansThill. Handcrafted in Brazil.</p>
        <div className="footer-links">
          <a href="https://www.fiverr.com/hansthill" target="_blank" rel="noopener noreferrer">Fiverr</a>
          <a href="mailto:Hanspro.030@gmail.com">Email</a>
        </div>
      </footer>

      <style jsx global>{`
        .hero-em {
          color: #CC1111;
          font-style: normal;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: visible;
        }
        .service-card {
          background: var(--bg-card);
          padding: 40px 36px;
          transition: background 0.2s;
        }
      `}</style>
    </>
  )
}
