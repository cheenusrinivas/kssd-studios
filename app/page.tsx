import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import About from '@/components/sections/About'
import Lookbook from '@/components/sections/Lookbook'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <About />
      <Lookbook />
      <Newsletter />
      <Footer />
    </main>
  )
}