import { useState } from 'react'
import './style/App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <About/>
    <Work/>
 <Contact/>
 <Footer/>
    </>
  )
}

export default App
