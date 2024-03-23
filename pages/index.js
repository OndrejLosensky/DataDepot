import '../src/app/globals.css';
import 'daisyui/dist/full.css';
import '../src/app/scrollbar.css';
import React from 'react';
import Navbar from '../components/frontend/Navbar';
import Home from '../components/frontend/home/Home';
import Footer from '../components/frontend/Footer';
import WhyChoose from '../components/frontend/home/WhyChoose';
import About from '../components/frontend/home/About'
import WhatIs from '../components/frontend/home/WhatIs';
import Head from 'next/head';
import TechStack from '../components/frontend/home/TechStack';

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