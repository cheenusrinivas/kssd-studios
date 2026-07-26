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
    <section id="shop" style={{ padding: '120px 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#444', textTransform: 'uppercase', marginBottom: '12px' }}>
              SS26 Collection
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: '900', color: '#fff', letterSpacing: '-1px' }}>
              The Drop
            </h2>
          </div>
          <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            {filtered.length} pieces
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', borderBottom: '1px solid #1a1a1a', paddingBottom: '24px' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: active === f ? '#fff' : '#555',
                background: 'none',
                border: 'none',
                borderBottom: active === f ? '1px solid #fff' : '1px solid transparent',
                paddingBottom: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1a1a1a' }}>
          {filtered.map((product) => (
            <div
              key={product.id}
              style={{ background: '#0a0a0a', cursor: 'pointer', position: 'relative' }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image area */}
              <div style={{ position: 'relative', aspectRatio: '3/4', background: '#111', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '80px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '8px' }}>KS</span>

                {product.tag && (
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#000', background: '#fff', padding: '4px 10px', textTransform: 'uppercase' }}>
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.6)',
                  display: 'flex', alignItems: 'flex-end', padding: '24px',
                  opacity: hoveredId === product.id ? 1 : 0,
                  transition: 'opacity 0.3s',
                }}>
                  <button style={{
                    width: '100%', border: '1px solid #fff', color: '#fff',
                    background: 'none', fontSize: '11px', letterSpacing: '0.3em',
                    textTransform: 'uppercase', padding: '12px',
                    cursor: 'pointer', transition: 'all 0.3s',
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ color: '#fff', fontSize: '13px', fontWeight: '500', letterSpacing: '0.05em' }}>{product.name}</p>
                    <p style={{ color: '#555', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: '4px' }}>{product.color}</p>
                  </div>
                  <p style={{ color: '#fff', fontSize: '13px', fontWeight: '700' }}>{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button style={{
            border: '1px solid #333', color: '#555', background: 'none',
            fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase',
            padding: '16px 48px', cursor: 'pointer', transition: 'all 0.3s',
          }}>
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  )
}