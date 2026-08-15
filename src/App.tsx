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
import Capabilities from './components/Capabilities'
import Partnership from './components/Partnership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LogisticsPage from './components/LogisticsPage'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const isLogistics = path === '/logistics'

  useEffect(() => {
    if (isLogistics) return
    const id = window.location.hash.replace('#', '')
    if (!id) return
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [isLogistics])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {isLogistics ? (
          <LogisticsPage />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <SmartSystems />
            <WhyUs />
            <Industries />
            <Clients />
            <MedicalEquipment />
            <Capabilities />
            <Partnership />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
