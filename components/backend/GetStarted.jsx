import React from 'react'
import { FaHome, FaBolt, FaFile, FaQuestion  } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdLockOutline } from "react-icons/md";
import { FaRegStickyNote, FaCode, FaUserShield } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <p className='py-2 mx-auto bg-slate-800 shadow-md border border-gray-600 mt-12 rounded-full'>  <span className='px-4 ml-2 rounded-full bg-violet-600 drop-shadow-glow2 text-violet-100 py-1'> new </span>  <span className='px-4 text-gray-400 hover:text-gray-300 duration-200 '> Introducing DataDefender Algorithms </span></p>
        <h1 className='text-4xl font-bold pt-10 text-gray-200'>Meet DataDepot</h1>

        <p className='pt-4'> Efficient data management storage customized for a developer. Store passwords, documents, notes and more </p>
        <div className='grid grid-cols-2 w-1/2  gap-6 mt-8'>
            <div className='w-full cursor-pointer hover:border-gray-300 duration-300 hover:scale-105  h-24 rounded-md shadow-lg border border-gray-500 flex flex-row items-center justify-between px-6'>
                <FaHome className='w-6 h-6 text-gray-100'/>
                Getting started
                <MdOutlineKeyboardArrowRight/>
            </div>
            <div className='w-full cursor-pointer hover:border-gray-300 duration-300 hover:scale-105  h-24 rounded-md shadow-lg border border-gray-500 flex flex-row items-center justify-between px-6'>
                <FaQuestion className='w-6 h-6 text-gray-100'/>
                Help
                <MdOutlineKeyboardArrowRight/>
            </div>
            <div className='w-full cursor-pointer hover:border-gray-300 duration-300 hover:scale-105  h-24 rounded-md shadow-lg border border-gray-500 flex flex-row items-center justify-between px-6'>
                <FaFile className='w-6 h-6 text-gray-100'/>
                File Management
                <MdOutlineKeyboardArrowRight/>
            </div>
            <div className='w-full cursor-pointer hover:border-gray-300 duration-300 hover:scale-105  h-24 rounded-md shadow-lg border border-gray-500 flex flex-row items-center justify-between px-6'>
                <MdLockOutline className='w-6 h-6 text-gray-100'/>
                Passwords Storage
                <MdOutlineKeyboardArrowRight/>
            </div>
            <div className='w-full cursor-pointer hover:border-gray-300 duration-300 hover:scale-105  h-24 rounded-md shadow-lg border border-gray-500 flex flex-row items-center justify-between px-6'>
                <FaCode className='w-6 h-6 text-gray-100'/>
                Coding Snippets
                <MdOutlineKeyboardArrowRight/>
            </div>
            <div className='w-full cursor-pointer hover:border-gray-300 duration-300 hover:scale-105  h-24 rounded-md shadow-lg border border-gray-500 flex flex-row items-center justify-between px-6'>
                <FaRegStickyNote className='w-6 h-6 text-gray-100'/>
                Quick Notes
                <MdOutlineKeyboardArrowRight/>
            </div>

        </div>
        <div className='w-2/4 mt-20 '>
            <h2 className='text-3xl font-bold text-gray-200'> Why choose DataDepot?</h2>
            <div className='grid grid-cols-3 gap-4 gap-y-8 mt-8'>
                    <div className='flex flex-row  items-start gap-x-3 justify-center'>
                            <FaFile className='text-purple-300'/>
                            <div>
                            <p className='font-semibold text-gray-200'> File storage  </p>
                            <p className='text-gray-400'> Store your all documents in a efficient way</p>
                          </div>
                    </div>
                    <div className='flex flex-row items-start gap-x-3 justify-center'>
                            <FaUserShield className='text-blue-300'/>
                            <div>
                            <p className='font-semibold text-gray-200'> Secure Storage  </p>
                            <p className='text-gray-400'> Your data is securely encrypted</p>
                          </div>
                    </div>
                    <div className='flex flex-row items-start gap-x-3 justify-center'>
                            <FaCode className='text-green-300'/>
                            <div>
                            <p className='font-semibold text-gray-200'> Code Snippets  </p>
                            <p className='text-gray-400'> Store and manage your code snippets</p>
                          </div>
                    </div>
                    <div className='flex flex-row items-start text-left gap-x-3 '>
                            <FaQuestion className='text-yellow-300 '/>
                            <div>
                            <p className='font-semibold text-gray-200'> Easy to Use  </p>
                            <p className='text-gray-400'> Simple and intuitive interface</p>
                          </div>
                    </div>
                    <div className='flex flex-row items-start gap-x-3'>
                            <FaBolt className='text-red-300'/>
                            <div>
                            <p className='font-semibold text-gray-200'> Fast Access  </p>
                            <p className='text-gray-400'> Quickly retrieve your data</p>
                          </div>
                    </div>
                    <div className='flex flex-row items-start gap-x-3 justify-center'>
                            <FaRegStickyNote className='text-pink-300'/>
                            <div>
                            <p className='font-semibold text-gray-200'> Notes Management  </p>
                            <p className='text-gray-400'> Keep track of important notes</p>
                          </div>
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default GetStarted
