import React from 'react'
import SectionTitle from '../layout/SectionTitle'

const WhyChoose = () => {
  return (
    <div className='max-w-screen h-[600px] flex flex-row'>
      <div className='w-1/2 flex justify-center items-center'>
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="w-full flex justify-center px-4 py-16 bg-base-200">Hello!</div>
        </div>
      </div>

      <div class="flex place-items-center relative mt-64 before:absolute before:h-[400px] before:w-full sm:before:w-[300px] before:-translate-x-[850px] before:translate-y-[-300px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>
      <div class="flex place-items-center relative mt-64 before:absolute before:h-[800px] before:w-full sm:before:w-[550px] before:translate-x-[180px] before:translate-y-[-150px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>

      <div className='w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl text-gray-400 uppercase ml-24 font-bold text-left pb-4'>
            Why choose DataDepot?
          </h2>
          <p className='text-left text-xl text-gray-500 ml-24'>
            Support for many file types (docx.;pdf;...) <br />
            SQlite integration for efficient storage <br />
            Create tags for your folder or projects 
          </p>
          <div className='pt-8'>
            <button className='text-left ml-24 btn w-[250px] hover:-translate-y-1 duration-200'>
            Supported file types
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

            </button>
          </div>
      </div>
    </div>
  )
}

export default WhyChoose