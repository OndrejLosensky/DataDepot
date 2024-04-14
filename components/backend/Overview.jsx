import React from 'react'
import Image from 'next/image'

const Overview = () => {
  return (
    <div className='w-auto h-full'>
        <div className='flex flex-row justify-between h-16 items-center'>
            <div className='pl-2'>
                <h1 className='text-2xl text-[#DFDFDF] font-bold'> Overview</h1>
                <p className='text-gray-400 font-thin'> Main dashboard </p>
            </div>
            <div className='flex flex-row items-center'>
                <div>
                <label className="input input-bordered h-12 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <input type="text" className="grow w-64" placeholder="Search" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </label>
                </div>
                <div className='flex flex-row '>
                <Image src="/pf.jpeg" width={48} height={48} className='rounded-full border border-gray-400 ml-2 cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview
