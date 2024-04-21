import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const HomeV2 = () => {
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
    <div className='min-h-screen h-auto overflow-hidden max-w-screen'>
      <div className="flex place-items-center before:absolute before:h-[190px] before:w-full sm:before:w-[500px] before:translate-x-[920px] before:translate-y-[170px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-400 before:dark:opacity-30 after:dark:from-rose-500 after:dark:via-blue-500 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>
      <div className="flex place-items-center before:dark:bg-gradient-to-tr rotate-45 before:dark:from-red-500 before:dark:to-purple-500 before:dark:opacity-[19%] before:absolute before:h-[200px] before:w-full sm:before:w-[400px] before:translate-x-[430px] before:translate-y-[700px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-2xl after:content-['']  after:dark:from-rose-800 after:dark:via-blue-200 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>
      <div className="z-[-1] flex place-items-center before:dark:bg-gradient-to-br before:dark:from-violet-500 before:dark:to-red-200 before:dark:opacity-[25%] before:absolute before:h-[220px] before:w-full sm:before:w-[670px] before:translate-x-[980px] before:translate-y-[800px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-2xl after:content-['']  after:dark:from-rose-800 after:dark:via-blue-200 after:dark:opacity-100 "></div>

      <section className='flex justify-center items-center'>
        <div className='mx-auto w-screen mt-32 mb-8 flex flex-row items-center justify-between'>
          <div className='md:w-[40%] sm:w-[80%] mt-20 ml-24 justify-left items-left flex flex-col items-left space-y-8 text-center lg:px-8'>
            <div className='flex flex-row items-center gap-x-6'>
              <p className='px-4 text-sm py-1 rounded-full bg-[#6b22b4bd] border border-purple-700 text-[#eedffc] font-bold'>
                Demo release
              </p>
              <p className='text-gray-200 text-sm font-semibold'>DataDepot V1</p>
            </div>
            <h1 className='text-4xl text-left font-bold'>
                <span className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200  to-gray-400">
                  Experience DataDepot: <br />
                </span>
                <span className="relative text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200  to-gray-400">
                  Data Management system with AI
                </span>
            </h1>
            <p className='text-md text-left py-2 text-gray-400'>
              Simplify data management with DataDepot. Effortlessly store,
              organize, and access your documents,files, passwords and more from anywhere. Whether you're
              a student, professional, or business owner, DataDepot streamlines
              your workflow and boosts productivity.
            </p>
            <div className='flex flex-row items-center gap-x-8'>
              <Link className='px-4 py-2 bg-purple-600 hover:bg-purple-700 duration-300 text-[#ebebeb] rounded-md shadow-lg' href="/auth/register"> Get started </Link>
              <button onClick={() => scrollToAnchor('demo')} className='text-gray-200 hover:text-gray-100 duration-200 font-bold flex flex-row items-center'>
                How it works <FaArrowRightLong className='w-6 h-4 ml-2' />
              </button>

            </div>
          </div>
          <div className='relative '> 
              <div className='rounded-lg'>
                <img src='/sidebarVisible.svg' alt="dashboard image" className='translate-x-60 pt-16 scale-125 h-[720px] rounded-lg' />
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV2;
