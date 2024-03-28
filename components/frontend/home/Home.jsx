import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Home = ({isDarkMode}) => {
  return (
    <section>
        <div className={`min-h-screen max-w-screen ${isDarkMode ? 'bg-[#1d232a]': 'bg-[#F4F4F4]'}`}>
          <div className="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:translate-x-[1100px] before:translate-y-[120px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-40 after:dark:from-blue-400 after:dark:via-pink-500 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>
          <div className="flex place-items-center before:absolute before:h-[390px] before:w-full sm:before:w-[380px] before:translate-x-[160px] before:translate-y-[470px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-400 before:dark:opacity-30 after:dark:from-rose-500 after:dark:via-blue-500 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>


          <div className='max-w-screen flex flex-col justify-center text-center items-center'>
          

          <div className={`flex flex-row pt-24 opacity-50 ${isDarkMode ? 'text-[#DFDFDF]':'text-[#222222]'}`}>
            <kbd className={`kbd kbd-sm mr-1 ${isDarkMode ? 'text-[#DFDFDF]':'text-[#DFDFDF]'}`}>CMD</kbd>
            +
            <kbd className={`ml-1 mr-2 kbd kbd-sm ${isDarkMode ? 'text-[#DFDFDF]':'text-[#DFDFDF]'}`}>B</kbd>
            <span className="font-thin"> to toggle dark mode </span>
          </div>

            <h2 className={`pt-8 text-5xl text-center drop-shadow-glow  font-semibold ${isDarkMode ? 'text-[#DFDFDF]':'text-[#222222]'}`}>
              Store your files efficiently
            </h2>
            
            <p className={`text-gray-400 text-lg pt-4 text-wrap w-1/4 ${isDarkMode ? 'text-[#DFDFDF]':'text-[#413e3e]'}`}>
              DataDepot is the ultimate platform for effortlessly storing and organizing  your files.
            </p>

            <button className="filled-button rounded-full shadow-xl mt-8 z-0">
              <Link href="/auth/login" className={`button-link ${isDarkMode ? 'text-[#DFDFDF]':'text-[#242424]'} `}>Get started now!</Link>
              <span className="fill"></span>
            </button>



            <p className={`text-sm pt-2 font-extralight ${isDarkMode ? 'text-[#DFDFDF]':'text-[#242424] opacity-50'} `}>
              Available for free
            </p>


            <div className="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[580px] before:translate-x-[150px] before:translate-y-[650px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>



            <div className=''>
            <Image
              src="/editor.svg"
              alt="Code editor mockup image"
              width={1200}
              height={0}
              className='max-w-screen max-h-screen drop-shadow-xl py-16 mb-16'
            />
            </div>

            {/*   
            <div className="w-[1200px] h-[600px] flex flex-row rounded-2xl shadow-xl bg-base-200 mb-32">
                <div className="h-[60px] w-full bg-gray-700 rounded-t-2xl flex flex-row pl-4  items-center"> 
                    <span className="w-4 h-4 mr-2 bg-red-500 rounded-full"></span>
                    <span className="w-4 h-4 mr-2 bg-yellow-500 rounded-full"></span>
                    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
            </div>
            */}

          </div>
        </div>
    </section>
    
  );
};

export default Home;
