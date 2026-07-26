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
    <section style={{ background: '#0a0a0a', padding: '120px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.5em', color: '#444', textTransform: 'uppercase', marginBottom: '20px' }}>
          Stay in the loop
        </p>
        <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#fff', letterSpacing: '-1px', marginBottom: '12px' }}>
          First to the drop.
        </h2>
        <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '40px' }}>
          Sign up and get early access to new drops, exclusive discounts, and KSSD news before anyone else.
        </p>

        {submitted ? (
          <div style={{ padding: '24px', border: '1px solid #222', color: '#888', fontSize: '13px', letterSpacing: '0.2em' }}>
            YOU'RE ON THE LIST ✓
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                flex: 1, background: '#111', border: '1px solid #222',
                borderRight: 'none', color: '#fff', padding: '16px 20px',
                fontSize: '13px', outline: 'none', letterSpacing: '0.05em',
              }}
            />
            <button
              type="submit"
              style={{
                background: '#fff', color: '#000', border: 'none',
                padding: '16px 28px', fontSize: '11px', letterSpacing: '0.3em',
                textTransform: 'uppercase', fontWeight: '700', cursor: 'pointer',
              }}
            >
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  )
}