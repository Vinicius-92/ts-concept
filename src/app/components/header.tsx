'use client'
 
import { useState } from 'react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleDiv = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="bg-ts-gray h-52 mys-0">
        <div className="relative w-screen flex justify-center">
            <img src="logo-bg-header.png" className="z-0 min-w-[1000px] hidden lg:block"/>
            <img src="logo.png" className="my-2 min-w-[250px] mx-auto z-10 absolute mt-10 lg:mt-4" alt="Logo da Rede TS Pneus" />
        </div>
        <div className="justify-center mt-4 gap-5 --font-saira-bold font-thin text-2xl hidden lg:flex">
            <a href="" className='hover:bg-black pl-4 pr-4 pt-2 pb-2 rounded-md'>OFERTAS</a>
            <a href="" className='hover:bg-black pl-4 pr-4 pt-2 pb-2 rounded-md'>QUEM SOMOS</a>
            <a href="" className='hover:bg-black pl-4 pr-4 pt-2 pb-2 rounded-md'>LOJAS</a>
        </div>
        <button id="menu-toggle" onClick={toggleDiv}  className="text-white lg:hidden absolute z-20 right-0">
          <svg className="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path  d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

      {isVisible && (
        <div className='absolute right-3 z-10'>
          <div id="mobile-menu" className="flex-col bg-black rounded-lg space-y-2 mt-10 mr-6 flex right-0 text-center text-2xl w-44 p-2">
            <a href="#" className="text-white hover:bg-white/10 w-full rounded-sm">OFERTAS</a>
            <a href="#" className="text-white hover:bg-white/10 w-full rounded-sm">QUEM SOMOS</a>
            <a href="#" className="text-white hover:bg-white/10 w-full rounded-sm">LOJAS</a>
          </div>
        </div>)}
    </div>
  );
}