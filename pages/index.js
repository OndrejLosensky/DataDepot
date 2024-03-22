import '../src/app/globals.css';
import 'daisyui/dist/full.css';
import '../src/app/scrollbar.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/home/Home';
import Footer from '../components/Footer';
import WhyChoose from '../components/home/WhyChoose';
import About from '../components/home/About'
import Hero from '../components/home/Hero';
import WhatIs from '../components/home/WhatIs';
import Head from 'next/head';
import TechStack from '../components/home/TechStack';

function LandingPage (){
    return (
        <main className='max-w-screen'>
            {/* <meta> data */}
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>DataDepot</title>
            </Head>

            <Navbar/>
            <Home/>
            <WhatIs/>
            <WhyChoose/>
            <TechStack/>
            <About/>
            <Footer/>
            
        </main>
    )
}

export default LandingPage;