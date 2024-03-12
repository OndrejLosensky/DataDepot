import '../src/app/globals.css';
import 'daisyui/dist/full.css';
import '../src/app/scrollbar.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import WhyChoose from '../components/home/WhyChoose';
import About from '../components/home/About'
import Hero from '../components/home/Hero';
import WhatIs from '../components/home/WhatIs';

function LandingPage (){
    
    return (
        <main>
            {/* <meta> data */}
             <Helmet>
                <title>DataDepot</title>
                <link rel="icon" href="favicon.svg" />
            </Helmet>

            {/* Homepage components */}
            <Navbar/>
            <Hero/>
            <WhatIs/>
            <WhyChoose/>
            <About/>
            <Footer/>
        </main>
    )
}

export default LandingPage;