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
    <div className='max-w-screen min-h-screen'>
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
      <section className="w-full h-screen mt-12 p-6 text-center">
        <div className="mx-auto w-full max-w-6xl">
          <span className="leading-sm inline-flex items-center rounded-full border-2 border-purple-200 bg-purple-200 px-2 py-0.5 text-xs font-bold uppercase text-purple-600 shadow-sm">
            <FaRegLightbulb  className="mr-1 h-5 w-5" />
            Features
          </span>
          <h2 className="mx-auto mt-4 text-center text-3xl font-semibold tracking-tight text-gray-200 md:max-w-2xl md:text-4xl">
            Simplicity is key. Elevate your copy with a simple design.
          </h2>
          <p className="mt-6 text-lg text-text">
            Here is a section with two features or points and a subheading.
          </p>
  
          <div className="mt-20 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
            <FeatureCard hovered={hovered1} setHovered={setHovered1} icon={IoSunny} heading="Feature 01" />
            <FeatureCard hovered={hovered2} setHovered={setHovered2} icon={IoShieldCheckmarkOutline} heading="Feature 02" />
            <FeatureCard hovered={hovered3} setHovered={setHovered3} icon={FaBell} heading="Feature 03" />
          </div>
        </div>
      </section>


      <section className="">
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

      <section className='my-48'>
        <Pricing/>
      </section>


      <section className="p-8">
      <div className="rounded-2xl bg-[#2b333b] shadow-lg mx-auto flex max-w-6xl flex-col items-center text-center py-8">
        <span className="inline-flex items-center rounded-full border-2 border-pink-200 bg-pink-200 px-2 py-1 text-sm font-semibold text-pink-600 shadow-sm">
          <RxLightningBolt className="mr-1 h-5 w-5" />
          Free Forever
        </span>

        <h2 className="mt-6 text-gray-200 text-3xl font-semibold md:text-4xl">
          Try it today, no credit card required!
        </h2>

        <p className="mt-4 font-light text-gray-300 text-lg">
         Totally free forever. Pro plan comes with additional functions.
        </p>

        <a
          href="#"
          className="mt-6 flex items-center space-x-4 text-lg font-medium"
        >
          <span className="bg-gradient-to-r text-gradient gradient-dusk">
            Explore NoteBliss Interface
          </span>
          < FaArrowRightLong  className="ml-2 h-6 w-6" />
        </a>
      </div>
      </section>

      <WhyChoose/>

      <section className='text-center mb-24 pt-32 justify-center flex flex-col'>
          <h1 className='text-3xl font-black text-[#DFDFDF]'> Join DataDepot blog to see all news.</h1>
          <p className='text-lg w-2/5 mx-auto my-8 text-gray-300 font-thin'>  Stay up to date with new releases, updates and changes. Also you can follow me on my Github to see more apps like this. It is completely free to do it. </p>
          <div className='flex flex-row items-center justify-center gap-x-4'>
            <button className='py-2 px-4 rounded-lg bg-gray-300 text-gray-800 hover:-translate-y-1 duration-300 hover:bg-gray-200 shadow-lg'>See my Github </button>
            <button className='py-2 px-4 rounded-lg bg-gray-300 text-gray-800 hover:-translate-y-1 duration-300 hover:bg-gray-200 shadow-lg'> Join the Blog</button>
            <button className='flex flex-row py-2 text-gray-300 hover:text-gray-100 duration-200 items-center'> See the Demo  <FaArrowRightLong className='w-6 h-4 ml-2'/> </button>
          </div>
      </section>

    </div>
  )
}

export default Landing