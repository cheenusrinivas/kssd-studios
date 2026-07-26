export default function Lookbook() {
    const items = [
      { id: 1, label: 'SS26 — Look 01', sub: 'Void Black Hoodie + Studio Joggers' },
      { id: 2, label: 'SS26 — Look 02', sub: 'Flame Hoodie + Wide Joggers' },
      { id: 3, label: 'SS26 — Look 03', sub: 'Core Set — Ash Grey' },
      { id: 4, label: 'SS26 — Look 04', sub: 'Premium Set — Void Black' },
    ]
  
    return (
      <section id="lookbook" style={{ background: '#000', padding: '160px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
  
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.5em', color: '#444', textTransform: 'uppercase', marginBottom: '12px' }}>
                Visual Edit
              </p>
              <h2 style={{ fontSize: '48px', fontWeight: '900', color: '#fff', letterSpacing: '-1px' }}>
                Lookbook
              </h2>
            </div>
            <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              SS26
            </p>
          </div>
  
          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: '#111' }}>
            {items.map((item, i) => (
              <div
                key={item.id}
                style={{
                  background: '#0d0d0d',
                  aspectRatio: i === 0 ? '4/5' : i === 1 ? '4/5' : '16/9',
                  gridColumn: i >= 2 ? 'span 1' : 'span 1',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '28px',
                }}
              >
                {/* Placeholder background */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '100px', fontWeight: '900', color: '#151515', letterSpacing: '4px' }}>
                    KS
                  </span>
                </div>
  
                {/* Label */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ fontSize: '12px', color: '#fff', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '4px' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.05em' }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  