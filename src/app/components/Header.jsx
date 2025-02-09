

import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import Link from 'next/link';
import SwitchMode from './SwitchMode';

export default function Header() {
  return (
   <div className=' px-10 py-5 flex items-center justify-between shadow-md mb-5 '>
    {/* menu */}
    <div className='flex items-center gap-5 '>
      <Link href={"/"}><h2 className='cursor-pointer hover:text-orange-400' >Home</h2></Link>
       
      <Link href={"/about"}>
      <h2 className='cursor-pointer hover:text-orange-400'>About</h2>

      </Link> 
    </div>
    {/* logo and dark/light mode */}
    <div className='flex items-center gap-5'>
    <SwitchMode/>
    <Link href={"/"}>
    <div className='flex items-center '>
        <span className='bg-orange-400 text-white rounded-md p-2 font-semibold'>IMDB</span>
        <p className='dark:text-white text-black font-semibold '>Clone</p>
    </div>
    </Link>
    
    </div>
   </div>
  )
}
