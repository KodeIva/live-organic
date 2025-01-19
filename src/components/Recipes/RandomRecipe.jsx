import { useState, useEffect} from 'react'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const RandomRecipe = () => {
  const [randomMeal, setRandomMeal] = useState([])


  return (
    <div id='recipe'>RandomRecipe</div>
  )
}

export default RandomRecipe


