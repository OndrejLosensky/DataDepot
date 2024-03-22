import React from "react";
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-screen'>
          <div class="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:translate-x-[1100px] before:translate-y-[120px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-40 after:dark:from-blue-400 after:dark:via-pink-500 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>

          <div className='max-w-screen flex flex-col justify-center text-center items-center'>
          
          <div class="flex place-items-center before:absolute before:h-[850px] before:w-full sm:before:w-[480px] before:translate-x-[-750px] before:translate-y-[550px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>


            <h2 className='pt-32 text-5xl text-center font-semibold text-white'>
              Store your files efficiently
            </h2>
          


            <p className='text-gray-400 text-lg pt-8 text-wrap w-1/4'>
              DataDepot is the ultimate platform for effortlessly storing and organizing  your files.
            </p>

            <button className="mt-8 px-8 py-2 relative overflow-hidden border-rose-400 text-gray-400 hover:text-gray-200 duration-300 border rounded-full shadow-md hover:shadow-lg"
              style={{
                boxShadow: '0 0 6px rgba(214, 125, 235, 0.8)', // Initial glowy pink or purple border
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-full"></span>
              <span className="flex items-center uppercase font-thin relative ">
                <Link href="/auth/login">Get started now!</Link> 
              </span>
            </button>













            <p className="text-sm pt-2 font-extralight">
              Available for free
            </p>


            <div class="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[580px] before:translate-x-[150px] before:translate-y-[650px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>



            <div className=''>
            <Image
              src="/editor.svg"
              alt="Code editor mockup image"
              width={1200}
              height={0}
              className='max-w-screen max-h-screen py-16 mb-16'
            />
            </div>

            <div className="w-[1200px] h-[600px] flex flex-row rounded-2xl shadow-xl bg-base-200 mb-32">
                <div className="h-[60px] w-full bg-gray-700 rounded-t-2xl flex flex-row pl-4  items-center"> 
                    <span className="w-4 h-4 mr-2 bg-red-500 rounded-full"></span>
                    <span className="w-4 h-4 mr-2 bg-yellow-500 rounded-full"></span>
                    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
            </div>

          </div>
        </div>
    </section>
    
  );
};

export default Hero;
