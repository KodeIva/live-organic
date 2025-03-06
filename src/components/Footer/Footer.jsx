import React from 'react'
import { ImLeaf } from "react-icons/im";

let currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='m-10'>
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
  )
}

export default Footer