import React from 'react'
import { FruitsData } from '../../utility/data'
import {motion} from 'framer-motion'
import { FadeRight , FadeLeft} from '../../utility/animation'

const FruitMenu = () => {
  return (
    <div id='products' className='bg-slate-50 flex flex-col  justify-center items-center h-auto w-full text-blue-800'>
        <motion.h1 
           variants={FadeRight(0.6)}
           initial='hidden'
           animate='vissible'
         className='text-3xl text-[#FF885B] my-9 font-semibold'>Organics in our store</motion.h1>
         <motion.ul
            variants={FadeLeft(0.6)}
            initial='hidden'
            animate='vissible'
         className='flex flex-wrap justify-center items-center w-full'>
        {FruitsData.map((fruit) => {
            return (
                <motion.li 
                variants={FadeLeft(0.6)}
                initial='hidden'
                animate='vissible'
                  className=' h-[200px] flex flex-col justify-center items-center w-[35%] md:w-[30%] lg:w-[20%] m-5
                 relative rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)]
                 hover:shadow-[0_0_22px_0_rgba(0,0,0,0.35)]' 
                   key={fruit.id}>
                 <img className='w-[120px] pb-6 md:w-[150px] lg:w-[200px]
                  transform-translate-y-6' src={fruit.image} alt={fruit.title} />   
                 <a className='absolute bottom-8 text-xl text-[#FF885B] font-semibold' href="/">{fruit.title}</a>  
                 <p className='absolute bottom-1 text-xl text-[#619a4c] font-semibold'>{fruit.price}</p>  
                </motion.li> 
            ) 
        })}
         </motion.ul> 
    </div>
  )
}

export default FruitMenu

