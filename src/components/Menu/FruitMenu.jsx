import React from 'react'
import { FruitsData } from '../../utility/data'


const FruitMenu = () => {
  return (
    <div className='h-auto w-full text-blue-800'>
         <ul>
        {FruitsData.map((fruit) => {
            return (
                 
                <li key={fruit.id}>
                 <a href="/">{fruit.title}</a>  
                 <p>{fruit.price}</p>  
                </li>
                      
            )
         
        })}
         </ul> 
    </div>
  )
}

export default FruitMenu

