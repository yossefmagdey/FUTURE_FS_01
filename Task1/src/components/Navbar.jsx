import React from 'react'

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container">
        <div className="brand">Youssef Magdy</div>
        <nav className="navlinks" aria-label="Main Navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
