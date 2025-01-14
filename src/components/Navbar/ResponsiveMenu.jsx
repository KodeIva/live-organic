import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavbarMenu } from '../../utility/data'

const ResponsiveMenu = ({open, setOpen}) => {
  return (
    <AnimatePresence mode='wait'>       
    {
      open &&  <motion.div 
         initial={{opacity: 0, y: -100}}
         animate={{opacity: 1, y: 0}}
         exit={{opacity: 0, y: -100}}
         transition={{duration: 0.3}}
         className=' md:hidden absolute top-0 left-0 w-full h-screen z-20' onClick={() => setOpen(false)}
         >
        <div className='text-xl font-semibold bg-[#F72C5B] text-white py-10 cursor-pointer'>
          <ul className='flex  flex-col items-center m-2'>
          {NavbarMenu.map((menu) => {
                return (
                    <li key={menu.id}  className='flex mb-2 w-[50%] justify-center hover:text-[#91e374] hover:translate-x-8 duration-300'>
                       <a href={menu.link}>
                         {menu.title}
                       </a> 
                    </li>
                )
            })}
          </ul>
        </div>
    </motion.div>              
    }
     </AnimatePresence>

  )
}

export default ResponsiveMenu