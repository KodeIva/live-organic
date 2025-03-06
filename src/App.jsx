import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FruitMenu from './components/Menu/FruitMenu'
import  About  from './components/About/About'
import RandomRecipe from './components/Recipes/RandomRecipe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FruitMenu/>
      <About/>
      <RandomRecipe/>
      <Footer/>
    </main>
  )
}

export default App
