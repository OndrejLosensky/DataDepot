import React, { useState, useEffect } from 'react';
import Home from '../components/frontend/home/Home';
import Footer from '../components/frontend/Footer';
import WhyChoose from '../components/frontend/home/WhyChoose';
import About from '../components/frontend/home/About';
import WhatIs from '../components/frontend/home/WhatIs';
import Head from 'next/head';
import TechStack from '../components/frontend/home/TechStack';
import Navbar from '../components/frontend/Navbar';

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

