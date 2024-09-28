import React, { useEffect, useState } from 'react'
import MenuIcon from '../icons/MenuIcon'

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(true);
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 1024px)');
      setIsLgScreen(mediaQuery.matches); // Set initial value
      const handleResize = () => setIsLgScreen(mediaQuery.matches);
  
      mediaQuery.addListener(handleResize); // Update value on resize
      return () => mediaQuery.removeListener(handleResize); // Cleanup listener on unmount
    }, []);
  return (
    <div className='container pt-10 max-w-screen-xl mx-auto px-4'>
<nav className="flex-wrap lg:flex items-center justify-between mb-24 xl:mb-48">
  <div className="flex items-center mb-10 lg:mb-0">
    <img src="../image/navbar-logo.svg" alt="Logo" />
    <button className="w-10 h-10 lg:hidden ml-auto flex items-center justify-center text-indigo-800 border border-indigo-800 rounded-md" onClick={
       () =>  navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true)
    }>
    <MenuIcon/>
    </button>
  </div>
  <ul className={navbarOpen || isLgScreen ? "lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 mb-10 xl:mb-0" : 'hidden'} >
    <li className="font-medium text-gray-500 text-lg hover:text-indigo-800 transiton ease-in-out duration-300 mb-5 lg:mb-0">
      <a href="#">Services</a>
    </li>
    <li className="font-medium text-gray-500 text-lg hover:text-indigo-800 transiton ease-in-out duration-300 mb-5 lg:mb-0">
      <a href="#">Works</a>
    </li>
    <li className="font-medium text-gray-500 text-lg hover:text-indigo-800 transiton ease-in-out duration-300 mb-5 lg:mb-0">
      <a href="https://drive.google.com/file/d/1b3gUVAZ01hy5346P3XW2d4Ov9s15GzRk/view?usp=drive_link" target='_blank'>Get my CV</a>
    </li>
    <a href="mailto:ahmedmansourmohamed99@gmail.com" className="px-8 py-3 flex justify-center font-medium text-indigo-800 text-lg text-center border-2 border-indigo-800 rounded-md hover:bg-indigo-800 hover:text-white transiton ease-linear duration-300">
      Hire me
    </a>
  </ul>
</nav>

    </div>
  )
}
