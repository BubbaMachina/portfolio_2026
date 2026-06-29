import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Box,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Menu,
  Mail,
  MapPin,
  Search,
  SunMedium,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { disciplines, projects, type Discipline, type Project } from './data/projects'
import { capabilities, certifications, education, experience, recognition } from './data/resume'
import { PROJECTS_PAGE_VARIANT } from './siteConfig'

const resumeUrl = '/assets/Bobby-Samuels-Resume-June-2026.pdf'

type PathwayId = 'robotics' | 'embedded' | 'software' | 'practice'

const projectPathways = [
  {
    id: 'robotics' as const,
    title: 'Robotics & Mechatronics',
    short: 'Robotics',
    description: 'Arms, drones, ROS 2, control systems and mechanisms that move.',
    image: '/assets/printed-drone.png',
    icon: Bot,
  },
  {
    id: 'embedded' as const,
    title: 'Embedded & Electronics',
    short: 'Embedded',
    description: 'PCBs, microcontrollers, instrumentation and connected physical systems.',
    image: '/assets/smart-outlet.png',
    icon: CircuitBoard,
  },
  {
    id: 'software' as const,
    title: 'Software & Artificial Intelligence',
    short: 'Software + AI',
    description: 'Full-stack products, algorithms, simulation and intelligent behavior.',
    image: '/assets/fpga-board.png',
    icon: Code2,
  },
  {
    id: 'practice' as const,
    title: 'Engineering Practice',
    short: 'Practice',
    description: 'Energy, facilities, field assessment, laboratories and technical education.',
    image: '/assets/energy-audit-team.png',
    icon: SunMedium,
  },
]

function pathwayFor(project: Project): PathwayId {
  if (project.category === 'Robotics') return 'robotics'
  if (project.category === 'Embedded') return 'embedded'
  if (project.category === 'Software') return 'software'
  return 'practice'
}

function ScrollManager() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [pathname])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={close} aria-label="Bobby Samuels home">
        <span className="brand-mark">BS</span>
        <span className="brand-copy"><strong>Bobby Samuels</strong><small>Engineer · Builder · Educator</small></span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        <NavLink to="/projects" onClick={close}>Projects</NavLink>
        <NavLink to="/resume" onClick={close}>Résumé</NavLink>
        <a href="https://bubbamachina.wordpress.com/2025/12/01/applied-robotics-ros2-introduction/" target="_blank" rel="noreferrer">Notes <ArrowUpRight size={14} /></a>
        <a className="nav-cta" href="https://github.com/BubbaMachina" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="kicker">Let’s build something useful.</p>
        <h2>Engineering is better when the disciplines talk to each other.</h2>
      </div>
      <div className="footer-links">
        <a href="mailto:bubbasamuels@gmail.com">Email me <ArrowUpRight size={15} /></a>
        <a href="https://github.com/BubbaMachina" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        <a href={resumeUrl} target="_blank" rel="noreferrer">Download résumé <Download size={15} /></a>
        <Link to="/projects">All projects <ArrowRight size={15} /></Link>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Bobby Samuels · Designed and built in Guyana.</p>
    </footer>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return <><ScrollManager /><Header /><main>{children}</main><Footer /></>
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link to={`/projects/${project.slug}`} className={large ? 'project-card project-card--large' : 'project-card'}>
      <div className="project-image-wrap">
        <img src={project.image} alt="" className="project-image" loading="lazy" />
        <span className="project-index">{project.year}</span>
        {project.status && <span className="status-pill"><i />{project.status}</span>}
      </div>
      <div className="project-card-body">
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
        </div>
        <ArrowUpRight className="card-arrow" aria-hidden="true" />
        <p>{project.summary}</p>
        <div className="tag-row">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>
    </Link>
  )
}

