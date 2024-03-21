import React from 'react'
import SectionTitle from '../layout/SectionTitle'
import Image from 'next/image';
import Link from 'next/link';


const WhyChoose = () => {
  return (
    <section className='flex flex-col'>
      <div className='max-w-screen h-auto py-32 flex flex-row'>
        <div className='w-1/2 flex justify-center items-center'>
          <div className="mockup-browser border ml-36 w-auto h-auto">
            <div className="mockup-browser-toolbar">
              <div className="input">https://data-depot.com</div>
            </div>
            <div className=''>
              <Image
                  src="/backend.png"
                  alt="Code editor mockup image"
                  width={800}
                  height={0}
                />
            </div>
          </div>
        </div>

        <div class="flex place-items-center relative mt-64 before:absolute before:h-[400px] before:w-full sm:before:w-[300px] before:-translate-x-[850px] before:translate-y-[-300px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>
        <div class="flex place-items-center relative mt-64 before:absolute before:h-[800px] before:w-full sm:before:w-[550px] before:translate-x-[180px] before:translate-y-[-150px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>

        <div className='w-1/2 flex flex-col justify-center'>
            <p className='pb-2 ml-36 text-pink-500 uppercase'>
              Why Choose DataDepot?
            </p>
            <h2 className='text-5xl text-gray-300 ml-36 font-bold text-left pb-4'>
              Discover DataDepot
            </h2>
            <p className='text-left text-xl text-gray-400 ml-36'>
              Support for many file types (.docx;.pdf;.pptx;...) <br />
              SQlite integration for efficient storage <br />
              Create tags for your stored files
            </p>
            <div className='pt-8'>
              <Link className='text-left ml-36 btn w-[200px] hover:-translate-y-1 duration-200' href="/docs">
                Supported files 
                <svg
                  viewBox="0 0 64 64"
                  fill="currentColor"
                  height="1.5em"
                  width="1.9em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M31 15l17 17-17 17"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M16 15l17 17-17 17"
                  />
                </svg>
              </Link> 
              
              <p className='text-gray-400 text-sm font-thin ml-36 pl-1 pt-1'>
                Microsoft Office files supported!
              </p>
            </div>


        </div>

      </div>

      <div className='border-b border-gray-600 w-[88%] mx-auto'></div>

    </section>
  )
}

export default WhyChoose