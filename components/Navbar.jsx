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
      <div className="navbar-start ml-8 hover:cursor-pointer" onClick={scrollToTop}>
        <FaWarehouse className='w-10 mr-2 h-auto'/>
        <h2 className='text-2xl pt-2 text-gray-200'> DataDepot </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/docs">Docs</Link></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/docs">Get started</Link></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul>
          <button> <Link className='btn btn-ghost mr-4' href="/auth/login">Login</Link> </button>
          <button> <Link className='btn btn-primary mr-8' href="/auth/register">Sign up</Link> </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
