import React from 'react'

const WhyChoose = () => {
  return (
    <div className='max-w-screen h-[600px] flex flex-row'>
      <div className='w-1/2 bg-black'>

      </div>
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