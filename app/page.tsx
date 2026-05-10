import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Amenities from '@/components/Amenities'
import Location from '@/components/Location'
import Recommendations from '@/components/Recommendations'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Gallery />
      <Amenities />
      <Location />
      <Recommendations />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
