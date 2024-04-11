import React, {useState} from 'react'
import { IoPricetagOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RxLightningBolt } from "react-icons/rx";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import Image from 'next/image'
import WhyChoose from './About';
import HomeV2 from './HomeV2';
import Pricing from '../pricing/Pricing'; 
import FeatureCard from '../home/FeatureCard';

const Landing = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <div className='max-w-screen h-auto min-h-screen overflow-x-hidden'>
      <HomeV2/>

      {/* 
      <section className="py-12 h-screen px-8 md:py-36 xl:px-0">
        <div className="mx-auto max-w-6xl space-y-8 md:space-y-16">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-8 text-center lg:px-8">
            <h1 className="text-6xl font-bold">
              <span className="text-gradient-to-r text-gray-200 from-red-500 to-green-400 text-clip">
                Experience DataDepot: Your All-in-One Document Management Solution
              </span>
            </h1>
            <p className="text-lg font-thing text-gray-300 md:max-w-3xl">
              Simplify document management with DataDepot. Effortlessly store, organize, and access your documents from anywhere. Whether you're a student, professional, or business owner, DataDepot streamlines your workflow and boosts productivity.
            </p>
            
          </div>
          <Image src="/homepage.svg" height={400} width={1300} alt='Showcase image' className='mb-36 rounded-xl boeder border-gray-500 shadow-lg'/>
        </div>
      </section>
      */}
      <section id='features' className="w-full h-screen mt-12 p-6 text-center">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className=' text-md text-purple-500 font-semibold'> Featuring</h1>
          {/*
          <span className="relative z-10 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-violet-400 to-blue-500">
            Efficient & Secure: Smart way to store files
          </span>
           */}
          <span className="relative z-10 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-rose-300  to-violet-300">
            Efficient & Secure: Smart way to store files
          </span>
          <p className="mt-2 mb-2 text-lg text-text">
            Discover many key features DataDepot provides that differ from other apps
          </p>
  
          <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
            <FeatureCard hovered={hovered1} setHovered={setHovered1} icon={IoSunny} heading="Feature 01" />
            <FeatureCard hovered={hovered2} setHovered={setHovered2} icon={IoShieldCheckmarkOutline} heading="Feature 02" />
            <FeatureCard hovered={hovered3} setHovered={setHovered3} icon={FaBell} heading="Feature 03" />
          </div>
        </div>
      </section>


      <section>
        <div className="mx-auto max-w-6xl space-y-24 md:space-y-36">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row ">
            <div className="max-w-md space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border-2 border-red-200 bg-red-200 px-2 py-1 text-sm font-semibold text-red-600 shadow-sm">
                <IoPricetagOutline className="mr-1 h-5 w-5" />
                Features
              </span>
              <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                Lorem ipsum dolor sit amet, consectetur
              </h3>
              <p className="text-lg text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, non
                nulla iaculis lacus mi. Eu fusce pellentesque mattis ultricies
                mauris orci, commodo.
              </p>
            </div>
  
            <div className="max-w-lg">
              <img
                src="https://i.imgur.com/5JzWVvz.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
  
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row-reverse">
            <div className="max-w-md space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm">
                <IoShieldCheckmarkOutline className="mr-1 h-5 w-5" />
                Features
              </span>
              <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                Lorem ipsum dolor sit amet, consectetur
              </h3>
              <p className="text-lg text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, non
                nulla iaculis lacus mi. Eu fusce pellentesque mattis ultricies
                mauris orci, commodo.
              </p>
            </div>
  
            <div className="max-w-lg">
              <img
                src="https://i.imgur.com/5JzWVvz.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
  
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row ">
            <div className="max-w-md space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border-2 border-orange-200 bg-orange-200 px-2 py-1 text-sm font-semibold text-orange-600 shadow-sm">
                <IoPricetagOutline className="mr-1 h-5 w-5" />
                Features
              </span>
              <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                Lorem ipsum dolor sit amet, consectetur
              </h3>
              <p className="text-lg text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, non
                nulla iaculis lacus mi. Eu fusce pellentesque mattis ultricies
                mauris orci, commodo.
              </p>
            </div>
  
            <div className="max-w-lg">
              <img
                src="https://i.imgur.com/5JzWVvz.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id='pricing' className='my-48'>
        <Pricing/>
      </section>


      <section className='w-screen h-[700px] flex flex-row' >
         <div className='w-[60%] [h-90%] bg-gradient-to-br mr-20 from-cyan-500 to-green-500 '></div>
         <div className='w-[40%] justify-center h-full flex flex-col'>
          <h1 className=' text-md text-purple-500 font-semibold'> AI Model</h1>
          <h2 className='text-3xl text-gray-100 font-bold pb-4'> Introducing new AI model: DataAI</h2>
          <p className='w-[80%] text-gray-300 pb-10'> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            <div className='flex flex-row space-x-16 pb-8 pt-4'>
              <div className='flex flex-col border-l border-gray-200 pl-8 space-y-4 py-1'> 
                  <p className='text-2xl text-gray-100 fond-bold'> AI Model V1 </p>  
                  <p> Simple model</p>
              </div>
              <div className='flex flex-col border-l border-gray-200 pl-8 space-y-4 py-1'> 
                  <p className='text-2xl text-gray-100 fond-bold'> AI Model V1 </p>  
                  <p> Simple model</p>
              </div>
            </div>
            <div className='flex flex-row space-x-16'>
              <div className='flex flex-col border-l border-gray-200 pl-8 space-y-4 py-1'> 
                  <p className='text-2xl text-gray-100 fond-bold'> AI Model V1 </p>  
                  <p> Simple model </p>
              </div>
              <div className='flex flex-col border-l border-gray-200 pl-8 space-y-4 py-1'> 
                  <p className='text-2xl text-gray-100 fond-bold'> AI Model V1 </p>  
                  <p> Simple model</p>
              </div>
            </div>
         </div>
      </section>

     <section id='questions'>
      <WhyChoose/>     
     </section>

      <div id='join' className='max-h-1/2'>
        <div className="z-[-1] flex place-items-center before:dark:bg-gradient-to-br before:dark:from-blue-400 before:dark:to-violet-500 before:dark:opacity-[20%] before:absolute before:h-[300px] before:w-full sm:before:w-[500px] before:translate-x-[380px] before:translate-y-[70px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-2xl after:content-['']  after:dark:from-rose-800 after:dark:via-blue-200 after:dark:opacity-100 "></div>

          <section className='text-center mb-48 pt-32 justify-center flex flex-col'>
            <h1 className='text-3xl font-black text-[#DFDFDF]'> Join DataDepot blog to see all news.</h1>
            <p className='text-lg w-2/5 mx-auto my-8 text-gray-300 font-thin'>  Stay up to date with new releases, updates and changes. Also you can follow me on my Github to see more apps like this. It is completely free to do it. </p>
            <div className='flex flex-row items-center justify-center gap-x-4'>
              <button className='py-2 px-4 rounded-lg bg-gray-300 text-gray-800 hover:-translate-y-1 duration-300 hover:bg-gray-200 shadow-lg'>See my Github </button>
              <button className='py-2 px-4 rounded-lg bg-gray-300 text-gray-800 hover:-translate-y-1 duration-300 hover:bg-gray-200 shadow-lg'> Join the Blog</button>
              <button className='flex flex-row py-2 text-gray-300 hover:text-gray-100 duration-200 items-center'> See the Demo  <FaArrowRightLong className='w-6 h-4 ml-2'/> </button>
            </div>
        </section>
      </div>

    </div>
  )
}

export default Landing