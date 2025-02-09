'use client';
import { useTheme } from 'next-themes';
import React from 'react'
import { MdOutlineDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from "react-icons/md";

export default function SwitchMode() {
    const {theme,setTheme,systemTheme}=useTheme();
    const currentTheme=theme==='system'?systemTheme:theme;
  return (
    <div>
  {
    currentTheme==="dark"?
    
        <MdOutlineLightMode className='size-6 cursor-pointer' onClick={()=>{
            setTheme("light")
        }} />
    :
    
        <MdOutlineDarkMode className='size-6 cursor-pointer' onClick={()=>{
            setTheme("dark")
        }}/>
    
  }
    </div>

  )
}
