import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import SmartSystems from './components/SmartSystems'
import WhyUs from './components/WhyUs'
import Industries from './components/Industries'
import Clients from './components/Clients'
import MedicalEquipment from './components/MedicalEquipment'
import Logistics from './components/Logistics'
import Capabilities from './components/Capabilities'
import Partnership from './components/Partnership'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (!id) return
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SmartSystems />
        <WhyUs />
        <Industries />
        <Clients />
        <MedicalEquipment />
        <Logistics />
        <Capabilities />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
