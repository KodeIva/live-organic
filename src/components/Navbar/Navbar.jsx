import React, { useState } from 'react'
import { ImLeaf } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from './ResponsiveMenu'
import {motion} from 'framer-motion'
import { FadeDown } from '../../utility/animation';
import { NavbarMenu } from '../../utility/data';


const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <>
    <nav>
     <motion.div
       variants={FadeDown(0.3)}
       initial='hidden'
       animate='vissible'
      className='container flex justify-between items-center py-4 md:pt-4'> 
      <div className="container flex items-center text-3xl font-semibold ">
        <span className='text-[#F72C5B]'>Live </span>
        <span className='text-[#619a4c]'><ImLeaf/></span>
        <span className='text-[#FF885B] ml-[-9px]'>Organic </span>
      </div>

      <div className='hidden md:block'>
        <ul className='flex items-center gap-6 text-gray-600'>
            {NavbarMenu.map((menu) => {
                return (
                    <li key={menu.id} className='text-xl'>
                       <a href={menu.link} className='inline-block py-1 px-3 hover:text-[#619a4c]
                           hover:shadow-[0_3px_0_-1px_#619a4c] font-semibold'>
                         {menu.title}
                       </a> 
                    </li>
                )
            })}
            <button className='text-3xl hover:text-white hover:bg-[#619a4c] rounded-full p-1
            text-[#619a4c] duration-200'>
              <TiShoppingCart />
            </button>
        </ul>
      </div> 

      <div className='md:hidden' onClick={() => setOpen(!open)}>
        <IoMdMenu className='text-4xl' />
      </div>
      

     </motion.div>
    </nav>
  
  <ResponsiveMenu open={open} setOpen={setOpen} />
    
    </> 
  )
}

export default Navbar   