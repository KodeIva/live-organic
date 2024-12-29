import React from 'react'
import { ImLeaf } from "react-icons/im";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex items-center text-3xl font-semibold ">
        <span className='text-[#F72C5B]'>Live </span>
        <span className='text-[#88D66C]'><ImLeaf/></span>
        <span className='text-[#FF885B] ml-[-9px]'>Organic </span>
      </div>
    </nav>
  )
}

export default Navbar   