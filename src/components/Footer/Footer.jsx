import React from 'react'
import { ImLeaf } from "react-icons/im";
import { FaFacebookSquare, FaYoutube,FaPinterestSquare, FaInstagramSquare} from "react-icons/fa";
import { FaSquareXTwitter,  } from "react-icons/fa6";

let currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='m-10'>
      <div>
         <div className="container flex items-center text-xl font-semibold ">
          <span className='text-[#F72C5B]'>Live </span>
          <span className='text-[#619a4c]'><ImLeaf/></span>
          <span className='text-[#FF885B] ml-[-9px]'>Organic </span>
         </div>
         <div>
           <span> &#169;{currentYear}</span>
           <span> Created by 
             <a href="https://kodeiva.netlify.app"> KodeIva</a> 
           </span>
         </div>
      </div>

      <div className='socials flex'>
        <a className='text-blue-500' href="https://facebook.com"><FaFacebookSquare /></a>
        <a className='text-slate-800' href="https://x.com"><FaSquareXTwitter /></a>
        <a className='text-red-600' href="https://pinterest.com"><FaPinterestSquare /></a>
        <a className='text-orange-600' href="https://youtube.com"><FaYoutube /></a>
        <a className='text-pink-600' href="https://instagram.com"><FaInstagramSquare /></a>
      </div>

    </div>
  )
}

export default Footer