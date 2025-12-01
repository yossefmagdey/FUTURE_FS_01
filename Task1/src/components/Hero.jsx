import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <div className="hi">Hi, my name is</div>
        <div className="name">Youssef Magdy</div>
        <div className="role">Full Stack Developer — React & Node.js</div>
        <p style={{color:'var(--muted)',maxWidth:680}}>
          I build responsive web apps and enjoy solving problems with clean, maintainable code.
          Currently working on React projects and learning decentralized apps using Rust.
        </p>

        <div style={{marginTop:16}} className="hero-cta">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-outline" href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="hero-right card">
        <img
          alt="profile"
          className="profile-pic"
          src="https://picsum.photos/320/220?random=12"
        />
        <div style={{marginTop:8,fontSize:13,color:'var(--muted)'}}>
          Short summary: React developer — projects with modern UI — GitHub ➜
        </div>
      </div>
    </section>
  )
}
