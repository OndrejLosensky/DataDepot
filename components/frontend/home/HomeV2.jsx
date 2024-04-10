import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const HomeV2 = () => {
  return (
    <div className='min-h-screen h-auto max-w-screen'>
      <div className="flex place-items-center before:absolute before:h-[190px] before:w-full sm:before:w-[500px] before:translate-x-[920px] before:translate-y-[170px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-400 before:dark:opacity-30 after:dark:from-rose-500 after:dark:via-blue-500 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>
      <div className="flex place-items-center before:dark:bg-gradient-to-l rotate-45 before:dark:from-red-500 before:dark:to-purple-500 before:dark:opacity-15 before:absolute before:h-[200px] before:w-full sm:before:w-[400px] before:translate-x-[430px] before:translate-y-[700px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-2xl after:content-['']  after:dark:from-rose-800 after:dark:via-blue-200 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>

      <section className='flex justify-center items-center'>
        <div className='mx-auto w-screen mt-12 md:space-y-16 flex flex-row items-center justify-between'>
          <div className='w-[40%] mb-24  ml-24 justify-left items-left flex flex-col items-left space-y-8 text-center lg:px-8'>
            <div className='flex flex-row items-center gap-x-6'>
              <p className='px-4 text-sm py-1 rounded-full bg-[#7735ba7d] border border-purple-700 text-[#e6cbff] font-bold'>
                Latest Release
              </p>
              <p className='text-gray-200 text-sm font-semibold'>DataDepot V2</p>
            </div>
            <h1 className='text-4xl text-left font-bold'>
              <span className='text-gradient-to-r text-gray-200 from-red-500 to-green-400 text-clip'>
                Experience DataDepot: <br />
                <span className='text-3xl'>Document Management System with AI</span>
              </span>
            </h1>
            <p className='text-md text-left py-2 text-gray-400 md:max-w-3xl'>
              Simplify document management with DataDepot. Effortlessly store,
              organize, and access your documents from anywhere. Whether you're
              a student, professional, or business owner, DataDepot streamlines
              your workflow and boosts productivity.
            </p>
            <div className='flex flex-row items-center gap-x-8'>
              <button className='px-4 py-2 bg-purple-600 hover:bg-purple-700 duration-300 text-[#DFDFDF] rounded-md shadow-lg'>
                Get started
              </button>
              <button className='text-gray-200 hover:text-gray-100 duration-200 font-bold flex flex-row items-center'>
                How it works <FaArrowRightLong className='w-6 h-4 ml-2' />
              </button>
            </div>
          </div>
          <div className='w-[60%] relative pb-32'> 
              <div className='rounded-lg'>
                <img src='/editor.png' alt="dashboard image" className='translate-x-40 pt-20 w-full h-[700px] rounded-lg' />
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV2;
