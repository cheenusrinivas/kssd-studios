export default function About() {
    return (
      <section id="about" style={{ background: '#0a0a0a', padding: '160px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
  
          {/* Big statement */}
          <div style={{ marginBottom: '120px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.5em', color: '#444', textTransform: 'uppercase', marginBottom: '32px' }}>
              Our Story
            </p>
            <h2 style={{
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: '900',
              color: '#fff',
              lineHeight: '1.1',
              letterSpacing: '-1px',
              maxWidth: '800px',
            }}>
              Born in Dublin.
              <span style={{ color: '#333' }}> Built for the streets.</span>
              <br />
              Made to last.
            </h2>
          </div>
  
          {/* Two column */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '120px' }}>
            <div>
              <div style={{ width: '40px', height: '1px', background: '#333', marginBottom: '32px' }} />
              <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.9', letterSpacing: '0.02em' }}>
                KSSD Studios started as an idea between friends who were tired of paying premium prices for average quality. 
                We set out to build something different — streetwear that actually holds up, designed with intention, 
                made for people who move through the world on their own terms.
              </p>
            </div>
            <div>
              <div style={{ width: '40px', height: '1px', background: '#333', marginBottom: '32px' }} />
              <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.9', letterSpacing: '0.02em' }}>
                Every piece in the KSSD lineup is designed in Dublin and built to a standard we'd wear ourselves. 
                No fast fashion. No shortcuts. Just clean cuts, quality fabric, and a label that means something 
                to the people wearing it.
              </p>
            </div>
          </div>
  
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1a1a1a' }}>
            {[
              { number: '2026', label: 'Est. Dublin' },
              { number: '100%', label: 'Independent' },
              { number: 'SS26', label: 'First Drop' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: '#0a0a0a', padding: '48px 40px' }}>
                <div style={{ fontSize: '40px', fontWeight: '900', color: '#fff', letterSpacing: '-1px', marginBottom: '8px' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#444', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }