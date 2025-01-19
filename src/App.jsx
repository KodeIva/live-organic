import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FruitMenu from './components/Menu/FruitMenu'
import  About  from './components/About/About'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FruitMenu/>
      <About/>
    </main>
  )
}

export default App
