import React from 'react'
import { FruitsData } from '../../utility/data'


const FruitMenu = () => {
  return (
    <div className='bg-slate-400 flex  justify-center items-center h-auto w-full text-blue-800'>
         <ul className='flex flex-wrap bg-green-300 justify-center items-center w-full'>
        {FruitsData.map((fruit) => {
            return (
                
                <li className='bg-orange-500 h-[200px] flex flex-col justify-center items-center w-[35%] md:w-[30%] lg:w-[20%] m-5
                 relative' key={fruit.id}>
                 <img className='w-[120px] pb-6 md:w-[150px] lg:w-[200px]' src={fruit.image} alt={fruit.title} />   
                 <a className='absolute bottom-8 ' href="/">{fruit.title}</a>  
                 <p className='absolute bottom-1'>{fruit.price}</p>  
                </li>
                
             
                      
            )
         
        })}
         </ul> 
    </div>
  )
}

export default FruitMenu

