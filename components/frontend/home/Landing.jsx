import React, {useState} from 'react'
import { IoPricetagOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
import WhyChoose from './About';
import HomeV2 from './HomeV2';
import Pricing from '../pricing/Pricing'; 
import FeatureCard from '../home/FeatureCard';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { BsDash } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Link from 'next/link';
import { CiLock } from "react-icons/ci";
import Image from 'next/image';

export function Video() {
  return (
    <video width="700" height="550" controls className='mx-auto my-6 border border-gray-400 rounded-xl shadow-lg'>
      <source src="/datadepotV1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

const Landing = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  useEffect(() => {
    AOS.init({duration: "1500" });
  },[])

  const scrollToAnchor = (id) => {
    const element = document.getElementById(id);
    const offset = 120; 
  
    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='max-w-screen h-auto min-h-screen overflow-x-hidden'>
      {/* Hero */}
      <HomeV2/>

       {/* Features */}
      <section id='features' className="w-full overflow-x-hidden h-auto mt-36 p-6 text-center">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className=' text-md text-purple-500 font-semibold'> Featuring</h1>
          {/*
          <span className="relative z-10 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-violet-400 to-blue-500">
            Efficient & Secure: Smart way to store files
          </span>
           */}
          <span className="relative z-[0] md:text-3xl lg:text-4xl sm:text-2xl   font-black text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-rose-300  to-violet-300">
            Efficient & Secure: Smart way to store files
          </span>
          <p className="mt-2 mb-2 text-lg text-text">
            Discover many key features DataDepot provides that differ from other apps
          </p>
  
          <div className="mt-12 mb-32 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
            <FeatureCard hovered={hovered1} setHovered={setHovered1} icon={IoPricetagOutline} heading="Labeling system" description="Create custom label for the file cards, filter them by names, change the tags, group them." />
            <FeatureCard hovered={hovered2} setHovered={setHovered2} icon={FaRegFolder} heading="Folder system" description="DataDepot supports foldering system for your passwords and files. You can create as many folders you want." />
            <FeatureCard hovered={hovered3} setHovered={setHovered3} icon={CiLock} heading="Password Generator" description="Dont know any password to think of for your important apps? Generate it inside the Password Manager" />
          </div>
        </div>
      </section>
      
       {/* Features - Extended */}
      <section className='mb-[200px] overflow-hidden '>
        <div className="mx-auto max-w-6xl space-y-24 md:space-y-36">
          <div data-aos='fade-up' className="flex flex-col items-center justify-between gap-6 lg:flex-row m-4">
            <div className="max-w-md space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border-2 border-indigo-200 bg-indigo-200 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm">
                <MdOutlineDashboardCustomize className="mr-1 h-5 w-5" />
                Dashboard
              </span>
              <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                Simple UI
              </h3>
              <p className="text-lg text-gray-300 font-medium">
                Simple modern dashboard made to be easily accessible to anyone. Quickly browse through files, create tags, folders. Export anything or just preview files.
              </p>
            </div>
  
            <div className="max-w-lg">
              <Image
                height={100}
                width={100}
                src="/sidebarHidden.svg"
                alt="Screenshot"
                className="w-full"
              />
            </div>
          </div>
  
          <div data-aos='fade-up'  className="flex flex-col items-center justify-between gap-6 lg:flex-row-reverse">
            <div className="max-w-md space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border-2 border-violet-200 bg-violet-200 px-2 py-1 text-sm font-semibold text-violet-600 shadow-sm">
                <IoSettingsOutline className="mr-1 h-5 w-5" />
                Settings
              </span>
              <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                Adjust for your needs
              </h3>
              <p className="text-lg text-gray-300 font-medium">
                Choose from few profile avatars (there will be more later), edit personal info such as name, change or recover password. You can also delete account
              </p>
            </div>
  
            <div className="max-w-lg">
              <Image
                height={100}
                width={100}
                src="/settings.svg"
                alt="Showcase image"
                className="w-full"
              />
            </div>
          </div>
  
          <div data-aos='fade-up'  className="flex flex-col items-center justify-between gap-6 lg:flex-row m-4">
            <div className="max-w-md space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border-2 border-cyan-200 bg-cyan-200 px-2 py-1 text-sm font-semibold text-cyan-700 shadow-sm">
                <IoAnalyticsOutline className="mr-1 h-5 w-5" />
                Analytics
              </span>
              <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                Simple statistics
              </h3>
              <p className="text-lg text-gray-300 font-medium">
                Who wouldnt be exited to see how many files he opened in the past work week. Or maybe how many files have been uploaded. See many interesting anylytics next to the settings tab
              </p>
            </div>
  
            <div className="max-w-lg">
              <Image
                height={100}
                width={100}
                src="/sidebarVisible.svg"
                alt="Showcase"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing options */}
      <section id='pricing'  className='mt-64'>
        <Pricing/>
      </section>

       {/* Pricing - Extended */}
      <section data-aos='fade-up'  className='max-w-screen overflow-y-hidden overflow-x-hidden  h-[800px] mb-[250px]'>
      <div className="z-[-1] flex place-items-center before:dark:bg-gradient-to-br before:dark:from-blue-500 before:dark:to-purple-500 before:dark:opacity-[25%] before:absolute before:h-[160px] before:w-full sm:before:w-[350px] before:translate-x-[400px] before:translate-y-[250px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-2xl after:content-['']  after:dark:from-rose-800 after:dark:via-blue-200 after:dark:opacity-100"></div>

        <h1 className=' text-md text-purple-500 font-semibold mt-48 text-center'> Pricing comparison</h1>
        <h1 className='text-3xl font-bold text-gray-200 text-center mb-2'> What you can get in each plan </h1>
        <p className='mx-auto mb-16 md:w-1/3 sm:2/3  text-center text-gray-400'> Below is an table with complete list of included features in each plan. Make sure to check what plan suits you the best.</p>
        
        <div className='sm:w-[80%] md:w-[65%] mx-auto flex flex-row'>
            <div className='w-1/4'>
                <div className='h-24'> 
                </div>
                <div className='space-y-4 text-gray-200 font-light'>
                  <p className='border-b-[1px] border-gray-400 pb-2 font-bold'>Features</p>
                  <p className='border-b-[0.5px] border-gray-400 pb-2 '>All file types</p>
                  <p className='border-b-[0.5px] border-gray-400 pb-2 '>Label colors</p>
                  <p className='border-b-[0.5px] border-gray-400 pb-2 '>Support 24/7</p>
                  <p className='border-b-[0.5px] border-gray-400 pb-2 '>10GB storage</p>
                  <p className='border-b-[0.5px] border-gray-400 pb-2 '>Generative AI</p>
              </div>
              </div>
            <div className='w-1/4'>
              <div className='text-center h-24 pt-2'>
                <p className='text-3xl text-gray-200 font-semibold'>Free</p>
                <p> For beginners </p>
              </div>
              <div className='flex items-center justify-center border-b-[1px] border-gray-400 pt-4 pb-4'>

              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>  
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <BsDash className='w-4 h-4 text-gray-400'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <BsDash className='w-4 h-4 text-gray-400'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <BsDash className='w-4 h-4 text-gray-400'/>
              </div>
            </div>
            <div className='w-1/4'>
              <div className='text-center h-24 pb-8 pt-2'>
                <p className='text-3xl text-gray-200 font-semibold'>Basic</p>
                <p> Basic version </p>
              </div>
              <div className='flex items-center justify-center border-b-[1px] border-gray-400 pt-4 pb-4'>

              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>  
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <BsDash className='w-6 h-4 text-gray-400'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <BsDash className='w-4 h-4 text-gray-400'/>
              </div>
            </div>
            <div className='w-1/4'>
              <div className='text-center h-24 pt-2'>
                <p className='text-3xl text-gray-200 font-semibold'>Pro</p>
                <p> For proffesionals</p>
              </div>
              <div className='flex items-center justify-center border-b-[1px] border-gray-400 pt-4 pb-4'>

              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>
              </div>
              <div className='flex items-center justify-center border-b-[0.5px] border-gray-400 pt-4 pb-4'>
                <FaCheck className='w-4 h-4 text-cyan-500'/>
              </div>
            </div>
        </div>
        
        {/*
        <div className='w-[60%] mx-auto mt-48 flex flex-row justify-between'>
          <p className='text-lg text-gray-200 font-semibold w-32'> Features </p>
          <p className='text-lg'> Free</p>
          <p className='text-lg'> Basic</p>
          <p className='text-lg'> Pro</p>
        </div>
        <div className='border-b-[0.2px] my-3 border-gray-500 w-[60%] mx-auto'></div>
        <div className='w-[60%] mx-auto flex flex-row items-center justify-between'>
          <p className='text-lg text-gray-200 w-32 font-light '>Unlimited labels</p>
          <FaCheck className='w-5 h-5 text-lime-400'/>
          <FaCheck className='w-5 h-5 text-lime-400'/>
          <FaCheck className='w-5 h-5 text-lime-400'/>
        </div>
        <div className='border-b-[0.2px] my-3 border-gray-500 w-[60%] mx-auto'></div>
        <div className='w-[60%] mx-auto flex flex-row items-center justify-between'>
          <p className='text-lg text-gray-200 w-32 font-light'>Support 24/7</p>
          <BsDash className='w-5 h-5 text-gray-400'/>
          <FaCheck className='w-5 h-5 text-lime-400'/>
          <FaCheck className='w-5 h-5 text-lime-400'/>
        </div>
        <div className='border-b-[0.2px] my-3 border-gray-500 w-[60%] mx-auto'></div>
        <div className='w-[60%] mx-auto flex flex-row items-center justify-between'>
          <p className='text-lg text-gray-200 w-32 font-light'>Folders</p>
          <BsDash className='w-5 h-5 text-gray-400'/>
          <FaCheck className='w-5 h-5 text-lime-400'/>
          <FaCheck className='w-5 h-5 text-lime-400'/>
        </div>
        <div className='border-b-[0.2px] my-3 border-gray-500 w-[60%] mx-auto'></div>
        <div className='w-[60%] mx-auto flex flex-row items-center justify-between'>
          <p className='text-lg text-gray-200 w-32 font-light'>Exporting</p>
          <BsDash className='w-5 h-5 text-gray-400'/>
          <BsDash className='w-5 h-5 text-gray-400'/>
          <FaCheck className='w-5 h-5 text-lime-400'/>
        </div>
        <div className='border-b-[0.2px] my-3 border-gray-500 w-[60%] mx-auto'></div>
      */}
      </section>

       {/* Q & A */}
      <section id='questions'>
      <WhyChoose/>     
      </section>

       {/* Demov video */}
      <section id='demo' className='mb-32 m-8'>
      <p className='text-center text-xl text-[#a554f1] pt-12'>demo</p>
      <h1 className='text-3xl font-bold text-gray-300 text-center'> Learn more by watching how everything looks & works</h1>
          <Video/>
      </section>

       {/* Join section */}
      <div id='join' className='max-h-1/2 overflow-x-hidden '>
        <div className="z-[-1] flex place-items-center before:dark:bg-gradient-to-br before:dark:from-blue-400 before:dark:to-violet-500 before:dark:opacity-[20%] before:absolute before:h-[300px] before:w-full sm:before:w-[500px] before:translate-x-[380px] before:translate-y-[70px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-2xl after:content-['']  after:dark:from-rose-800 after:dark:via-blue-200 after:dark:opacity-100 "></div>

          <section className='text-center mb-48 pt-32 justify-center flex flex-col'>
            <h1 className='md:text-3xl sm:text-2xl font-black text-[#DFDFDF]'> Join DataDepot blog to see all news.</h1>
            <p className='md:text-lg  sm:text-md w-2/5 mx-auto my-8 text-gray-300 font-thin'>  Stay up to date with new releases, updates and changes. Also you can follow me on my Github to see more apps like this. It is completely free to do it. </p>
            <div className='flex flex-row items-center justify-center gap-x-4'>
              <Link className='py-2 px-6 rounded-full bg-gray-300 text-gray-800 hover:-translate-y-1 duration-300 hover:bg-gray-200 shadow-lg' href="/frontend/blog"> Join the Blog </Link>
              <button className='flex flex-row py-2 text-gray-300 hover:text-gray-100 duration-200 items-center' onClick={() => scrollToAnchor('demo')}> See the Demo  <FaArrowRightLong className='w-6 h-4 ml-2'/> </button>
            </div>
        </section>
      </div>

    </div>
  )
}

export default Landing