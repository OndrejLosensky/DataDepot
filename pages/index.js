import '../src/app/globals.css';
import 'daisyui/dist/full.css';
import '../src/app/scrollbar.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyChoose from '../components/home/WhyChoose';
import About from '../components/home/About'
import Hero from '../components/home/Hero';
import WhatIs from '../components/home/WhatIs';
import Loading from '../components/Loading';
import VerticalEffect from '../components/home/VerticalEffect'
import Head from 'next/head';

function LandingPage (){
    
    return (
        <main>
            {/* <meta> data */}

            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>DataDepot</title>
            </Head>

            {/* Homepage components */}
            <Navbar/>
            <Hero/>
            <WhatIs/>
            <WhyChoose/>
            <About/>
            <VerticalEffect/>
            <Loading/>
            <Footer/>
        </main>
    )
}

export default LandingPage;