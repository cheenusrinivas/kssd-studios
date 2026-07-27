'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="section" style={{ background: '#0a0a0a', borderTop: '1px solid #111' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ textAlign: 'center' }}>
          <p className="section-label">Stay in the loop</p>
          <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#fff', letterSpacing: '-1px', marginBottom: '12px' }}>
            First to the drop.
          </h2>
          <p className="body-text" style={{ marginBottom: '40px' }}>
            Sign up and get early access to new drops, exclusive discounts, and KSSD news before anyone else.
          </p>

          {submitted ? (
            <div style={{ border: '1px solid #222', color: '#555', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '20px' }}>
              YOU'RE ON THE LIST ✓
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  flex: 1, background: '#111', border: '1px solid #222',
                  borderRight: 'none', color: '#fff', padding: '16px 20px',
                  fontSize: '13px', outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#fff', color: '#000', border: 'none',
                  padding: '16px 28px', fontSize: '11px', letterSpacing: '0.3em',
                  textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
                }}
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}