import { useState, useEffect} from 'react'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const RandomRecipe = () => {
  const [meal, setRandomMeal] = useState([])

  useEffect(() => {
    const randomRecipe = async () => {
     try{  
        const response = await fetch(url)
        const randomMeal = await response.json()
        setRandomMeal(randomMeal)
        console.log(randomMeal);

     }catch(error) {
       console.log(error);
     }
    } 
    randomRecipe()
  },[])


  return (
    <div id='recipe'>RandomRecipe</div>
  )
}

export default RandomRecipe


