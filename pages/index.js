import React, { useState } from 'react';
import Footer from '../components/frontend/Footer';
import Head from 'next/head';
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
            <Footer />
        </main>
    );
}

export default LandingPage;

