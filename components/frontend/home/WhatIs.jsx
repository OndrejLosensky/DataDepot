import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import FeaturesCardsContainer from '../layout/FeaturesCard';
import Link from 'next/link';

const WhatIs = () => {
  return (
    <section id='discover' className="flex flex-col items-center justify-center">
      <div className='max-w-screen max-h-screen pb-4'>
        <div className='flex flex-row justify-center max-w-screen mx-auto'>
            <div className='mt-2 text-center mb-8'>
              <SectionTitle name="Discover Your Digital Oasis"/>
            </div>
        </div>

        <div className="w-2/4 mx-auto text-center font-bold">
          <p className="text-5xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Explore DataDepot
          </p>
        </div>

        <p className='text-center pt-8 text-wrap w-1/3 mx-auto'> 
          Welcome to DataDepot, your personal project hub for securely storing and managing all your files.
          Designed with simplicity and efficiency in mind, DataDepot is the ideal solution for organizing your documents,
          script files, and more, all within one convenient platform.
        </p>

        <div className="flex place-items-center relative pl-32 mt-4 ml-64 before:absolute before:h-[600px] before:w-full sm:before:w-[580px] before:translate-x-1/3 before:rounded-full before:bg-gradient-to-br before:from-custom-pink before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-custom-purple after:via-custom-indigo after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-custom-purple before:dark:opacity-20 after:dark:from-custom-blue after:dark:via-[#4f01a9] after:dark:opacity-100 before:lg:h-[360px] z-[-1]"></div>

        <FeaturesCardsContainer/>
      </div>

      <div className='font-thin italic m-24'> Open <Link className='font-semibold cursor-pointer' href='/frontend/docs'>Docs</Link> to see more or create an account!</div>

      <div className='border-b border-gray-600 w-[88%] mx-auto'></div>
    </section>
  );
};

export default WhatIs;
