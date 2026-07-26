export default function About() {
    return (
      <section id="about" className="py-24 md:py-40 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
  
          {/* Big statement */}
          <div className="mb-16 md:mb-24">
            <p className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-6 md:mb-8">
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight max-w-3xl">
              Born in Dublin.{' '}
              <span className="text-zinc-700">Built for the streets.</span>
              <br />
              Made to last.
            </h2>
          </div>
  
          {/* Two column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-24">
            <div>
              <div className="w-10 h-px bg-zinc-800 mb-8" />
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                KSSD Studios started as an idea between friends who were tired of paying premium prices
                for average quality. We set out to build something different — streetwear that actually
                holds up, designed with intention, made for people who move through the world on their
                own terms.
              </p>
            </div>
            <div>
              <div className="w-10 h-px bg-zinc-800 mb-8" />
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Every piece in the KSSD lineup is designed in Dublin and built to a standard we'd wear
                ourselves. No fast fashion. No shortcuts. Just clean cuts, quality fabric, and a label
                that means something to the people wearing it.
              </p>
            </div>
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-3 gap-px bg-zinc-900">
            {[
              { number: '2026', label: 'Est. Dublin' },
              { number: '100%', label: 'Independent' },
              { number: 'SS26', label: 'First Drop' },
            ].map((stat) => (
              <div key={stat.label} className="bg-black px-6 py-8 md:px-10 md:py-12">
                <div className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2">
                  {stat.number}
                </div>
                <div className="text-[10px] md:text-[11px] tracking-[0.4em] text-gray-600 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }