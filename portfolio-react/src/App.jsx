import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Achievements from './Components/Achievements/Achievements'
import Research from './Components/Research/Research'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Achievements/>
      <Research/>
      <Contact/>
    </div>
  )
}

export default App