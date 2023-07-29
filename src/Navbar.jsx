import React from 'react'
import {RiRestaurant2Fill} from "react-icons/ri"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <Link to="/">
       <div className=' gap-2 ml-10 mb-2'>
       <RiRestaurant2Fill  className='text-7xl text-pink-500'/>
       <p className='text-2xl font-semibold text-gray-500 '>Foodie</p>
       </div>
    </Link> 
  )
}

export default Navbar;
