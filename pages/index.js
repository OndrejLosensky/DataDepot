import React, { useState, useEffect } from 'react';
import HomeV2 from '../components/frontend/home/HomeV2';
import Footer from '../components/frontend/Footer';
import WhyChoose from '../components/frontend/home/WhyChoose';
import About from '../components/frontend/home/About';
import WhatIs from '../components/frontend/home/WhatIs';
import Head from 'next/head';
import TechStack from '../components/frontend/home/TechStack';
import Navbar from '../components/frontend/Navbar';
import Landing from '../components/frontend/home/Landing';

function LandingPage (){
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    };

    return (
        <main className='max-w-screen overflow-x-hidden'>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>DataDepot</title>
            </Head>
            <div className='fixed top-0 w-screen z-10'>
                <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
            
            <Landing/>
            {/* 
            <WhatIs isDarkMode={isDarkMode} />
            <WhyChoose />
            <TechStack />
            <About />
            */ }
            <Footer />
            
        </main>
    );
}

export default LandingPage;

