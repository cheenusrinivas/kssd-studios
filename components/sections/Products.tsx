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
    <section id="shop" className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex justify-between items-end mb-12 md:mb-16">
          <div>
            <p className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-3">SS26 Collection</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">The Drop</h2>
          </div>
          <p className="text-[10px] text-gray-600 tracking-widest uppercase hidden md:block">
            {filtered.length} pieces
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-6 md:gap-8 mb-10 border-b border-zinc-900 pb-5 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[11px] tracking-[0.3em] uppercase whitespace-nowrap transition-all duration-300 pb-1 border-b ${
                active === f
                  ? 'text-white border-white'
                  : 'text-gray-600 border-transparent hover:text-gray-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="relative bg-black cursor-pointer group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image area */}
              <div className="relative bg-zinc-950 overflow-hidden flex items-center justify-center" style={{ aspectRatio: '3/4' }}>
                <span className="text-[80px] font-black text-zinc-900 tracking-widest">KS</span>

                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-[0.3em] text-black bg-white px-3 py-1 uppercase">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-end p-5 md:p-6 transition-opacity duration-300 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="w-full border border-white text-white text-[11px] tracking-[0.3em] uppercase py-3 hover:bg-white hover:text-black transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white text-sm font-medium tracking-wide">{product.name}</p>
                    <p className="text-gray-600 text-[11px] tracking-widest uppercase mt-1">{product.color}</p>
                  </div>
                  <p className="text-white text-sm font-bold">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 md:mt-16">
          <button className="border border-zinc-800 text-gray-500 hover:border-white hover:text-white text-[11px] tracking-[0.4em] uppercase px-10 md:px-12 py-4 transition-all duration-300">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  )
}