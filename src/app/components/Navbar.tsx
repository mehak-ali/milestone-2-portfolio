import Link from 'next/link';
import React from 'react'
import { AiOutlineMenu }  from "react-icons/ai";


const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium '>Mehak M Ali</div>

            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#Hero'>Home</a></li>
                <li className='menuLink'><a href='#About'>About</a></li>
                <li className='menuLink'><a href='#Contact'>Contact</a></li>
                <li className='menuLink'><Link href='#Skills'>Skills</Link></li>
    

            </ul>
            <AiOutlineMenu  className='md:hidden'  size={30}  />
        </div>
      
    </div>
  )
}

export default Navbar
