import React from 'react'
import { FruitsData } from '../../utility/data'


const FruitMenu = () => {
  return (
    <div className='bg-slate-50 flex flex-col  justify-center items-center h-auto w-full text-blue-800'>
        <h1 className='text-3xl text-[#FF885B] my-9 font-semibold'>Organics in our store</h1>
         <ul className='flex flex-wrap justify-center items-center w-full'>
        {FruitsData.map((fruit) => {
            return (
                
                <li 
                  className=' h-[200px] flex flex-col justify-center items-center w-[35%] md:w-[30%] lg:w-[20%] m-5
                 relative rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)]
                 hover:shadow-[0_0_22px_0_rgba(0,0,0,0.35)]' 
                   key={fruit.id}>
                 <img className='w-[120px] pb-6 md:w-[150px] lg:w-[200px]
                  transform-translate-y-6' src={fruit.image} alt={fruit.title} />   
                 <a className='absolute bottom-8 text-xl text-[#FF885B] font-semibold' href="/">{fruit.title}</a>  
                 <p className='absolute bottom-1 text-xl text-[#619a4c] font-semibold'>{fruit.price}</p>  
                </li> 
            ) 
        })}
         </ul> 
    </div>
  )
}

export default FruitMenu

