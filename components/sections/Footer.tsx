'use client'

export default function Footer() {
  const shopLinks = ['Hoodies', 'Joggers', 'Sets', 'New Arrivals']
  const infoLinks = ['About', 'Lookbook', 'Size Guide', 'Contact']
  const followLinks = ['@kssd_studios', 'Instagram', 'TikTok']

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          {/* Logo */}
          <div>
            <div className="text-3xl font-black tracking-[0.4em] text-white mb-1">KSSD</div>
            <div className="text-[10px] tracking-[0.5em] text-zinc-700 uppercase">Studios</div>
            <p className="text-xs text-zinc-600 mt-4 max-w-xs leading-relaxed">
              Premium streetwear from Dublin, Ireland. Built different.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-zinc-700 uppercase mb-4">Shop</p>
              {shopLinks.map((item) => (
                <p
                  key={item}
                  className="text-sm text-zinc-600 hover:text-white transition-colors mb-3 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-zinc-700 uppercase mb-4">Info</p>
              {infoLinks.map((item) => (
                <p
                  key={item}
                  className="text-sm text-zinc-600 hover:text-white transition-colors mb-3 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-zinc-700 uppercase mb-4">Follow</p>
              {followLinks.map((item) => (
                <p
                  key={item}
                  className="text-sm text-zinc-600 hover:text-white transition-colors mb-3 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-zinc-900 pt-6">
          <p className="text-[11px] text-zinc-700 tracking-widest">
            © 2026 KSSD Studios. All rights reserved.
          </p>
          <p className="text-[11px] text-zinc-700 tracking-widest">
            Dublin, Ireland · Est. 2026
          </p>
        </div>
      </div>
    </footer>
  )
}