import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import SmartSystems from './components/SmartSystems'
import WhyUs from './components/WhyUs'
import Industries from './components/Industries'
import Capabilities from './components/Capabilities'
import Partnership from './components/Partnership'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
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
        <Capabilities />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
