import React from 'react'
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";


const Loading = () => {
  return (
    <div className='max-w-screen h-screen flex justify-center items-center'>
        <Link className='btn btn-ghost absolute top-0 right-0 mr-4 mt-4' href="/"><FaArrowLeftLong className='text-[#DFDFDF]'/><span className='text-[#DFDFDF]'>Back</span></Link>

        <div className='flex flex-row items-center bg-[#333333] rounded-lg shadow-xl px-8 py-4'>
            <span className="loading loading-spinner loading-lg"></span>
            <p className='ml-3 text-xl'>Loading ...</p>
        </div>
    </div> 
  )
}

export default Loading