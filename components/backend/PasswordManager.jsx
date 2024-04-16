import React from 'react'
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const PasswordManager = () => {
  return (
    <div className='w-auto h-full overflow-hidden space-y-6 mr-4'>
        {/* Navbar */}
        <div className='flex flex-row justify-between overflow-hidden h-[6%] items-center'>
            <div className='flex flex-row gap-x-4'>
                <button className='bg-purple-500 text-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-purple-600 duration-300'> + Add Password </button>
                <div>
                    <label className="input input-bordered h-10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow w-64" placeholder="Search password" />
                    </label>
                </div>
            </div>
            <div className='flex flex-row items-center'>
              
                <div className='flex flex-row '>
                    <Image src="/profile_pictures/1.jpeg" width={48} height={48} className='rounded-full border border-gray-400 ml-4 cursor-pointer' />
                </div>
            </div>
        </div>
        {/* Banner */}
        <div className='w-full bg-gray-800 h-[34%] flex flex-row overflow-hidden'>
            <div className='w-1/4 flex justify-center items-center'>
              <Image src="/idea.svg" width={256} height={256} alt='Icon' className='rounded-full bg-gray-500 m-24'/>
            </div>
            <div className='w-3/4 relative justify-center space-y-2 flex flex-col'>
              <button className='absolute right-4 top-4'> <IoClose className='text-gray-200 w-5 h-5'/> </button>
              <h1 className='text-3xl font-bold text-gray-200'> Welcome to PasswordDepot</h1>
              <p className='font-light text-gray-300'> You can store your passwords here and make them as much as organized as you like </p>
              <br />
              <div className='flex flex-row space-x-6'>
                  <button className='px-4 py-2 bg-purple-500 text-gray-200 rounded-md shadow-md'> See how it works</button>
                  <button className='text-gray-300 px-4 py-2 border border-gray-200 rounded-md'> Maybe later</button>
              </div>
            </div>
        </div>

         {/* Passwords (cards with folders) */}
         <div className='w-full h-[60%] flex flex-col overflow-hidden'>
          <div className='flex flex-row justify-between items-center'> 
            <h1 className='text-2xl font-semibold text-gray-200'> Password folders</h1>
            <button className='px-4 py-1 text-gray-200 bg-purple-500 rounded-md shadow-md hover:bg-purple-600 duration-300'> + New folder </button>
          </div>

          <div className='grid grid-cols-4 w-full mt-6 gap-6'>
            <div className='h-64 bg-gray-700 rounded-xl border border-gray-500'>
                  <div className='h-2/3 flex justify-center items-center uppercase text-5xl text-gray-300 font-semibold'>
                        Music
                  </div>
                  <div className='h-1/3 bg-gray-600 border-t rounded-b-xl border-gray-400 flex flex-row justify-between'>
                      <div className='flex flex-col p-4' >
                        <h1 className='text-2xl font-bold text-gray-300'> Music players </h1>
                        <p className='font-seminold text-gray-400'> 11 items </p>
                      </div>
                      <button className='flex flex-row items-center m-4 text-gray-200 '> Open <MdOutlineKeyboardDoubleArrowRight className='ml-2' /> </button>
                  </div>
            </div>  
            <div className='h-64 bg-gray-700 rounded-xl border border-gray-500'>
                  <div className='h-2/3 flex justify-center items-center uppercase text-5xl text-gray-300 font-semibold'>
                        Socials
                  </div>
                  <div className='h-1/3 bg-gray-600 border-t rounded-b-xl border-gray-400 flex flex-row justify-between'>
                      <div className='flex flex-col p-4' >
                        <h1 className='text-2xl font-bold text-gray-300'> Social apps </h1>
                        <p className='font-seminold text-gray-400'> 11 items </p>
                      </div>
                      <button className='flex flex-row items-center m-4 text-gray-200 '> Open <MdOutlineKeyboardDoubleArrowRight className='ml-2' /> </button>
                  </div>
            </div>
            <div className='h-64 bg-gray-700 rounded-xl border border-gray-500'>
                  <div className='h-2/3 flex justify-center items-center uppercase text-5xl text-gray-300 font-semibold'>
                        Banks
                  </div>
                  <div className='h-1/3 bg-gray-600 border-t rounded-b-xl border-gray-400 flex flex-row justify-between'>
                      <div className='flex flex-col p-4' >
                        <h1 className='text-2xl font-bold text-gray-300'> Bank apps </h1>
                        <p className='font-seminold text-gray-400'> 11 items </p>
                      </div>
                      <button className='flex flex-row items-center m-4 text-gray-200 '> Open <MdOutlineKeyboardDoubleArrowRight className='ml-2' /> </button>
                  </div>
            </div>    
          </div>

        </div>
    </div>
  )
}

export default PasswordManager