import React from 'react'
import { SlNotebook } from "react-icons/sl";
import SearchInput from './SearchInput';
import Profile from './Profile';

const Notes = ({isUserActive}) => {
  return (
    <div className='w-full h-[100%] flex flex-col space-y-6'>
        <div className='flex flex-row items-center w-full h-[5%]  justify-between '>
            <div className='flex flex-row items-center gap-x-2'>
              <SlNotebook className='w-6 h-6 text-gray-200'/> 
              <p className='text-2xl text-gray-200 font-sora pr-4'>NoteStorage</p>
              <SearchInput placeholder="Search note"/>
            </div>
            <div className='flex flex-row relative'>
                <button className='px-4 bg-purple-500 rounded-lg text-gray-100'> + add Note </button>
                <Profile isUserActive={isUserActive}/> 
            </div>

        </div>

        <div className='h-[95%] '>
            <p className='text-2xl font-sora font-semibold text-gray-200 pt-2 pl-1'> Notes <span className='font-thin'>(0)</span></p>
        </div>
    </div>
  )
}

export default Notes