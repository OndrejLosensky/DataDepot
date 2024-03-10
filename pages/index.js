import '../src/app/globals.css';
import 'daisyui/dist/full.css';
import PrelineScript from '../components/PrelineScript';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Homepage from '../components/Homepage';
import GetStarted from '../components/GetStarted';
import Preview from '../components/Preview';
import Contact from '../components/Contact';

function LandingPage (){
    
    return (
        <main>
            {/* <meta> data */}
             <Helmet>
                <title>DataDepot</title>
                <link rel="icon" href="favicon.ico" />
            </Helmet>

            {/* Navbar + hero page */}
            <Navbar/>
            <Homepage/>

            {/* Get started page + all content on main page */}
            <GetStarted/>
            <Preview/>
            <Contact/>

            {/* Footer + PrelineUI script for components */}
            <Footer/>
            <PrelineScript/>
        </main>
    )
}

export default LandingPage;