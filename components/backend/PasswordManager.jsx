import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AiOutlineQuestion } from "react-icons/ai";
import Profile from './Profile';
import { IoCloseOutline } from "react-icons/io5";
import GeneratePassword from './GeneratePassword';
import { BsArrow90DegLeft } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";
import { FaCheck } from 'react-icons/fa'; // Import the check icon

const PasswordManager = ({isUserActive}) => {
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [showAddPasswordInput, setShowAddPasswordInput] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [app, setApp] = useState('');

  const [showGeneratePasswordComponent, setShowGeneratePasswordComponent] = useState(false);

  const [selectedIcon, setSelectedIcon] = useState('list'); 

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };



  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const response = await fetch('/api/getFolders');
      if (response.ok) {
        const data = await response.json();
        setFolders(data);
      } else {
        console.error('Failed to fetch folders:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch folders:', error.message);
    }
  };

  const handleNewFolderSubmit = async (e) => {
    e.preventDefault();
    if (newFolderName.trim() !== '') {
      try {
        const response = await fetch('/api/newFolder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ folderName: newFolderName }),
        });
        if (response.ok) {
          await fetchFolders(); // Refresh folders after creating new one
          setNewFolderName('');
        } else {
          console.error('Failed to create folder:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to create folder:', error.message);
      }
    }
    setShowNewFolderInput(false); // Close the dropdown after creating the folder

  };

  const handleAddPasswordSubmit = async () => {
    console.log('Add Password form submitted');
  };


  return (
    <div className='w-auto h-full overflow-hidden space-y-6 mr-4'>
        {showGeneratePasswordComponent ? (
          <div>
              <button className='flex flex-row items-center px-4 text-gray-200 py-1 bg-gray-700 mb-4 rounded-lg shadow-lg' onClick={() => setShowGeneratePasswordComponent(false)} > <BsArrow90DegLeft className='mr-2'/> Back </button>
              <GeneratePassword onClose={() => setShowGeneratePasswordComponent(false)}/>
          </div>
        ) : (
          <div className='space-y-6'>
             {/* Navbar */}
        <div className='flex flex-row justify-between overflow-hidden h-[6%] items-center'>
        <div className='flex flex-row gap-x-4'>
          <button
            onClick={() => setShowAddPasswordInput(!showAddPasswordInput)}
            className='bg-purple-500 text-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-purple-600 duration-300'
          >
            + Add Password
          </button>
          <button
                onClick={() => setShowGeneratePasswordComponent(true)} // Toggle visibility of GeneratePasswordComponent
                className='border border-gray-300 text-gray-300 px-4 py-2 rounded-md'
              >
                Generate Secure Password
              </button>
          <div>
            <label className="input input-bordered h-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              <input type="text" className="grow w-[400px]" placeholder="Search password" />
            </label>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <button> <AiOutlineQuestion className='text-gray-200 bg-[#323232] hover:text-gray-50 duration-300 hover:shadow-xl hover:border-gray-400 border border-transparent w-7 h-7 mr-2 p-1 rounded-full' /></button>
          <div className='flex flex-row relative'>
            <Profile isUserActive={isUserActive} />
          </div>
        </div>
      </div>

        {showAddPasswordInput && (
        <div className='flex flex-col items-center'>
          <select
            className="p-2 border rounded-md"
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
          >
            <option value="">Select Folder</option>
            {folders.map(folder => (
              <option key={folder.id} value={folder.id}>{folder.name}</option>
            ))}
          </select>
          <input
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='mt-2 p-2 border rounded-md'
          />
          <input
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-2 p-2 border rounded-md'
          />
          <input
            type='text'
            placeholder='Enter app'
            value={app}
            onChange={(e) => setApp(e.target.value)}
            className='mt-2 p-2 border rounded-md'
          />
          <button
            onClick={handleAddPasswordSubmit}
            className='mt-2 px-4 py-2 bg-purple-500 text-gray-200 rounded-md shadow-md hover:bg-purple-600 duration-300'
          >
            Add Password
          </button>
        </div>
      )}
        {/* Banner */}
        <div className='w-full bg-gray-800 h-[19%] flex flex-row overflow-hidden'>
            <div className='w-1/4 flex justify-center items-center'>
              <Image src="/lock.svg" width={256} height={256} alt='Icon' className='rounded-full bg-gray-500 m-24 p-6'/>
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
          <div className='relative flex flex-row space-x-4'>
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

            <button
              onClick={() => setShowNewFolderInput(!showNewFolderInput)}
              className='px-4 py-1 text-gray-200 bg-purple-500 rounded-md shadow-md hover:bg-purple-600 duration-300'
            >
              + New folder
            </button>
            {/* Container for input and button */}
            {showNewFolderInput && (
              <div className='absolute bg-[#41434e] top-full right-0 p-2 mt-2 rounded-lg shadow-lg z-10'>
                <div className='flex flex-row justify-between items-center'>
                  <p className='font-light text-sm text-gray-300'> Create new folder</p>
                  <IoCloseOutline className='text-gray-200 hover:bg-gray-600 '  onClick={() => setShowNewFolderInput(!showNewFolderInput)}/>
                </div>
                <div className='flex flex-col items-center'>
                  <input
                    type='text'
                    placeholder='Enter folder name'
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    className='mt-2 p-1 text-sm border rounded-md'
                  />
                  <button
                    type='submit'
                    onClick={handleNewFolderSubmit}
                    className='mt-2 px-2 py-1 text-sm w-full bg-purple-500 text-gray-200 rounded-md shadow-md hover:bg-purple-600 duration-300'
                  >
                    Create Folder
                  </button>
                </div>
              </div>
            )}
          </div>
          </div>


          <div className='grid grid-cols-4 w-full mt-6 gap-6'>
          {folders.map((folder) => (
            <div key={folder.id} className='h-64 bg-[#20263d] rounded-xl border border-gray-500'>
              <div className='h-2/3 flex justify-center items-center uppercase text-5xl text-gray-300 font-semibold'>
                {folder.name}
              </div>
              <div className='h-1/3 bg-[#303444] border-t-[0.5px] rounded-b-xl border-gray-500 flex flex-col justify-between'>
                <div className='flex flex-row justify-between items-center p-4'>
                  <div className='flex flex-col'>
                    <h1 className='text-2xl font-semibold text-gray-300'>{folder.name} passwords</h1>
                    <p className='text-gray-400'>{folder.passwordCount} items</p>
                  </div>
                  <button className='flex items-center justify-center rounded-full text-gray-200 bg-transparent  hover:bg-gray-600 duration-300'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-4xl' />
                </button>
                  
                </div>
              </div>
            </div>
          ))}


            {/* 
            <div className='h-64 bg-[#20263d] rounded-xl border border-gray-500'>
                  <div className='h-2/3 flex justify-center items-center uppercase text-5xl text-gray-300 font-semibold'>
                        Music
                  </div>
                  <div className='h-1/3 bg-[#303444] border-t-[0.5px] rounded-b-xl border-gray-500 flex flex-row justify-between'>
                      <div className='flex flex-col p-4' >
                        <h1 className='text-2xl font-bold text-gray-300'> Music players </h1>
                        <p className='font-seminold text-gray-400'> 11 items </p>
                      </div>
                      <button className='flex flex-row items-center m-4 text-gray-200 '> Open <MdOutlineKeyboardDoubleArrowRight className='ml-2' /> </button>
                  </div>
            </div>  
            <div className='h-64 bg-[#20263d] rounded-xl border border-gray-500'>
                  <div className='h-2/3 flex justify-center items-center uppercase text-5xl text-gray-300 font-semibold'>
                        Socials
                  </div>
                  <div className='h-1/3 bg-[#303444] border-t-[0.5px] rounded-b-xl border-gray-500 flex flex-row justify-between'>
                      <div className='flex flex-col p-4' >
                        <h1 className='text-2xl font-bold text-gray-300'> Social apps </h1>
                        <p className='font-seminold text-gray-400'> 11 items </p>
                      </div>
                      <button className='flex flex-row items-center m-4 text-gray-200 '> Open <MdOutlineKeyboardDoubleArrowRight className='ml-2' /> </button>
                  </div>
            </div>
            <div className='h-64 bg-[#20263d] rounded-xl border border-gray-500'>
                  <div className='h-2/3 flex justify-center items-center uppercase text-5xl text-gray-300 font-semibold'>
                        Banks
                  </div>
                  <div className='h-1/3 bg-[#303444] border-t-[0.5px] rounded-b-xl border-gray-500 flex flex-row justify-between'>
                      <div className='flex flex-col p-4' >
                        <h1 className='text-2xl font-bold text-gray-300'> Bank apps </h1>
                        <p className='font-seminold text-gray-400'> 11 items </p>
                      </div>
                      <button className='flex flex-row items-center m-4 text-gray-200 '> Open <MdOutlineKeyboardDoubleArrowRight className='ml-2' /> </button>
                  </div>
            </div>    
            */}
          </div>

        </div>
          </div>
        )}
    </div>
  )
}

export default PasswordManager