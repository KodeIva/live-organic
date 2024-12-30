import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ResponsiveMenu = ({open, setOpen}) => {
  return (
    <AnimatePresence mode='wait'>       
    {
      open &&  <motion.div 
         initial={{opacity: 0, y: -100}}
         animate={{opacity: 1, y: 0}}
         exit={{opacity: 0, y: -100}}
         transition={{duration: 0.3}}
         className='absolute top-0 left-0 w-full h-screen z-20' onClick={() => setOpen(false)}
         >
        <div className='text-xl font-semibold bg-[#F72C5B] text-white py-10'>
          <ul className='flex  flex-col items-center m-2'>
            <li className='flex mb-2 w-[50%] justify-center hover:text-[#91e374] hover:translate-x-8 duration-300'><a href="">Home</a></li>
            <li className='flex mb-2 w-[50%] justify-center hover:text-[#91e374] hover:-translate-x-8 duration-300'>About</li>
            <li className='flex mb-2 w-[50%] justify-center hover:text-[#91e374] hover:translate-x-8 duration-300'>Services</li>
            <li className='flex mb-2 w-[50%] justify-center hover:text-[#91e374] hover:-translate-x-8 duration-300'>Contact</li>
          </ul>
        </div>
    </motion.div>              
    }
     </AnimatePresence>

  )
}

export default ResponsiveMenu