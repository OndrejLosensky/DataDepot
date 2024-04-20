import React, {useState} from 'react'
import Profile from './Profile';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { AiOutlineQuestion } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";
import { FaCheck } from 'react-icons/fa'; 
import { BsArrow90DegLeft } from "react-icons/bs";
import Help from './Help';

const Files = ({isUserActive}) => {
  const [fileTypeFilter, setFileTypeFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('list'); 

  const [selectedComponent, setSelectedComponent] = useState('files');


  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className='w-auto overflow-hidden h-full space-y-6 mr-4'>
      {selectedComponent === 'help' && (
          <div className='w-full h-full overflow-hidden'>
            <button className='flex flex-row absolute top-4 items-center px-4 text-gray-200 py-1 bg-gray-700 mb-4 rounded-lg shadow-lg' onClick={() => setSelectedComponent('password')} > <BsArrow90DegLeft className='mr-2'/> Close </button>
            <Help onClose={() => setSelectedComponent('help')} />
          </div>
        )}

        {selectedComponent === 'generate' ? (
          <div>
            <button className='flex flex-row items-center px-4 text-gray-200 py-1 bg-gray-700 mb-4 rounded-lg shadow-lg' onClick={() => setSelectedComponent('password')} > <BsArrow90DegLeft className='mr-2'/> Back </button>
            <GeneratePassword onClose={() => setSelectedComponent('generate')} />
          </div>
        ) : (
          <div className='space-y-6 '>
            {/* Navbar */}
            <div className='flex flex-row justify-between overflow-hidden py-1 h-[4%] items-center'>
            <div className='flex flex-row gap-x-4'>
                <button className='bg-purple-500 text-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-purple-600 duration-300'> + Add File</button>
                <div>
                  <label className="input input-bordered h-10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow w-64" placeholder="Search Files" />
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                    </label>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <button onClick={() => setSelectedComponent('help')}> <AiOutlineQuestion className='text-gray-200 bg-[#323232] hover:text-gray-50 duration-300 hover:shadow-xl hover:border-gray-400 border border-transparent w-7 h-7 mr-2 p-1 rounded-full'/></button>
                <div className='flex flex-row relative'>
                    {/*  <button> <AiOutlineQuestion className='text-gray-300 w-10 h-10 mr-2 bg-gray-700 rounded-full p-2'/> </button> */}
                    <Profile isUserActive={isUserActive}/> 
                </div>
            </div>
            </div>
            {/* Banner */}
            <div className='w-full bg-gray-800 h-[20%] flex flex-row overflow-hidden'>
            <div className='w-1/4 flex justify-center items-center'>
              <Image src="/file.svg" width={256} height={256} alt='Icon' className='rounded-full bg-gray-500 m-24 p-4'/>
            </div>
            <div className='w-3/4 relative justify-center space-y-2 flex flex-col'>
              <button className='absolute right-4 top-4'> <IoClose className='text-gray-200 w-5 h-5'/> </button>
              <h1 className='text-3xl font-bold text-gray-200'> Welcome to FilesDepot</h1>
              <p className='font-light text-gray-300'> You can store your documents, zip files and many more here and make them as much as organized as you like </p>
              <br />
              <div className='flex flex-row space-x-6'>
                  <button className='px-4 py-2 bg-purple-500 text-gray-200 hover:bg-purple-600 duration-300 rounded-md shadow-md'> See how it works</button>
                  <button className='text-gray-300 px-4 py-2 border border-gray-300 hover:bg-gray-300 hover:text-gray-800 duration-500 rounded-md'> Maybe later</button>
              </div>
            </div>
            </div>

            {/* Passwords (cards with folders) */}
            <div className='w-full h-[75%] flex flex-col overflow-hidden'>
            <div className='flex flex-row justify-between items-center'> 
            <h1 className='text-2xl font-semibold text-gray-200'> Files folders</h1>
            <div className='flex flex-row items-center space-x-4'>
              <div className='flex flex-row w-36 justify-between items-center border border-gray-400 rounded-xl'>
                  <div 
                    className={`w-1/2 flex flex-row items-center justify-center space-x-2 border-r py-2 rounded-l-xl px-3 cursor-pointer duration-300 ${selectedIcon === 'list' ? 'bg-gray-600' : ''}`}
                    onClick={() => handleIconClick('list')}
                  >
                    {selectedIcon === 'list' && <FaCheck className="text-purple-500 w-3 h-3 ml-1" />} 
                    <MdFormatListBulleted className='w-5 h-5'/>
                  </div>

                  <div 
                    className={`px-3 py-2 w-1/2 flex flex-row items-center justify-center space-x-2 rounded-r-xl cursor-pointer duration-300 ${selectedIcon === 'grid' ? 'bg-gray-600' : ''}`}
                    onClick={() => handleIconClick('grid')}
                  >
                    {selectedIcon === 'grid' && <FaCheck className="text-purple-500 w-3 h-3 ml-1" />}
                    <LuLayoutGrid className='w-5 h-5'/>
                </div>
              </div>

              <button className='px-4 py-2 text-gray-200 bg-purple-500 rounded-md shadow-md hover:bg-purple-600 duration-300'> + New folder </button>
            </div>
            </div>

            <div className='grid grid-cols-4 w-full mt-6 gap-6'>
            <div className='h-64 bg-[#20263d] rounded-xl border border-gray-500'>
                <div className='h-[80%] flex flex-col justify-between '>
                    <label className='flex flex-row space-x-2 w-28 px-2 py-1 mt-2 ml-2 rounded-lg text-gray-100 shadow-lg justify-center items-center bg-red-500'>
                        <AiOutlineTag/>
                        Personal
                    </label>
                    <div className='flex flex-col'>
                      <div className='flex text-xl flex-row space-x-2 items-center text-gray-100 font-medium'>
                        <FaFilePdf className='text-red-600 w-10 h-8'/>
                        filename.pdf
                      </div>
                      <p className='ml-2 mt-1 text-gray-300'> Size: 352 KB</p>
                      <p className='ml-2 mb-4 text-gray-300'> Date: 17.4.2024 20:01 </p>
                    </div>
                </div>
                <div className='h-[20%] bg-[#303444] text-gray-100 px-5 rounded-b-xl border-t border-gray-600 flex flex-row items-center justify-between'>
                  <VscOpenPreview className='cursor-pointer'/>
                  <AiOutlineTag className='cursor-pointer'/>
                  <MdOutlineFileDownload className='cursor-pointer'/>
                  <IoShareSocialOutline className='cursor-pointer'/>
                  <BsThreeDotsVertical className='cursor-pointer'/>
                </div>  
            </div>  
            <div className='h-64 bg-[#20263d] rounded-xl border border-gray-500'>
                <div className='h-[80%] flex flex-col justify-between '>
                    <label className='flex flex-row space-x-2 w-28 px-2 py-1 mt-2 ml-2 rounded-lg text-gray-100 shadow-lg justify-center items-center bg-red-500'>
                        <AiOutlineTag/>
                        Personal
                    </label>
                    <div className='flex flex-col'>
                      <div className='flex text-xl flex-row space-x-2 items-center text-gray-100 font-medium'>
                        <FaFilePdf className='text-red-600 w-10 h-8'/>
                        filename.pdf
                      </div>
                      <p className='ml-2 mt-1 text-gray-300'> Size: 352 KB</p>
                      <p className='ml-2 mb-4 text-gray-300'> Date: 17.4.2024 20:01 </p>
                    </div>
                </div>
                <div className='h-[20%] bg-[#303444] text-gray-100 px-5 rounded-b-xl border-t border-gray-600 flex flex-row items-center justify-between'>
                  <VscOpenPreview className='cursor-pointer'/>
                  <AiOutlineTag className='cursor-pointer'/>
                  <MdOutlineFileDownload className='cursor-pointer'/>
                  <IoShareSocialOutline className='cursor-pointer'/>
                  <BsThreeDotsVertical className='cursor-pointer'/>
                </div>  
            </div>  
            <div className='h-64 bg-[#20263d] rounded-xl border border-gray-500'>
                <div className='h-[80%] flex flex-col justify-between '>
                    <label className='flex flex-row space-x-2 w-28 px-2 py-1 mt-2 ml-2 rounded-lg text-gray-100 shadow-lg justify-center items-center bg-red-500'>
                        <AiOutlineTag/>
                        Personal
                    </label>
                    <div className='flex flex-col'>
                      <div className='flex text-xl flex-row space-x-2 items-center text-gray-100 font-medium'>
                        <FaFilePdf className='text-red-600 w-10 h-8'/>
                        filename.pdf
                      </div>
                      <p className='ml-2 mt-1 text-gray-300'> Size: 352 KB</p>
                      <p className='ml-2 mb-4 text-gray-300'> Date: 17.4.2024 20:01 </p>
                    </div>
                </div>
                <div className='h-[20%] bg-[#303444] text-gray-100 px-5 rounded-b-xl border-t border-gray-600 flex flex-row items-center justify-between'>
                  <VscOpenPreview className='cursor-pointer'/>
                  <AiOutlineTag className='cursor-pointer'/>
                  <MdOutlineFileDownload className='cursor-pointer'/>
                  <IoShareSocialOutline className='cursor-pointer'/>
                  <BsThreeDotsVertical className='cursor-pointer'/>
                </div>  
            </div>  
            <div className='h-64 bg-[#20263d] rounded-xl border border-gray-500'>
                <div className='h-[80%] flex flex-col justify-between '>
                    <label className='flex flex-row space-x-2 w-28 px-2 py-1 mt-2 ml-2 rounded-lg text-gray-100 shadow-lg justify-center items-center bg-red-500'>
                        <AiOutlineTag/>
                        Personal
                    </label>
                    <div className='flex flex-col'>
                      <div className='flex text-xl flex-row space-x-2 items-center text-gray-100 font-medium'>
                        <FaFilePdf className='text-red-600 w-10 h-8'/>
                        filename.pdf
                      </div>
                      <p className='ml-2 mt-1 text-gray-300'> Size: 352 KB</p>
                      <p className='ml-2 mb-4 text-gray-300'> Date: 17.4.2024 20:01 </p>
                    </div>
                </div>
                <div className='h-[20%] bg-[#303444] text-gray-100 px-5 rounded-b-xl border-t border-gray-600 flex flex-row items-center justify-between'>
                  <VscOpenPreview className='cursor-pointer'/>
                  <AiOutlineTag className='cursor-pointer'/>
                  <MdOutlineFileDownload className='cursor-pointer'/>
                  <IoShareSocialOutline className='cursor-pointer'/>
                  <BsThreeDotsVertical className='cursor-pointer'/>
                </div>  
            </div>  
            
            

            </div>
            </div>
          </div>
        )}

   
</div>
  )
}

export default Files