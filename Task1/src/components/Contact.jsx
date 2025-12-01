import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(prev => ({...prev,[e.target.name]: e.target.value}))

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Frontend only: هنا بنعرض رسالة نجاح مؤقتة
    setStatus('Sending...')
    // Simulate sending
    await new Promise(res => setTimeout(res, 900))
    setStatus('Message sent! I will reply soon.')
    setForm({name:'',email:'',message:''})
  }

  return (
    <section id="contact" className="card contact-grid">
      <div>
        <h2>Contact Me</h2>
        <p style={{color:'var(--muted)'}}>Have a project or question? Send a message.</p>

        <form onSubmit={handleSubmit} style={{marginTop:12}}>
          <div className="form-group">
            <label>Name</label>
            <input className="input" name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div className="form-group" style={{marginTop:8}}>
            <label>Email</label>
            <input className="input" name="email" value={form.email} onChange={handleChange} type="email" required />
          </div>

          <div className="form-group" style={{marginTop:8}}>
            <label>Message</label>
            <textarea className="input" name="message" value={form.message} onChange={handleChange} required />
          </div>

          <div style={{marginTop:10}}>
            <button className="btn btn-primary" type="submit">Send Message</button>
          </div>

          {status && <div style={{marginTop:12,color:'green'}}>{status}</div>}
        </form>
      </div>

      <aside>
        <div className="card" style={{padding:12}}>
          <h4>Contact Info</h4>
          <div style={{color:'var(--muted)',marginTop:6}}>Email: you@example.com</div>
          <div style={{color:'var(--muted)'}}>Location: Cairo, Egypt</div>
          <div style={{color:'var(--muted)',marginTop:8}}>GitHub: github.com/yourusername</div>
          <div style={{color:'var(--muted)'}}>LinkedIn: linkedin.com/in/yourprofile</div>
        </div>
      </aside>
    </section>
  )
}
