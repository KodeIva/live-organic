import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FruitMenu from './components/Menu/FruitMenu'
import  About  from './components/About/About'
import Recipe from './components/Recipe/recipe'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FruitMenu/>
      <About/>
      <Recipe/>
    </main>
  )
}

export default App
