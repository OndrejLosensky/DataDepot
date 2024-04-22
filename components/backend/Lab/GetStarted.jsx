import React from 'react'
import { ImLab } from "react-icons/im";
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";

const GetStarted = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <p className='text-purple-500 text-sm '> Welcome to </p>
      <div className='flex flex-row items-center justify-center space-x-2 mb-3'>
        <ImLab className='text-4xl text-gray-200'/>
        <h2 className='text-4xl text-gray-200 mt-1 font-semibold'>DataDepot Lab</h2>
      </div>
        <p className='font-light text-lg pb-1 text-gray-300'> This is space for testing new components, AI models and more...</p>
        <p className='font-light text-lg w-1/2 text-center pt-3'> Mainly I am testing some software components that have something to do with API. Like a CoinGeckoAPI & BinanceAPI for crypto, stocks etc. Ai APIs and generally my ideas that I think about implementing somehow </p>
        <div className="flex space-x-2 mt-16">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-purple-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Next
            <MdOutlineKeyboardArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
    </div>
  )
}

export default GetStarted