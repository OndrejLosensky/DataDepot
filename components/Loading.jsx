import React from 'react';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaWarehouse } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="max-w-screen min-h-screen flex flex-col justify-center items-center text-white">
      <div className="absolute top-0 left-0 mt-4 ml-4">
      <Link className='btn btn-ghost' href="/"><FaArrowLeftLong className='text-[#DFDFDF]'/><span className='text-[#DFDFDF]'>Back</span></Link>
      </div>

      <div className='flex flex-row items-center py-4 absolute top-24'>
        <FaWarehouse className={`w-20 mr-2 h-auto text-[#DFDFDF]`}/>
        <p className='mt-4 text-4xl drop-shadow-glow2'> DataDepot</p>
      </div>

      <div class="flex place-items-center absolute mt-64 before:absolute before:h-[340px] before:w-full sm:before:w-[600px] before:-translate-x-[1050px] before:translate-y-[-500px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-400 before:dark:opacity-25 after:dark:from-red-600 after:dark:via-green-400 after:to-blue-500 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>
      <div class="flex place-items-center absolute mt-64 before:absolute before:h-[140px] before:w-full sm:before:w-[550px] before:-translate-x-[-50px] before:translate-y-[-480px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-500 before:dark:opacity-30 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>
      <div class="flex place-items-center absolute mt-64 before:absolute before:h-[440px] before:w-full sm:before:w-[240px] before:-translate-x-[630px] before:translate-y-[100px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-blue-500 after:via-purple-500 to-rose-400 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-rose-500 before:dark:to-green-orange-400 before:dark:opacity-30 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>


      {/* Loading content */}
      <div className="flex flex-row items-center bg-[#333333] rounded-lg shadow-xl px-8 py-4">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="ml-4 text-xl">Loading ...</p>
      </div>

      {/* Additional text or elements */}
      <p className="mt-8">Please wait while we prepare something awesome for you!</p>
    </div>
  );
};

export default Loading;
