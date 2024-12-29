import React from 'react'
import { ImLeaf } from "react-icons/im";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <span>Live</span>
        <span>Organic</span>
        <span><ImLeaf/></span>
      </div>
    </nav>
  )
}

export default Navbar   