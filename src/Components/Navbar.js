import React from 'react'
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

function Navbar() {
    const[nav, setNav] = React.useState(true)
    function handleNav(){
        setNav(prev => !prev)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 font-serif'>Data.</h1>
        <ul className='hidden md:flex '> 
            <li className='p-4 hover:text-[#00df9a] cursor-pointer hover:font-medium'>Home</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer hover:font-medium'>Company</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer hover:font-medium'>Resources</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer hover:font-medium'>About</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer hover:font-medium'>Contact</li>
        </ul>
        <div className='block md:hidden' onClick={handleNav}>
            {!nav? <AiOutlineClose size={20}/> : <AiOutlineMenu  size={20}/>}
            
        </div>
        <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r   border-r-gray-900  bg-[#000300] block md:hidden': 'fixed left-[-100%] ease-in-out duration-1000'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 font-serif'>Data.</h1>
        <ul className='block md:hidden uppercase p-4' > 
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar