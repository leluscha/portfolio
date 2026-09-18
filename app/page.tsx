'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Menu, X } from 'lucide-react'

const portraitUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8947.JPG-xs3E7SmXoPWIWN6x29BxKQUr2nOceJ.jpeg'

const experience = [
  ['2025', 'Alumni Instructor & Coordinator', 'YES Alumni Orientation · U.S. Department of State'],
  ['2024', 'Talent Acquisition Specialist', 'Royal York Property Management'],
  ['2023', 'Financial Recruiter', 'Alexander Chapman'],
  ['2022', 'Marketing & Operations Manager', 'SDA-Intech · Alpine Fleet'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('dorelanuha22@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const links = ['About', 'Experience', 'Projects', 'Artifacts', 'Contact']

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="wordmark"><span className="material-symbols-sharp">diamond</span> DORELA&nbsp; NUHA</a>
        <nav className={menuOpen ? 'desktop-nav open' : 'desktop-nav'}>
          {links.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <button className="mobile-menu" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
      </header>

      <section id="top" className="hero-split">
        <div className="hero-photo"><img src={portraitUrl} alt="Dorela Nuha in graduation attire holding a bouquet" /><a href="#about" className="scroll-cue" aria-label="Scroll to about"><span /></a></div>
        <div className="hero-copy"><div className="hero-copy-inner"><h1>Hello,<br />I&apos;m Dorela</h1><p>I study systems, operational friction, and how people interact with digital environments. My work focuses on translating ambiguous business problems into clean product architecture.<br />Currently based in Ferizaj, Kosovo, building intentional projects.</p><div className="hero-actions"><a className="button dark" href="#projects">View case studies</a><a className="button light" href="#contact">Get in touch <ArrowUpRight size={13} /></a></div></div></div>
      </section>

      <section id="about" className="white-section about-section"><div className="section-label">01 / ABOUT</div><div><h2>Good products begin with<br /><strong>better questions.</strong></h2><p>With a foundation in sound engineering and experience across product operations, talent, and growth, I bring a systems mindset to ambiguous problems. I listen closely, map what matters, and turn signals into clear action.</p><div className="about-meta"><span>Product strategy</span><span>UX &amp; workflows</span><span>Cross-functional leadership</span></div></div></section>

      <section id="experience" className="gray-section"><div className="section-label">02 / EXPERIENCE</div><div className="experience-list">{experience.map(([year, role, company]) => <article key={year}><span>{year}</span><div><h3>{role}</h3><p>{company}</p></div><ArrowUpRight size={17} /></article>)}</div></section>

      <section id="projects" className="white-section project-section"><div className="section-label">03 / PROJECTS</div><div className="project-card"><div className="project-mark"><span>CASE STUDY · 01</span><h2>NEJA<span>.</span></h2><p>An event discovery ecosystem built to make finding your next meaningful experience feel effortless.</p></div><div className="project-info"><h3>From scattered listings<br />to a confident decision.</h3><div className="project-points">{['Problem discovery', 'User journey workflows', 'Figma wireframes', 'Success metrics'].map((point, i) => <div key={point}><span>0{i + 1}</span>{point}<ArrowUpRight size={14} /></div>)}</div><a href="#contact" className="text-link">Explore case study <ArrowUpRight size={14} /></a></div></div></section>

      <section id="artifacts" className="gray-section artifacts-section"><div className="section-label">04 / ARTIFACTS</div><h2>Notes from the<br /><strong>workbench.</strong></h2><div className="artifact-grid"><div><span>01</span><h3>Designing for clarity</h3><p>Small observations on product thinking, friction, and making complexity feel simple.</p></div><div><span>02</span><h3>Building better systems</h3><p>Experiments, frameworks, and practical tools for teams that care about how things work.</p></div></div></section>

      <section id="contact" className="contact-section"><div className="contact-inner"><div><div className="section-label">05 / CONTACT</div><h2>Let&apos;s create things<br /><strong>that matter.</strong></h2><p>Have a question, an ambitious idea, or a role in mind? I&apos;d love to hear from you.</p><div className="contact-actions"><button onClick={copyEmail}>{copied ? <Check size={13} /> : <Copy size={13} />} {copied ? 'Copied' : 'Copy Email'}</button><a href="https://linkedin.com/in/dorela-nuha" target="_blank" rel="noreferrer">LinkedIn</a><a href="/Dorela-Nuha-CV.pdf" download><Download size={13} /> Resume</a></div></div><form onSubmit={(e) => e.preventDefault()}><input required aria-label="Name" placeholder="Name" /><input required type="email" aria-label="Email Address" placeholder="Email Address" /><textarea required aria-label="Your Message" placeholder="Your Message..." /><button type="submit">Send Message <ArrowUpRight size={13} /></button></form></div></section>

      <footer><span>DORELA NUHA / PRODUCT</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
