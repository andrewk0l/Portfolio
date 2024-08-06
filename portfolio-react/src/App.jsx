import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Achievements from './Components/Achievements/Achievements'
import Research from './Components/Research/Research'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Achievements/>
      <Research/>
    </div>
  )
}

export default App