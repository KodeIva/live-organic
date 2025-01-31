import { useState, useEffect} from 'react'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const RandomRecipe = () => {
  const [meal, setRandomMeal] = useState({})

  useEffect(() => {
    const randomRecipe = async () => {
     try{  
        const response = await fetch(url)
        const randomMeal = await response.json()
        setRandomMeal(randomMeal.meals[0])
        console.log(randomMeal);
        console.log(randomMeal.meals[0].strMeal);

     }catch(error) {
       console.log(error);
     }
    } 
    randomRecipe()
  },[])


  return (
    <div id='recipe' className='bg-blue-50'>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt="" />
        <p>
            <a href={meal.strSource}>Recipe and instructions</a>
        </p>
        <p><span>{meal.strMeasure1}</span><span>{meal.strIngredient1}</span></p>

        
    </div>
  )
}

export default RandomRecipe


