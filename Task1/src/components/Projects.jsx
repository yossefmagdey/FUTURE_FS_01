import React from 'react'

const projects = [
  {
    id:1,
    title:'DevFolio Clone',
    desc:'Personal portfolio built with React and CSS. Responsive and simple.',
    img:'https://picsum.photos/seed/p1/800/400',
    github:'#',
    demo:'#'
  },
  {
    id:2,
    title:'Mini E-commerce',
    desc:'React storefront with cart functionality and local state management.',
    img:'https://picsum.photos/seed/p2/800/400',
    github:'#',
    demo:'#'
  },
  {
    id:3,
    title:'AI Rebrand Demo',
    desc:'Landing page redesign using generated assets and modern UI.',
    img:'https://picsum.photos/seed/p3/800/400',
    github:'#',
    demo:'#'
  }
]

export default function Projects(){
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div style={{color:'var(--muted)',marginBottom:12}}>Selected work — source & live links included</div>

      <div className="projects-grid">
        {projects.map(p => (
          <article className="card project-card" key={p.id}>
            <img src={p.img} alt={p.title} />
            <div className="project-body">
              <h3 style={{marginBottom:6}}>{p.title}</h3>
              <p style={{color:'var(--muted)',flex:1}}>{p.desc}</p>
              <div style={{display:'flex',gap:8,marginTop:8}}>
                <a className="btn btn-outline" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn btn-primary" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
