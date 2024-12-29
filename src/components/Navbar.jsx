import React from 'react'
import { ImLeaf } from "react-icons/im";

const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'Products',
        link: '#'
    },
    {
        id: 3,
        title: 'About',
        link: '#'
    },
    {
        id: 4,
        title: 'Shop',
        link: '#'
    },
    {
        id: 5,
        title: 'Contacts',
        link: '#'
    },
]

const Navbar = () => {
  return (
    <nav>
      <div className="container flex items-center text-3xl font-semibold ">
        <span className='text-[#F72C5B]'>Live </span>
        <span className='text-[#88D66C]'><ImLeaf/></span>
        <span className='text-[#FF885B] ml-[-9px]'>Organic </span>
      </div>

      <div>
        <ul>
            {NavbarMenu.map((menu) => {
                return (
                    <li key={menu.id} className='text-xl'>
                       <a href={menu.link}>{menu.title}</a> 
                    </li>
                )
            })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar   