'use client'

export default function Footer() {
  const shopLinks = ['Hoodies', 'Joggers', 'Sets', 'New Arrivals']
  const infoLinks = ['About', 'Lookbook', 'Size Guide', 'Contact']
  const followLinks = ['@kssd_studios', 'Instagram', 'TikTok']

  return (
    <footer style={{ background: '#000', borderTop: '1px solid #111', paddingTop: '64px', paddingBottom: '32px' }}>
      <div className="container">

        {/* Top */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '64px', flexWrap: 'wrap', gap: '48px' }}>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '0.4em', color: '#fff', marginBottom: '4px' }}>KSSD</div>
            <div className="section-label">Studios</div>
            <p className="body-text" style={{ marginTop: '16px', maxWidth: '240px', fontSize: '13px' }}>
              Premium streetwear from Dublin, Ireland. Built different.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            {[
              { title: 'Shop', links: shopLinks },
              { title: 'Info', links: infoLinks },
              { title: 'Follow', links: followLinks },
            ].map((col) => (
              <div key={col.title}>
                <p className="section-label" style={{ marginBottom: '16px' }}>{col.title}</p>
                {col.links.map((link) => (
                  <p
                    key={link}
                    className="body-text"
                    style={{ fontSize: '13px', marginBottom: '10px', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #111', paddingTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '11px', color: '#333', letterSpacing: '0.2em' }}>
            © 2026 KSSD Studios. All rights reserved.
          </p>
          <p style={{ fontSize: '11px', color: '#333', letterSpacing: '0.2em' }}>
            Dublin, Ireland · Est. 2026
          </p>
        </div>
      </div>
    </footer>
  )
}