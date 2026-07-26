'use client'
export default function Footer() {
    return (
      <footer style={{ background: '#000', borderTop: '1px solid #111', padding: '60px 0 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
  
          {/* Top row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '0.4em', color: '#fff', marginBottom: '4px' }}>
                KSSD
              </div>
              <div style={{ fontSize: '10px', letterSpacing: '0.5em', color: '#333', textTransform: 'uppercase' }}>
                Studios
              </div>
            </div>
  
            <div style={{ display: 'flex', gap: '60px' }}>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.4em', color: '#333', textTransform: 'uppercase', marginBottom: '16px' }}>Shop</p>
                {['Hoodies', 'Joggers', 'Sets', 'New Arrivals'].map((item) => (
                  <p key={item} style={{ fontSize: '13px', color: '#666', marginBottom: '10px', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.4em', color: '#333', textTransform: 'uppercase', marginBottom: '16px' }}>Info</p>
                {['About', 'Lookbook', 'Size Guide', 'Contact'].map((item) => (
                  <p key={item} style={{ fontSize: '13px', color: '#666', marginBottom: '10px', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.4em', color: '#333', textTransform: 'uppercase', marginBottom: '16px' }}>Follow</p>
                {['@kssd_studios', 'Instagram', 'TikTok'].map((item) => (
                  <p key={item} style={{ fontSize: '13px', color: '#666', marginBottom: '10px', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
  
          {/* Bottom row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #111', paddingTop: '24px' }}>
            <p style={{ fontSize: '11px', color: '#333', letterSpacing: '0.2em' }}>
              © 2026 KSSD Studios. All rights reserved.
            </p>
            <p style={{ fontSize: '11px', color: '#333', letterSpacing: '0.2em' }}>
              Dublin, Ireland
            </p>
          </div>
        </div>
      </footer>
    )
  }