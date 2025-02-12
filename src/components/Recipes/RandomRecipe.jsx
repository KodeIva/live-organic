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
    <div id='recipe' className='py-5 bg-blue-50 flex flex-col justify-center items-center'>
      <h1 className='text-3xl  font-semibold text-[#FF885B]'>Your random recipe</h1>
        <h2 className='text-xl my-3 text-slate-500 font-semibold'>{meal.strMeal}</h2>
        <img className='w-[80%] lg:w-[50%]' src={meal.strMealThumb} alt="" />
        <p className='text-lg py-3 text-slate-500 font-medium'>
            <a href={meal.strSource} rel='noopener' target='_blank' > Recipe and instructions</a>
        </p>
       {/*  <p><span>{meal.strMeasure1}</span><span>{meal.strIngredient1}</span></p>*/}

        
    </div>
  )
}

export default RandomRecipe


