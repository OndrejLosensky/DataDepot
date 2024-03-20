import '../src/app/globals.css';
import 'daisyui/dist/full.css';
import '../src/app/scrollbar.css';
import '../src/app/infiniteScroll.css';
//import '../src/app/IconsScroll.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyChoose from '../components/home/WhyChoose';
import About from '../components/home/About'
import Hero from '../components/home/Hero';
import WhatIs from '../components/home/WhatIs';
import InfiniteScroll from '../components/home/InfiniteScroll'
import Head from 'next/head';
//import IconsScroll from '../components/home/IconsScroll';


function LandingPage (){
    return (
        <main>
            {/* <meta> data */}
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>DataDepot</title>
            </Head>

            <Navbar/>
            <Hero/>
            <WhatIs/>
            <WhyChoose/>
            
            <div className='flex flex-col py-16 mb-32 bg-[#1e2228]'>
                <InfiniteScroll
                items={[
                    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Figma',
                    'Photoshop', 'Premiere Pro', 'Figma', 'Angular', 'Node JS'
                ]}
                speed={80} 
                />

                <InfiniteScroll
                items={[
                    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Figma',
                    'Photoshop', 'Premiere Pro', 'Figma', 'Angular', 'Node JS', 'Vue.js'
                ]}
                speed={60}
                />  

                <InfiniteScroll
                items={[
                    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Figma',
                    'Photoshop', 'Premiere Pro', 'Figma', 'Vue.js'
                ]}
                speed={100}
                />
            </div>

            <About/>
        
            <Footer/>
        </main>
    )
}

export default LandingPage;