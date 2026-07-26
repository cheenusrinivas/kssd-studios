export default function Lookbook() {
    const items = [
      { id: 1, label: 'SS26 — Look 01', sub: 'Void Black Hoodie + Studio Joggers' },
      { id: 2, label: 'SS26 — Look 02', sub: 'Flame Hoodie + Wide Joggers' },
      { id: 3, label: 'SS26 — Look 03', sub: 'Core Set — Ash Grey' },
      { id: 4, label: 'SS26 — Look 04', sub: 'Premium Set — Void Black' },
    ]
  
    return (
        <section id="lookbook" className="py-24 md:py-40 bg-black border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
  
          {/* Header */}
          <div className="flex justify-between items-end mb-10 md:mb-16">
            <div>
              <p className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-3">Visual Edit</p>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Lookbook</h2>
            </div>
            <p className="text-[10px] text-gray-600 tracking-widest uppercase hidden md:block">SS26</p>
          </div>
  
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-900">
            {items.map((item, i) => (
              <div
                key={item.id}
                className="relative bg-zinc-950 overflow-hidden flex items-end p-6 md:p-8"
                style={{ aspectRatio: i < 2 ? '4/5' : '16/9' }}
              >
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl md:text-9xl font-black text-zinc-900 tracking-widest">KS</span>
                </div>
  
                {/* Label */}
                <div className="relative z-10">
                  <p className="text-xs md:text-sm text-white font-semibold tracking-wide mb-1">{item.label}</p>
                  <p className="text-[11px] text-gray-600 tracking-wide">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }