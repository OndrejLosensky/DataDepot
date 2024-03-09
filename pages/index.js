import '../src/app/globals.css';
import 'daisyui/dist/full.css';
import PrelineScript from '../components/PrelineScript';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Homepage from '../components/Homepage';

function LandingPage (){
    
    return (
        <main>
             <Helmet>
                <title>DataDepot</title>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
            <Navbar/>
            <Homepage/>
            <Footer/>
            <PrelineScript/>
        </main>
    )
}

export default LandingPage;