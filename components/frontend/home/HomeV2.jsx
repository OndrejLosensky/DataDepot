import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const HomeV2 = () => {
  return (
    <div className='min-h-screen h-auto max-w-screen'>
      <section className='flex justify-center items-center'>
        <div className='mx-auto w-screen mt-12 md:space-y-16 flex flex-row items-center justify-between'>
          <div className='w-[40%]  ml-24 justify-left items-left flex flex-col items-left space-y-8 text-center lg:px-8'>
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
