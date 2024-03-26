import React, { useState, useEffect } from 'react';
import Home from '../components/frontend/home/Home';
import Footer from '../components/frontend/Footer';
import WhyChoose from '../components/frontend/home/WhyChoose';
import About from '../components/frontend/home/About';
import WhatIs from '../components/frontend/home/WhatIs';
import Head from 'next/head';
import TechStack from '../components/frontend/home/TechStack';
import ThemeController from '../components/ThemeController';
import { lightTheme, darkTheme } from '../src/app/themes';
import Link from 'next/link';
import { FaWarehouse } from "react-icons/fa";

function LandingPage (){
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    };

    return (
        <main className='max-w-screen'>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>DataDepot</title>
            </Head>

            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <Home isDarkMode={isDarkMode} />
            <WhatIs isDarkMode={isDarkMode} />
            <WhyChoose />
            <TechStack />
            <About />
            <Footer />
            
        </main>
    );
}

export default LandingPage;

function Navbar ({ isDarkMode, toggleTheme }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentSection, setCurrentSection] = useState(null);

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
  
      const handleKeyDown = (event) => {
        if (event.metaKey && event.key === 'b') {
          const label = document.querySelector('.cursor-pointer');
  
          if (label) {
            // Simulates a click on the label
            label.click();
          }
        }
      };
  
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [currentSection]);


    return (
      <div className={`navbar ${isScrolled ? `${ isDarkMode ? 'bg-[#111212]':'bg-[#aea9b5]'} duration-200`: `${ isDarkMode ? 'bg-transparent mt-8':`bg-[#f4f4f4]`} duration-200` } opacity-95 sticky top-0`}> {/*  Chybí mt-8 u druhého isDarkMode*/}
        <div className="navbar-start ml-32 hover:cursor-pointer" onClick={scrollToTop}>
          <FaWarehouse className={`w-10 mr-2 h-auto ${isDarkMode ? 'text-[#DFDFDF]':'text-[#222222]'}`}/>
          <h2 className={`text-2xl pt-2 ${isDarkMode ? 'text-[#DFDFDF]':'text-[#222222]'}`}> DataDepot </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`items-center flex flex-row gap-x-6 px-1 mr-32 ${isDarkMode ? 'text-[#DFDFDF]':'text-[#5c5c5c]'}`}>
            <li className={`duration-200 ${isDarkMode ? 'hover:text-[#f4f4f4] underline-effect hover:no-underline':'hover:text-[#000000] underline-effect-dark hover:no-underline'}`}><Link href="/frontend/docs">Documentation</Link></li>
            <li className={`duration-200 ${isDarkMode ? 'hover:text-[#f4f4f4] underline-effect hover:no-underline':'hover:text-[#000000] underline-effect-dark hover:no-underline'}`}><Link href="/frontend/pricing">Pricing</Link></li>
            <li className={`duration-200 ${isDarkMode ? 'hover:text-[#f4f4f4] underline-effect hover:no-underline':'hover:text-[#000000] underline-effect-dark hover:no-underline'}`}><Link href="/frontend/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul>
            <button> <Link className={`px-4 py-2 duration-300 ${isDarkMode ? 'text-[#DFDFDF]':'text-[#5c5c5c] hover:bg-[#c6c6c6]'} rounded-md mr-2`} href="/auth/login">Log In</Link> </button>
            <button> <Link className={`px-4 py-2  bg-[#428DFF] rounded-md text-[#DFDFDF] mr-8`} href="/auth/register">Sign up</Link> </button>
          </ul>
          <ThemeController toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        </div>
      </div>
    )
}
