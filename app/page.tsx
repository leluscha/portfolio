'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, CircleUserRound, Mail, Menu, X } from 'lucide-react'

const portraitUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8947.JPG-xs3E7SmXoPWIWN6x29BxKQUr2nOceJ.jpeg'

const experiences = [
  { year: '2025', role: 'Alumni Instructor & Coordinator', company: 'YES Alumni Orientation · U.S. Department of State', detail: 'Directed orientation for 500+ international scholars across 35 countries, improving workflows through feedback-led program design.' },
  { year: '2024', role: 'Talent Acquisition Specialist', company: 'Royal York Property Management', detail: 'Ran full-lifecycle talent operations across 7 global offices, evaluating 100+ applicants weekly and scheduling 50+ interviews.' },
  { year: '2023', role: 'Financial Recruiter', company: 'Alexander Chapman', detail: 'Delivered a 90% placement match rate through structured profiling, requirements gathering, and accurate CRM operations.' },
  { year: '2022', role: 'Marketing & Operations Manager', company: 'SDA-Intech · Alpine Fleet', detail: 'Led logistics, budgets, and a 10+ person team while designing streamlined booking flows in Figma.' },
]

const pillars = ['Problem discovery', 'User journey workflows', 'Figma wireframes', 'Success metrics']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('dorelanuha22@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#f5f5f5]">
      <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/65 px-5 py-3 backdrop-blur-xl sm:top-6 sm:px-6">
        <a href="#top" className="text-sm font-medium tracking-[-0.02em]">Dorela Nuha<span className="text-white/35">.</span></a>
        <div className="hidden items-center gap-7 text-xs text-white/55 md:flex">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-white">{item}</a>)}
        </div>
        <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white md:hidden">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        {menuOpen && <div className="absolute right-3 top-14 flex w-40 flex-col gap-1 rounded-2xl border border-white/10 bg-[#111]/95 p-2 text-sm shadow-2xl backdrop-blur-xl md:hidden">{['About', 'Experience', 'Projects', 'Contact'].map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className="rounded-xl px-3 py-2 text-white/65 hover:bg-white/10 hover:text-white">{item}</a>)}</div>}
      </nav>

      <section id="top" className="relative mx-auto flex min-h-[92vh] max-w-6xl items-end px-5 pb-20 pt-36 sm:px-8 lg:pb-28">
        <div className="absolute inset-0 -z-0 opacity-80" style={{ background: 'radial-gradient(circle at 78% 30%, rgba(255,255,255,.09), transparent 28%), radial-gradient(circle at 20% 80%, rgba(255,255,255,.055), transparent 25%)' }} />
        <div className="relative z-10 grid w-full items-end gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/45"><span className="h-px w-8 bg-white/35" /> Based in Prishtina · Working globally</p>
            <h1 className="max-w-4xl text-[clamp(4.3rem,13vw,10.5rem)] font-medium leading-[.83] tracking-[-0.09em]">Product<br /><span className="text-white/40">Manager</span></h1>
            <p className="mt-9 max-w-md text-lg leading-relaxed text-white/55 sm:text-xl">Turning insights into seamless user experiences and impactful products.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85">View case studies <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><a href="#contact" className="rounded-full border border-white/15 bg-white/[.03] px-5 py-3 text-sm text-white/80 transition hover:border-white/35 hover:bg-white/10">Get in touch</a></div>
          </div>
          <div className="hidden justify-self-end lg:block"><div className="relative h-[380px] w-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] shadow-2xl"><img src={portraitUrl} alt="Dorela Nuha in graduation attire holding a bouquet" className="h-full w-full object-cover grayscale-[.15] brightness-[.75]" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-20"><p className="text-xs text-white/65">Curious by nature.</p><p className="mt-1 text-sm">Precise by practice.</p></div></div></div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.75fr_1.25fr]"><p className="text-xs uppercase tracking-[0.22em] text-white/40">01 / About</p><div><h2 className="max-w-3xl text-3xl leading-tight tracking-[-0.05em] text-white/90 sm:text-5xl">I connect the dots between what people need and what products can become.</h2><p className="mt-7 max-w-xl text-base leading-7 text-white/48">With a foundation in sound engineering and experience across product operations, talent, and growth, I bring a systems mindset to ambiguous problems. My work starts with listening, then turns signals into clear, useful action.</p><div className="mt-10 grid max-w-xl grid-cols-2 gap-y-4 border-t border-white/10 pt-5 text-sm text-white/60 sm:grid-cols-3"><span>Product strategy</span><span>UX & workflows</span><span>Cross-functional leadership</span></div></div></div></section>

      <section id="experience" className="border-t border-white/10 px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-6xl"><div className="mb-14 flex items-end justify-between"><p className="text-xs uppercase tracking-[0.22em] text-white/40">02 / Experience</p><p className="hidden text-xs text-white/30 sm:block">Selected chapters · 2022—2025</p></div><div className="divide-y divide-white/10">{experiences.map((item) => <article key={item.year} className="group grid gap-4 py-7 transition-colors hover:bg-white/[.025] sm:grid-cols-[100px_1fr_1fr] sm:gap-8"><p className="text-sm text-white/35">{item.year}</p><div><h3 className="text-lg tracking-[-0.02em]">{item.role}</h3><p className="mt-1 text-sm text-white/40">{item.company}</p></div><p className="max-w-md text-sm leading-6 text-white/45">{item.detail}</p></article>)}</div></div></section>

      <section id="projects" className="border-t border-white/10 px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-[0.22em] text-white/40">03 / Featured project</p><div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-2xl"><div className="grid lg:grid-cols-[1.1fr_.9fr]"><div className="relative min-h-[430px] overflow-hidden border-b border-white/10 bg-[#161616] p-8 sm:p-12 lg:border-b-0 lg:border-r"><div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" /><div className="absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10" /><div className="relative flex h-full flex-col justify-between"><div><span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[.2em] text-white/50">Case study · 01</span><h2 className="mt-20 text-6xl font-medium tracking-[-0.08em] sm:text-8xl">NEJA<span className="text-white/30">.</span></h2></div><div className="flex items-end justify-between"><p className="max-w-xs text-sm leading-6 text-white/45">An event discovery ecosystem built to make finding your next meaningful experience feel effortless.</p><ArrowUpRight className="text-white/45" size={28} /></div></div></div><div className="p-8 sm:p-12"><p className="max-w-md text-xl leading-8 tracking-[-0.03em] text-white/80">From scattered listings to a confident, personal decision.</p><div className="mt-12 space-y-0">{pillars.map((pillar, index) => <div key={pillar} className="flex items-center gap-4 border-t border-white/10 py-5 text-sm text-white/60"><span className="font-mono text-xs text-white/30">0{index + 1}</span>{pillar}<ArrowUpRight size={15} className="ml-auto text-white/30" /></div>)}</div><button className="mt-10 flex items-center gap-2 text-sm text-white transition hover:text-white/60">Explore case study <ArrowUpRight size={15} /></button></div></div></div></div></section>

      <section id="contact" className="border-t border-white/10 px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_420px]"><div><p className="text-xs uppercase tracking-[0.22em] text-white/40">04 / Contact</p><h2 className="mt-10 max-w-xl text-5xl leading-[.95] tracking-[-0.07em] sm:text-7xl">Let&apos;s make something that matters.</h2><p className="mt-8 max-w-sm text-base leading-7 text-white/45">Have a product question, an ambitious idea, or a role in mind? I&apos;d love to hear from you.</p><div className="mt-10 flex flex-wrap gap-3"><button onClick={copyEmail} className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition hover:border-white/35 hover:bg-white/10">{copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy email'}</button><a href="https://linkedin.com/in/dorela-nuha" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition hover:border-white/35 hover:bg-white/10"><CircleUserRound size={15} /> LinkedIn</a><a href="/Dorela-Nuha-CV.pdf" download className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition hover:border-white/35 hover:bg-white/10"><Download size={15} /> CV</a></div></div><form className="space-y-4" onSubmit={(e) => e.preventDefault()}><label className="block"><span className="sr-only">Your name</span><input required placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-white/35" /></label><label className="block"><span className="sr-only">Your email</span><input required type="email" placeholder="Email address" className="w-full rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-white/35" /></label><label className="block"><span className="sr-only">Your message</span><textarea required rows={5} placeholder="Tell me a little about it..." className="w-full resize-none rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-white/35" /></label><button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-black transition hover:bg-white/85">Send message <Mail size={16} /></button></form></div></section>

      <footer className="border-t border-white/10 px-5 py-7 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Dorela Nuha</span><span>Product, people, and possibilities.</span><a href="#top" className="text-white/55 hover:text-white">Back to top ↑</a></div></footer>
    </main>
  )
}
