// components/backend/Lab/PasswordManager.jsx
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import { AiOutlineQuestion } from "react-icons/ai";
import Profile from './Profile';
import { IoCloseOutline } from "react-icons/io5";
import GeneratePassword from './GeneratePassword';
import { BsArrow90DegLeft } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";
import { FaCheck } from 'react-icons/fa';
import Help from './Help';
import Passwords from './Passwords';

const PasswordManager = ({ isUserActive }) => {
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [showAddPasswordInput, setShowAddPasswordInput] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [app, setApp] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('folders'); // 'folders', 'generate', 'help', 'passwordsPage'
  const [selectedIcon, setSelectedIcon] = useState('grid');


  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    setSelectedComponent('passwordsPage');
  };

  const handleClosePasswordsPage = () => {
    setSelectedFolder(null);
    setSelectedComponent('folders');
  };

  const fetchFolders = async () => {
    try {
      const fetchData = async () => {
        try {
            const response = await axios.get('/api/getFolders');
            setFolders(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
    } catch (error) {
      console.error('Failed to fetch folders:', error.message);
    }
  };

  const handleNewFolderSubmit = async () => {
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
          await fetchFolders(); 
          setNewFolderName('');
        } else {
          console.error('Failed to create folder:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to create folder:', error.message);
      }
    }
    setShowNewFolderInput(false);
  };
  

  const handleAddPasswordSubmit = async () => {
    try {
        const response = await axios.post('/api/newPassword', {
            folderId: selectedFolder,
            username: username,
            password: password,
            app: app,
        });

        if (response.data.success) {
            console.log("Password added successfully!");
            setUsername('');
            setPassword('');
            setApp('');
            setSelectedFolder('');
            await fetchFolders();
            await fetchTotalPasswords(); 
        } else {
            console.error('Failed to add password:', response.data.error);
        }
    } catch (error) {
        console.error('Failed to add password:', error.message);
    }
    setShowAddPasswordInput(false);
};


  const [totalCount, setTotalCount] = useState(0);
        
  const fetchTotalPasswords = async () => {
    try {
        const response = await axios.get('/api/totalPasswords');
        setTotalCount(response.data.totalCount);
    } catch (error) {
        console.error(error);
    }
  };

    useEffect(() => {
        fetchTotalPasswords();
    }, []);

  return (
    <div className='w-auto h-full overflow-hidden space-y-6 mr-4'>
      {selectedComponent === 'help' && (
        <div className='w-full h-full overflow-hidden mb-12'>
          <button className='flex flex-row absolute top-4 items-center px-4 text-gray-200 py-1 bg-gray-700 mb-4 rounded-lg shadow-lg' onClick={() => setSelectedComponent('folders')} > <BsArrow90DegLeft className='mr-2'/> Back </button>
          <Help onClose={() => setSelectedComponent('help')} />
        </div>
      )}

      {selectedComponent === 'passwordsPage' && (
        <div className='w-full h-full overflow-hidden mb-12'>
          <Passwords folder={selectedFolder} onClose={handleClosePasswordsPage} />
        </div>
      )}

      {selectedComponent === 'generate' ? (
        <div className='w-auto h-full'>
          <button className='flex flex-row absolute top-4 items-center px-4 text-gray-200 py-1 bg-gray-700 rounded-lg shadow-lg' onClick={() => setSelectedComponent('folders')} > <BsArrow90DegLeft className='mr-2'/> Back </button>
          <GeneratePassword onClose={() => setSelectedComponent('generate')} />
        </div>
      ) : (
        <div className='space-y-6'>
          {/* Navbar */}
          <div className='flex flex-row justify-between overflow-hidden py-1  h-[5%] items-center'>
            <div className='flex flex-row gap-x-4'>
              <button
                onClick={() => setShowAddPasswordInput(!showAddPasswordInput)}
                className='bg-purple-500 text-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-purple-600 duration-300'
              >
                + Add Password
              </button>
              <button
                onClick={() => setSelectedComponent('generate')}
                className='border border-gray-300 hover:bg-[#323a59] hover:border-gray-100 duration-300 text-gray-300 px-4 py-2 rounded-md'
              >
                Generate Secure Password
              </button>
              <div>
                <label className="input relative input-bordered h-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                  <input type="text" className="grow w-[400px]" placeholder="Search password" />
                  <kbd className="kbd kbd-sm ">⌘</kbd>
                  <kbd className="kbd kbd-sm">K</kbd>
                </label>
              </div>
            </div>
            <div className='flex flex-row items-center'>
              <button onClick={() => setSelectedComponent('help')}> <AiOutlineQuestion className='text-gray-200 bg-[#323232] hover:text-gray-50 duration-300 hover:shadow-xl hover:border-gray-400 border border-transparent w-7 h-7 mr-2 p-1 rounded-full' /></button>
              <div className='flex flex-row relative'>
                <Profile isUserActive={isUserActive} />
              </div>
            </div>
          </div>

          {showAddPasswordInput && (
            <div className='absolute flex flex-col w-auto mx-auto z-10 px-8 h-[385px] justify-center p-2 rounded-lg shadow-lg bg-[#41434e]'>
               <div className='flex flex-row justify-between items-center mb-2'>
                      <p className='font-light text-lg text-gray-300'> Create new folder</p>
                      <IoCloseOutline className='text-gray-200 hover:bg-gray-600 rounded-full w-6 h-6 ' onClick={() => setShowAddPasswordInput(!showAddPasswordInput)} />
                </div>
              <p> Where does the password belong to?</p>
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
              <p className='mt-2'> Enter the name of the app </p>
              <input
                type='text'
                placeholder='Enter app'
                value={app}
                onChange={(e) => setApp(e.target.value)}
                className='p-2 border rounded-md'
              />
              <p className='mt-2'> App username/e-mails </p>
              <input
                type='text'
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='p-2 border rounded-md'
              />
              <p className='mt-2'> Password for the app </p>
              <input
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='p-2 border rounded-md'
              />

              <button
                onClick={handleAddPasswordSubmit}
                className='mt-2 px-4 py-2 bg-purple-500 text-gray-200 rounded-md shadow-md hover:bg-purple-600 duration-300'
              >
                Add Password
              </button>
          </div>
          )}

          {/* Banner */}
          <div className='w-full bg-gray-800 h-1/4 flex flex-row overflow-hidden'>
            <div className='w-1/4 flex justify-center items-center'>
              <Image src="/lock.svg" width={256} height={256} alt='Icon for banner' className='rounded-full bg-gray-500 m-24 p-6' />
            </div>
            <div className='w-3/4 relative justify-center space-y-2 flex flex-col'>
              <button className='absolute right-4 top-4'> <IoClose className='text-gray-200 w-5 h-5' /> </button>
              <h1 className='text-3xl font-bold text-gray-200'> Welcome to PasswordDepot</h1>
              <p className='font-light text-gray-300'> You can store your passwords here and make them as much as organized as you like </p>
              <br />
              <div className='flex flex-row space-x-6'>
                <button className='px-4 py-2 bg-purple-500 hover:bg-purple-600 duration-300 text-gray-200 rounded-md shadow-md'> See how it works</button>
                <button className='text-gray-300 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-300 hover:text-gray-800 duration-500 '> Maybe later</button>
              </div>
            </div>
          </div>

          {/* Passwords (cards with folders) */}
          <div className='w-full h-[60%] min-h-[300px] flex flex-col overflow-hidden'>
            <div className='flex flex-row justify-between items-center'>
              <h1 className='text-2xl font-semibold text-gray-200'> Passwords <span className='font-thin text-lg'>({totalCount})</span></h1>
              <div className='relative flex flex-row space-x-4'>
                <div className='flex flex-row w-36 justify-between items-center border border-gray-400 rounded-xl'>
                  <div
                    className={`w-1/2 flex flex-row items-center justify-center space-x-2 border-r py-2 rounded-l-xl px-3 cursor-pointer duration-300 ${selectedIcon === 'list' ? 'bg-gray-600' : ''}`}
                    onClick={() => handleIconClick('list')}
                  >
                    {selectedIcon === 'list' && <FaCheck className="text-purple-500 w-3 h-3 ml-1" />}
                    <MdFormatListBulleted className='w-5 h-5' />
                  </div>

                  <div
                    className={`px-3 py-2 w-1/2 flex flex-row items-center justify-center space-x-2 rounded-r-xl cursor-pointer duration-300 ${selectedIcon === 'grid' ? 'bg-gray-600' : ''}`}
                    onClick={() => handleIconClick('grid')}
                  >
                    {selectedIcon === 'grid' && <FaCheck className="text-purple-500 w-3 h-3 ml-1" />}
                    <LuLayoutGrid className='w-5 h-5' />
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
                      <IoCloseOutline className='text-gray-200 hover:bg-gray-600 ' onClick={() => setShowNewFolderInput(!showNewFolderInput)} />
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
                <div onClick={() => handleFolderClick(folder)}  key={folder.id} className={`rounded-xl border cursor-pointer duration-300 ${selectedIcon === 'list' ? 'border-gray-500 hover:border-gray-300' : 'border-gray-500 hover:border-gray-300'}`}>
                  {selectedIcon === 'list' ? (
                    <div className='flex items-center justify-between bg-[#303444] rounded-xl p-4'>
                      <div className='flex flex-row justify-between items-center w-full'>
                        <h1 className='text-2xl font-semibold text-gray-300'>{folder.name}</h1>
                        <p className='text-gray-400'>{folder.passwords ? folder.passwords.length : 0} {folder.passwords && folder.passwords.length === 1 ? 'item' : 'items'}</p>
                      </div>
                    </div>
                  ) : (
                    <div className='h-32 bg-[#20263d] rounded-xl border-t-[0.5px] border-gray-500'>
                      <div className='h-full bg-[#303444] rounded-xl flex flex-col justify-between'>
                        <div className='p-3 flex flex-row justify-between items-center'>
                          <h1 className='text-2xl font-semibold text-gray-300'>{folder.name}</h1>
                          <p className='text-gray-400'>{folder.passwords ? folder.passwords.length : 0} {folder.passwords && folder.passwords.length === 1 ? 'item' : 'items'}</p>
                        </div>
                        <div className='flex flex-col justify-center items-start p-4 text-gray-300'>
                          <h2 className='font-medium'>{folder.description}</h2>
                          <p className='font-light text-gray-300'>{folder.date_created}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PasswordManager;
