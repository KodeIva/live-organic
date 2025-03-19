import React from 'react'
import { ImLeaf } from "react-icons/im";
import { FaFacebookSquare, FaYoutube,FaPinterestSquare, FaInstagramSquare} from "react-icons/fa";
import { FaSquareXTwitter,  } from "react-icons/fa6";
import { NavbarMenu } from '../../utility/data';

let currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div className=' bg-sky-50 w-[100%]'>
    <div className='flex flex-col my-6 pt-10 py-2 justify-center items-center p-1 md:flex-row md:justify-evently md:items-center xl:items-center xl:justify-evenly'>
    <div className='socials flex justify-center items-center pb-3 mr-4 xl:gap-2'>
        <a className='text-blue-500 hover:text-blue-400 social-size' href="https://facebook.com"><FaFacebookSquare /></a>
        <a className='text-slate-800 hover:text-slate-600 social-size' href="https://x.com"><FaSquareXTwitter /></a>
        <a className='text-red-600 hover:text-red-400 social-size' href="https://pinterest.com"><FaPinterestSquare /></a>
        <a className='text-orange-600 hover:text-orange-400 social-size' href="https://youtube.com"><FaYoutube /></a>
        <a className='text-pink-600 hover:text-pink-400 social-size' href="https://instagram.com"><FaInstagramSquare /></a>
      </div>
         <div>
      <ul className='grid grid-cols-2 gap-1 md:flex xl:gap-4 text-gray-600 justify-center items-center'>
            {NavbarMenu.map((menu) => {
                return (
                    <li key={menu.id} className='text-xl'>
                       <a href={menu.link} className='inline-block py-1 px-2 hover:text-[#619a4c]
                           hover:shadow-[0_3px_0_-1px_#619a4c] font-semibold'>
                         {menu.title}
                       </a> 
                    </li>
                )
            })}
        </ul>
      </div>
    </div>
    
      <div className='flex flex-col justify-center items-center  my-1 py-2 md:flex-row'>
         <div className="p-3 flex items-center text-xl font-semibold md:mr-2 ">   
          <a href="/" className='flex'>
          <span className='text-[#F72C5B]'>Live </span>
          <span className='text-[#619a4c]'><ImLeaf/></span>
          <span className='text-[#FF885B] ml-[-9px]'>Organic </span>
          </a>
         </div>
         <div className=' p-3 flex flex-col justify-center items-center md:flex-row '>
           <span> &#169;{currentYear}
            Created by 
             <a href="https://kodeiva.netlify.app"> KodeIva. </a> 
           </span>
           <span> All rights reserved.</span>
         </div>
      </div>



    </div>
  )
}

export default Footer