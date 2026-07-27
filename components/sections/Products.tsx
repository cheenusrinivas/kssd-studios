'use client'

import { useState } from 'react'

const products = [
  { id: 1, name: 'KSSD Classic Hoodie', category: 'HOODIES', price: '€89', color: 'Void Black', tag: 'NEW DROP' },
  { id: 2, name: 'KSSD Flame Hoodie', category: 'HOODIES', price: '€99', color: 'Ash Grey', tag: 'LIMITED' },
  { id: 3, name: 'KSSD Studio Joggers', category: 'JOGGERS', price: '€69', color: 'Void Black', tag: 'NEW DROP' },
  { id: 4, name: 'KSSD Wide Joggers', category: 'JOGGERS', price: '€75', color: 'Ash Grey', tag: null },
  { id: 5, name: 'KSSD Core Set', category: 'SETS', price: '€149', color: 'Void Black', tag: 'BEST SELLER' },
  { id: 6, name: 'KSSD Premium Set', category: 'SETS', price: '€169', color: 'Ash White', tag: 'LIMITED' },
]

const filters = ['ALL', 'HOODIES', 'JOGGERS', 'SETS']

export default function Products() {
  const [active, setActive] = useState('ALL')
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const filtered = active === 'ALL' ? products : products.filter((p) => p.category === active)

  return (
    <section id="shop" className="section" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
          <div>
            <p className="section-label">SS26 Collection</p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>The Drop</h2>
          </div>
          <p className="section-label">{filtered.length} pieces</p>
        </div>

        <div style={{ display: 'flex', gap: '32px', marginBottom: '40px', borderBottom: '1px solid #111', paddingBottom: '20px', overflowX: 'auto' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase',
                background: 'none', border: 'none', cursor: 'pointer', paddingBottom: '4px',
                color: active === f ? '#fff' : '#555',
                borderBottom: active === f ? '1px solid #fff' : '1px solid transparent',
                whiteSpace: 'nowrap', transition: 'all 0.3s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filtered.map((product) => (
            <div
              key={product.id}
              style={{ background: '#0a0a0a', cursor: 'pointer', position: 'relative' }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={{ position: 'relative', aspectRatio: '3/4', background: '#111', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '80px', fontWeight: 900, color: '#1a1a1a' }}>KS</span>
                {product.tag && (
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#000', background: '#fff', padding: '4px 10px', textTransform: 'uppercase' }}>
                      {product.tag}
                    </span>
                  </div>
                )}
                <div style={{
                  position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)',
                  display: 'flex', alignItems: 'flex-end', padding: '24px',
                  opacity: hoveredId === product.id ? 1 : 0, transition: 'opacity 0.3s',
                }}>
                  <button style={{
                    width: '100%', border: '1px solid #fff', color: '#fff', background: 'none',
                    fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase',
                    padding: '12px', cursor: 'pointer',
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ color: '#fff', fontSize: '13px', fontWeight: 500 }}>{product.name}</p>
                    <p style={{ color: '#555', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: '4px' }}>{product.color}</p>
                  </div>
                  <p style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button style={{
            border: '1px solid #222', color: '#555', background: 'none',
            fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase',
            padding: '16px 48px', cursor: 'pointer',
          }}>
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  )
}