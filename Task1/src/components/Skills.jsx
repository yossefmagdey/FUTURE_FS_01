import React from 'react'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Vite']

export default function Skills(){
  return (
    <section id="skills" className="card">
      <h2>Skills</h2>
      <div style={{color:'var(--muted)'}}>Technologies I use</div>
      <div className="skills-grid" style={{marginTop:12}}>
        {skills.map(s => (
          <div key={s} className="skill">{s}</div>
        ))}
      </div>
    </section>
  )
}
