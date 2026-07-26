'use client'

export default function Navbar({ visible }: { visible: boolean }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 backdrop-blur-md bg-black/95 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* Left links — hidden on mobile */}
        <div className="hidden md:flex gap-8">
          <a href="#shop" className="text-xs tracking-widest text-gray-500 uppercase hover:text-white transition-colors">Shop</a>
          <a href="#lookbook" className="text-xs tracking-widest text-gray-500 uppercase hover:text-white transition-colors">Lookbook</a>
        </div>

        {/* Center logo — always visible */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <div className="text-lg font-black tracking-[0.5em] text-white">KSSD</div>
          <div className="text-[7px] tracking-[0.6em] text-gray-600 uppercase">Studios</div>
        </div>

        {/* Right links — hidden on mobile */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-xs tracking-widest text-gray-500 uppercase hover:text-white transition-colors">About</a>
          <a href="#shop" className="text-xs tracking-widest text-gray-500 uppercase hover:text-white transition-colors">Cart (0)</a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden ml-auto text-gray-500 text-xl cursor-pointer">☰</div>
      </div>
    </nav>
  )
}