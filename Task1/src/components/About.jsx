import React from 'react'

export default function About(){
  return (
    <section id="about" className="card about">
      <div>
        <h2>About Me</h2>
        <p style={{color:'var(--muted)'}}>
          I'm Youssef, a university student and passionate web developer. I enjoy building
          interactive user interfaces with React and integrating them with Node.js backends.
          I focus on readable code, responsive design and practical projects.
        </p>

        <h3 style={{marginTop:12}}>What I do</h3>
        <ul style={{color:'var(--muted)',marginLeft:18}}>
          <li>Frontend development with React</li>
          <li>REST APIs with Node.js & Express</li>
          <li>Responsive UI and performance optimization</li>
        </ul>
      </div>

      <aside>
        <div style={{marginBottom:12}}>
          <strong>Education</strong>
          <div style={{color:'var(--muted)'}}>B.Sc. Mathematics — Benha University (studying)</div>
        </div>

        <div>
          <strong>Contact</strong>
          <div style={{color:'var(--muted)'}}>you@example.com</div>
          <div style={{color:'var(--muted)'}}>Cairo, Egypt</div>
        </div>
      </aside>
    </section>
  )
}
