import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoDark from './layout/LogoDark';
import LogoLight from './layout/LogoLight';
import { FaWarehouse } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'bg-base-300 duration-200': 'bg-transparent duration-200 mt-8 ' } opacity-95 sticky top-0`}>
      <div className="navbar-start ml-32 hover:cursor-pointer" onClick={scrollToTop}>
        <FaWarehouse className='w-10 text-gray-100 mr-2 h-auto'/>
        <h2 className='text-2xl pt-2 text-gray-200'> DataDepot </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" items-center flex flex-row gap-x-10 px-1 mr-32">
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/docs">Docs</Link></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/docs">Get started</Link></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/contact">Contact</Link></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/contact">Blog</Link></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/contact">Pricing</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul>
          <button> <Link className='px-4 py-2 hover:bg-gray-700 duration-300 rounded-md mr-2' href="/auth/login">Log In</Link> </button>
          <button> <Link className='px-4 py-2 transform ease-in-out transform:scale-105 bg-primary rounded-md text-gray-900  mr-32' href="/auth/register">Sign up</Link> </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
