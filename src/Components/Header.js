import React from 'react'
import { FaBars } from "react-icons/fa6";
function Header() {
  return (
    <div className='flex justify-between'>
        <div className='flex justify-center items-center gap-3'>
            <img src='./assets/Logo.svg' alt='No image'/>
            <button className='bg-gradient-to-r from-orange-300 to-red-600 text-xs text-white px-2 py-1.5 rounded-xl'>Hosterr is hiring!</button>
        </div>
        <div>
        <FaBars />
        </div>
    </div>
  )
}

export default Header