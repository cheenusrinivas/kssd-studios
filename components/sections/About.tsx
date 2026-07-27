export default function About() {
    return (
      <section id="about" className="section" style={{ background: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container">
          <p className="section-label">Our Story</p>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-1px', maxWidth: '800px', marginBottom: '60px' }}>
            Born in Dublin.{' '}
            <span style={{ color: '#333' }}>Built for the streets.</span>
            <br />Made to last.
          </h2>
  
          <div className="two-col" style={{ marginBottom: '60px' }}>
            <div>
              <div className="divider" />
              <p className="body-text">
                KSSD Studios started as an idea between friends who were tired of paying premium prices
                for average quality. We set out to build something different — streetwear that actually
                holds up, designed with intention, made for people who move through the world on their own terms.
              </p>
            </div>
            <div>
              <div className="divider" />
              <p className="body-text">
                Every piece in the KSSD lineup is designed in Dublin and built to a standard we'd wear
                ourselves. No fast fashion. No shortcuts. Just clean cuts, quality fabric, and a label
                that means something to the people wearing it.
              </p>
            </div>
          </div>
  
          <div className="grid-3">
            {[
              { number: '2026', label: 'Est. Dublin' },
              { number: '100%', label: 'Independent' },
              { number: 'SS26', label: 'First Drop' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: '#0a0a0a', padding: '40px' }}>
                <div style={{ fontSize: '36px', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>{stat.number}</div>
                <div className="section-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }