export default function Lookbook() {
    const items = [
      { id: 1, label: 'SS26 — Look 01', sub: 'Void Black Hoodie + Studio Joggers' },
      { id: 2, label: 'SS26 — Look 02', sub: 'Flame Hoodie + Wide Joggers' },
      { id: 3, label: 'SS26 — Look 03', sub: 'Core Set — Ash Grey' },
      { id: 4, label: 'SS26 — Look 04', sub: 'Premium Set — Void Black' },
    ]
  
    return (
      <section id="lookbook" className="section" style={{ background: '#000', borderTop: '1px solid #111' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <p className="section-label">Visual Edit</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Lookbook</h2>
            </div>
            <p className="section-label">SS26</p>
          </div>
  
          <div className="grid-2">
            {items.map((item, i) => (
              <div
                key={item.id}
                style={{
                  background: '#0d0d0d',
                  aspectRatio: i < 2 ? '4/5' : '16/9',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '28px',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '100px', fontWeight: 900, color: '#151515' }}>KS</span>
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ fontSize: '12px', color: '#fff', fontWeight: 600, marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ fontSize: '11px', color: '#555' }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }