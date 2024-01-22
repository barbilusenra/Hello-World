'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiSolidMessageRounded } from "react-icons/bi";

const Footer = () => {

  const pathname = usePathname();

  return (
   <footer>
     <div className={`${pathname.includes("/chat") && "hidden"} bg-gradient-to-r from-orange-500 to-pink-600  w-full p-10 flex items-center justify-end`}>
              <div className='mr-[15px]'>
                <a className='flex items-center gap-2 text-white tracking-wide font-bold'> HelloWorld <BiSolidMessageRounded /></a> 
                <p className='text-white font-extralight items-center flex tracking-wide'>                   
                  All Rights Reserved
                </p> 
              </div>
            </div>
   </footer>
  )
}

export default Footer