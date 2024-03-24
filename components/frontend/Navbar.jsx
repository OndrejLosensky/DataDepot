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

  const scrollToSection = (id, offset) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === 'b') {
        const label = document.querySelector('.cursor-pointer');

        if (label) {
          // Simulates a click on the label
          label.click();
        }
      }
    };

    // Adds event listener when component mounts
    document.addEventListener('keydown', handleKeyDown);

    // Removes event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures this effect runs only once when component mounts


  return (
    <div className={`navbar ${isScrolled ? 'bg-base-300 duration-200': 'bg-transparent duration-200 mt-8 ' } opacity-95 sticky top-0`}>
      <div className="navbar-start ml-32 hover:cursor-pointer" onClick={scrollToTop}>
        <FaWarehouse className='w-10 text-gray-100 mr-2 h-auto'/>
        <h2 className='text-2xl pt-2 text-gray-200'> DataDepot </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" items-center flex flex-row gap-x-10 px-1 mr-32">
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/frontend/docs">Docs</Link></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><a onClick={() => scrollToSection('Discover', 100)}>Features</a></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><a onClick={() => scrollToSection('QA', 0)}> Q&A</a></li>
          {/* 
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/blog">Blog</Link></li>
          <li className='hover:text-gray-100 duration-200 underline-effect hover:no-underline'><Link href="/pricing">Pricing</Link></li>
          */}
        </ul>
      </div>
      <div className="navbar-end">
        <ul>
          <button> <Link className='px-4 py-2 hover:bg-gray-700 duration-300 rounded-md mr-2' href="/auth/login">Log In</Link> </button>
          <button> <Link className='px-4 py-2 transform ease-in-out transform:scale-105 bg-primary rounded-md text-gray-900 mr-8' href="/auth/register">Sign up</Link> </button>
        </ul>
        <label className="cursor-pointer grid place-items-center mr-24">
          <input type="checkbox" value="light" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
      </div>
    </div>
  )
}

export default Navbar;