function Home() {
  const featured = projects.filter(project => project.featured).slice(0, 5)
  return (
    <Layout>
      <section className="hero grid-shell">
        <div className="hero-copy">
          <p className="availability"><i />Currently building in Guyana</p>
          <h1>Engineering across<br />the <em>whole</em> stack.</h1>
          <p className="hero-lede">I’m Bobby—an electrical engineer, AI master’s student and hands-on maker building where <strong>hardware, intelligence and the physical world</strong> meet.</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/projects">Explore my work <ArrowRight size={17} /></Link>
            <Link className="button button--quiet" to="/resume">View résumé</Link>
          </div>
          <div className="hero-disciplines" aria-label="Core disciplines">
            <span><CircuitBoard />Electronics</span><span><Cpu />AI + software</span><span><Box />CAD + fabrication</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Featured engineering builds">
          <div className="hero-photo hero-photo--main"><img src="/assets/smart-outlet.png" alt="Blue ESP32 smart outlet prototype" /></div>
          <div className="hero-photo hero-photo--secondary"><img src="/assets/printed-drone.png" alt="Custom 3D-printed quadcopter" /></div>
          <div className="hero-note"><span>01</span><p>From circuit<br />to interface</p></div>
          <svg className="orbit-line" viewBox="0 0 600 600" aria-hidden="true"><path d="M36 490C143 579 472 576 557 327C623 134 438 19 264 61" /></svg>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="intro-strip">
        <p>I like problems that refuse to stay in one box.</p>
        <div><span>Electrical</span><i>×</i><span>Mechanical</span><i>×</i><span>Computational</span></div>
      </section>

      <section className="section grid-shell" id="work">
        <div className="section-heading">
          <div><p className="kicker">Selected field notes · 01—05</p><h2>Built to learn.<br />Built to work.</h2></div>
          <div><p>From mains-connected IoT to small robots and search algorithms—each project is a place where I turn an unfamiliar system into something tangible.</p><Link to="/projects" className="text-link">Browse every project <ArrowRight size={16} /></Link></div>
        </div>
        <div className="featured-grid">
          {featured.map((project, index) => <ProjectCard key={project.slug} project={project} large={index === 0 || index === 3} />)}
        </div>
      </section>

      <section className="section profile-section">
        <div className="profile-photo"><img src="/assets/energy-audit-gea.png" alt="Bobby with an energy audit team at the Guyana Energy Agency" /></div>
        <div className="profile-copy">
          <p className="kicker">The through-line</p>
          <h2>Curiosity is my<br />operating system.</h2>
          <p>I work as a Facilities Project Engineer at SLB and teach engineering labs at the University of Guyana. Between those worlds, I’m completing a master’s in AI and steadily building toward mechatronics.</p>
          <blockquote>“I’m most at home when I can trace the full path—from the sensor, through the algorithm, to what a person sees and does.”</blockquote>
          <Link to="/resume" className="text-link">Read my journey <ArrowRight size={16} /></Link>
        </div>
        <div className="profile-facts">
          <div><strong>04</strong><span>Engineering domains<br />in active practice</span></div>
          <div><strong>02</strong><span>Current professional<br />roles</span></div>
          <div><strong>∞</strong><span>Things still worth<br />taking apart</span></div>
        </div>
      </section>

      <section className="section grid-shell recognition-section">
        <div className="section-heading compact">
          <div><p className="kicker">Recognition & growth</p><h2>Learning in public.</h2></div>
          <p>Formal recognition matters most when it opens another door to learn, build and bring others along.</p>
        </div>
        <div className="recognition-grid">
          {recognition.map((item, index) => (
            <article className={index === 0 ? 'recognition-card recognition-card--image' : 'recognition-card'} key={item.title}>
              {item.image && <img src={item.image} alt="Roberto Rocca scholarship recipients in the electronics laboratory" />}
              <span>0{index + 1}</span><p className="eyebrow">{item.issuer}</p><h3>{item.title}</h3><p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

function ProjectPageHero() {
  return (
    <section className="page-hero grid-shell">
      <aside className="project-hero-index">
        <div><CircuitBoard size={40} /><strong>{String(projects.length).padStart(2, '0')}</strong></div>
        <p>Documented<br />engineering builds</p>
        <span>2023—Now</span>
      </aside>
      <div className="project-hero-copy">
        <p className="kicker">Project archive · Electrical × Computational × Mechanical</p>
        <h1>Work at the seams<br /><em>between disciplines.</em></h1>
        <p>Choose a discipline for a focused path, or browse the complete archive below.</p>
        <div className="project-hero-disciplines"><span>Robotics</span><span>Embedded</span><span>Software</span><span>Energy</span><span>Education</span></div>
      </div>
    </section>
  )
}

function ProjectsPageClassic() {
  const [filter, setFilter] = useState<'All' | Discipline>('All')
  const visible = filter === 'All' ? projects : projects.filter(project => project.category === filter)
  return (
    <Layout>
      <ProjectPageHero />
      <section className="project-browser grid-shell">
        <div className="filter-bar" aria-label="Filter projects">
          {disciplines.map(item => <button key={item} className={item === filter ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <p className="result-count">Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}</p>
        <div className="all-projects-grid">{visible.map(project => <ProjectCard project={project} key={project.slug} />)}</div>
      </section>
    </Layout>
  )
}

function ProjectsPageGuided() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<'featured' | 'newest'>('featured')
  const requestedArea = searchParams.get('area')
  const activePathway: PathwayId | 'all' = projectPathways.some(path => path.id === requestedArea) ? requestedArea as PathwayId : 'all'

  const selectPathway = (pathway: PathwayId | 'all', scroll = true) => {
    const next = new URLSearchParams(searchParams)
    if (pathway === 'all') next.delete('area')
    else next.set('area', pathway)
    setSearchParams(next)
    if (scroll) requestAnimationFrame(() => document.getElementById('all-projects')?.scrollIntoView({ behavior: 'smooth' }))
  }

  const visible = projects
    .filter(project => activePathway === 'all' || pathwayFor(project) === activePathway)
    .filter(project => `${project.title} ${project.summary} ${project.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'newest') return parseInt(b.year) - parseInt(a.year)
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    })

  const featured = projects.find(project => project.slug === 'smart-outlet')!

  return (
    <Layout>
      <ProjectPageHero />

      <section className="pathways-section grid-shell" aria-labelledby="choose-pathway">
        <div className="pathways-heading">
          <div><p className="kicker">Choose your path</p><h2 id="choose-pathway">Start with the work<br />that matters to you.</h2></div>
          <p>Each path is a focused view of the same multidisciplinary practice. Projects keep their secondary tags, so the useful overlaps stay visible.</p>
        </div>
        <div className="pathway-grid">
          {projectPathways.map((pathway, index) => {
            const Icon = pathway.icon
            const count = projects.filter(project => pathwayFor(project) === pathway.id).length
            return (
              <button className="pathway-card" key={pathway.id} onClick={() => selectPathway(pathway.id)}>
                <img src={pathway.image} alt="" />
                <span className="pathway-number">0{index + 1}</span>
                <div className="pathway-card-copy"><Icon /><small>{count} {count === 1 ? 'project' : 'projects'}</small><h3>{pathway.title}</h3><p>{pathway.description}</p><strong>Explore path <ArrowRight /></strong></div>
              </button>
            )
          })}
        </div>
      </section>

      <section className="building-strip grid-shell" aria-labelledby="building-now">
        <div><p className="kicker">On the bench now</p><h2 id="building-now">Currently building</h2></div>
        <div className="building-items">
          <article><span>01</span><div><strong>SO-101 arm</strong><small>Assembly · control · integration</small></div></article>
          <article><span>02</span><div><strong>MultiWii flight controller</strong><small>Reverse engineering · embedded</small></div></article>
          <article><span>03</span><div><strong>Revit systems practice</strong><small>BIM · facilities · MEP</small></div></article>
        </div>
      </section>

      <section className="intersection-section grid-shell">
        <div className="intersection-image"><img src={featured.image} alt="ESP32 connected smart outlet" /></div>
        <div className="intersection-copy">
          <p className="kicker">Featured intersection</p><h2>One project.<br />Five disciplines.</h2>
          <p>The connected smart outlet shows the full path from a physical electrical problem to an instrumented, enclosed and understandable product.</p>
          <div className="system-path" aria-label="Smart outlet system disciplines"><span>Power</span><i /><span>ESP32</span><i /><span>IoT data</span><i /><span>React</span><i /><span>CAD</span></div>
          <Link className="text-link" to={`/projects/${featured.slug}`}>Read the case study <ArrowRight /></Link>
        </div>
      </section>

      <section className="project-browser guided-browser grid-shell" id="all-projects">
        <div className="browser-heading"><div><p className="kicker">Complete archive</p><h2>Browse all projects</h2></div><p>Filter by pathway, search the technical stack, or simply wander.</p></div>
        <div className="browser-controls">
          <div className="pathway-filters" aria-label="Filter projects by pathway">
            <button className={activePathway === 'all' ? 'active' : ''} onClick={() => selectPathway('all', false)}>All</button>
            {projectPathways.map(pathway => <button key={pathway.id} className={activePathway === pathway.id ? 'active' : ''} onClick={() => selectPathway(pathway.id, false)}>{pathway.short}</button>)}
          </div>
          <label className="project-search"><Search size={15} /><span className="sr-only">Search projects</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search projects or tools" /></label>
          <label className="project-sort"><span className="sr-only">Sort projects</span><select value={sort} onChange={event => setSort(event.target.value as 'featured' | 'newest')}><option value="featured">Featured first</option><option value="newest">Newest first</option></select></label>
        </div>
        <p className="result-count">Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}{activePathway !== 'all' && ` in ${projectPathways.find(path => path.id === activePathway)?.title}`}</p>
        {visible.length > 0 ? <div className="all-projects-grid">{visible.map(project => <ProjectCard project={project} key={project.slug} />)}</div> : <div className="empty-projects"><Search /><h3>No matching builds yet.</h3><p>Try another pathway or a broader search.</p></div>}
      </section>

      <section className="notes-callout grid-shell">
        <div><BookOpen /><p className="kicker">Engineering notes</p><h2>The thinking behind the build.</h2></div>
        <div><p>Course notes, robotics experiments and build logs live on Bubba Machina while this archive grows.</p><a className="button button--primary" href="https://bubbamachina.wordpress.com/2025/12/01/applied-robotics-ros2-introduction/" target="_blank" rel="noreferrer">Read ROS 2 notes <ArrowUpRight size={16} /></a></div>
      </section>
    </Layout>
  )
}

function ProjectsPage() {
  return PROJECTS_PAGE_VARIANT === 'guided' ? <ProjectsPageGuided /> : <ProjectsPageClassic />
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <NotFound />
  const current = projects.indexOf(project)
  const next = projects[(current + 1) % projects.length]
  return (
    <Layout>
      <article className="project-detail">
        <header className="detail-header grid-shell">
          <Link to="/projects" className="back-link"><ArrowLeft size={16} />All projects</Link>
          <div className="detail-title"><p className="kicker">{project.eyebrow} · {project.year}</p><h1>{project.title}</h1><p>{project.description}</p></div>
          <div className="detail-meta"><span>{project.category}</span><span>{project.status}</span></div>
        </header>
        <div className="detail-hero-image"><img src={project.image} alt={project.title} /></div>
        <section className="detail-story grid-shell">
          <aside><p className="kicker">Project stack</p><div className="detail-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="detail-links">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={17} />View repository <ArrowUpRight size={15} /></a>}
              {project.external && <a href={project.external} target="_blank" rel="noreferrer"><BookOpen size={17} />Read project note <ArrowUpRight size={15} /></a>}
            </div>
          </aside>
          <div className="story-copy">
            <div><span>01</span><h2>The challenge</h2><p>{project.challenge}</p></div>
            <div><span>02</span><h2>The approach</h2><p>{project.approach}</p></div>
            <div><span>03</span><h2>What came out of it</h2><p>{project.outcome}</p></div>
          </div>
        </section>
        {project.gallery && <section className="detail-gallery">{project.gallery.map((image, i) => <img src={image} alt={`${project.title} detail ${i + 1}`} key={image} loading="lazy" />)}</section>}
        <Link className="next-project grid-shell" to={`/projects/${next.slug}`}><span><small>Next case study</small><strong>{next.title}</strong></span><ArrowRight /></Link>
      </article>
    </Layout>
  )
}

function ResumePage() {
  return (
    <Layout>
      <section className="resume-profile grid-shell" aria-labelledby="about-bobby">
        <aside className="profile-identity">
          <div className="profile-headshot"><img src="/assets/bobby-samuels-headshot.png" alt="Bobby Samuels" /></div>
          <h1>Bobby Samuels</h1>
          <p>Electrical Engineer</p>
          <span>AI graduate student · Educator</span>
          <div className="profile-location"><MapPin size={14} />Georgetown, Guyana</div>
          <div className="profile-contact">
            <a href="https://github.com/BubbaMachina" target="_blank" rel="noreferrer" aria-label="Bobby Samuels on GitHub"><Github size={19} /></a>
            <a href="mailto:bubbasamuels@gmail.com" aria-label="Email Bobby Samuels"><Mail size={19} /></a>
          </div>
        </aside>
        <div className="profile-summary">
          <p className="kicker">About me</p>
          <h2 id="about-bobby">Engineering across the whole stack.</h2>
          <p className="profile-bio">I’m an electrical engineer, AI master’s student and educator working across facilities, automation, embedded systems and full-stack software. I build robots, drones, PCBs and IoT systems as I work toward a career in intelligent mechatronics.</p>
          <a className="button profile-download" href={resumeUrl} download><Download size={17} />Download CV</a>
          <div className="profile-quick-grid">
            <div>
              <h3>Interests</h3>
              <ul><li>Mechatronics & robotics</li><li>Embedded & control systems</li><li>Artificial intelligence</li><li>CAD & digital fabrication</li></ul>
            </div>
            <div className="profile-education">
              <h3>Education</h3>
              <p><GraduationCap size={17} /><span><strong>MSc Artificial Intelligence</strong><small>University of Guyana · In progress</small></span></p>
              <p><GraduationCap size={17} /><span><strong>BSc Electrical Engineering</strong><small>University of Guyana · 2024</small></span></p>
            </div>
          </div>
        </div>
      </section>

      <div className="resume-body grid-shell">
        <section className="resume-section">
          <header><span>01</span><h2>Experience</h2></header>
          <div className="timeline">{experience.map(item => <article key={item.role}><time>{item.period}</time><div><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.detail}</p></div></article>)}</div>
        </section>
        <section className="resume-section">
          <header><span>02</span><h2>Education</h2></header>
          <div className="education-grid">{education.map(item => <article key={item.degree}><GraduationCap /><p className="eyebrow">{item.school}</p><h3>{item.degree}</h3><p>{item.detail}</p></article>)}</div>
        </section>
        <section className="resume-section">
          <header><span>03</span><h2>Capabilities</h2></header>
          <div className="capability-grid">{capabilities.map((capability, index) => <article key={capability.group}><span>0{index + 1}</span><h3>{capability.group}</h3><ul>{capability.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>
        <section className="resume-section">
          <header><span>04</span><h2>Certifications & recognition</h2></header>
          <div className="resume-recognition">
            {recognition.map(item => <article key={item.title}><Zap /><div><p className="eyebrow">{item.issuer}</p><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}
            {certifications.map(item => <article key={item.title}><Zap /><div><p className="eyebrow">{item.issuer}</p><h3>{item.title}</h3></div></article>)}
          </div>
        </section>
      </div>
    </Layout>
  )
}

function NotFound() {
  return <Layout><section className="not-found"><Wrench /><p className="kicker">404 · Loose connection</p><h1>This page isn’t wired up.</h1><Link className="button button--primary" to="/">Back to the workshop</Link></section></Layout>
}

export default function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/:slug" element={<ProjectDetail />} /><Route path="/resume" element={<ResumePage />} /><Route path="*" element={<NotFound />} /></Routes>
}
