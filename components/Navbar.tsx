'use client'

export default function Navbar({ visible }: { visible: boolean }) {
  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
  }`}
  style={{
    background: 'rgba(10,10,10,0.95)',
    backdropFilter: 'blur(10px)',
    paddingTop: 'env(safe-area-inset-top)',
  }}
>
<div className="flex justify-between items-center px-12" style={{ paddingTop: '20px', paddingBottom: '16px' }}>
        <div className="flex gap-10 text-xs tracking-[0.3em] text-gray-400 uppercase">
          <a href="#" className="hover:text-white transition-colors">Shop</a>
          <a href="#" className="hover:text-white transition-colors">Lookbook</a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <div className="text-lg font-black tracking-[0.5em] text-white">KSSD</div>
          <div className="text-[7px] tracking-[0.6em] text-gray-500 uppercase">Studios</div>
        </div>

        <div className="flex gap-10 text-xs tracking-[0.3em] text-gray-400 uppercase">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Cart (0)</a>
        </div>
      </div>
    </nav>
  )
}