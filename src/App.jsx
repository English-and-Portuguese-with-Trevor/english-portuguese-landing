import { useState } from 'react'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import LanguageSection from './components/LanguageSection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  

  return (
   <>
      <Nav />
      <Hero />
      <About />
      <LanguageSection />
      <Footer />
    </>
  )
}

export default App
