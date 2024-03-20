import React from "react";
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-screen'>
          <div class="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:translate-x-[1400px] before:translate-y-[120px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-40 after:dark:from-blue-400 after:dark:via-pink-500 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>

          <div className='max-w-screen flex flex-col justify-center text-center items-center'>
          
          <div class="flex place-items-center before:absolute before:h-[850px] before:w-full sm:before:w-[480px] before:translate-x-[-850px] before:translate-y-[550px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>


            <h2 className='pt-32 text-5xl text-center font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text shadow-glow'>
              Store your files efficiently
            </h2>
          


            <p className='text-gray-400 text-lg pt-12 text-wrap w-1/4'>
              DataDepot is the ultimate platform for effortlessly storing and organizing  your files. Have control over it!
            </p>
            <button className="mt-8 px-8 py-2 rounded-full border-2 border-blue-500">
              <span className="flex items-center uppercase font-thin text-gray-400 hover:text-gray-200 duration-300 ">
                  Get started now!
              </span>
            </button>
            <p className="text-sm pt-2 font-extralight">
              Available for free
            </p>


            <div class="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[580px] before:translate-x-[350px] before:translate-y-[800px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>



            <div className=''>
            <Image
              src="/editor.png"
              alt="Code editor mockup image"
              width={1200}
              height={0}
              className='max-w-screen max-h-screen py-16 mb-16'
            />
            </div>


          </div>
        </div>
    </section>
    
  );
};

export default Hero;
