// components/backend/Lab/PasswordManager.jsx
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import { AiOutlineQuestion } from "react-icons/ai";
import Profile from '../Profile';
import { IoCloseOutline } from "react-icons/io5";
import GeneratePassword from './GeneratePassword';
import { BsArrow90DegLeft } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";
import { FaCheck } from 'react-icons/fa';
import Help from '../Help';
import Passwords from './Passwords';
import { IoFolderOpenOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import SearchInput from '../SearchInput';
import Pagination from './Pagination';
import { CiFolderOff } from "react-icons/ci";
import FolderPerPage from './FolderPerPage';


const PasswordManager = ({ isUserActive }) => {
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');
  const [newFolderDescription, setNewFolderDescription] = useState('');
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [showAddPasswordInput, setShowAddPasswordInput] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [app, setApp] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('folders'); // 'folders', 'generate', 'help', 'passwordsPage'
  const [selectedIcon, setSelectedIcon] = useState('grid');
  const [isClicked, setIsClicked] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showFeature, setShowFeature] = useState(false);

  const closeBanner = () => {
    setShowBanner(false);
    setShowFeature(true);
  };

  const handleInputClick = () => {
    setIsClicked(true);
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 3000); // Hide the alert after 3 seconds
  };

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
    fetchFolders();
  };

  const fetchFolders = async () => {
    try {
        const response = await axios.get('/api/getFolders');
        setFolders(response.data);
    } catch (error) {
        console.error('Failed to fetch folders:', error.message);
        // Ensure that even if there's an error, the response is sent
        setFolders([]); // Set an empty array or handle the error state accordingly
    }
};

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};


const handleNewFolderSubmit = async () => {
  if (newFolderName.trim() !== '' && newFolderDescription.trim() !== '') {
      try {
          const response = await fetch('/api/newFolder', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                  folderName: newFolderName,
                  folderDescription: newFolderDescription
              }),
          });
          if (response.ok) {
              await fetchFolders();
              setNewFolderName('');
              setNewFolderDescription('');
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
            showAlert('success', 'Successfully deleted the password');
            setUsername('');
            setPassword('');
            setApp('');
            setSelectedFolder('');
            await fetchFolders();
            await fetchTotalPasswords(); 
        } else {
            console.error('Failed to add password:', response.data.error);
            showAlert('error', 'Failed to delete create the password');
        }
    } catch (error) {
        console.error('Failed to add password:', error.message);
    }
    setShowAddPasswordInput(false);
};


  const [totalCount, setTotalCount] = useState(0);
        
  const fetchTotalPasswords = async () => {
    try {
        const response = await axios.get('/api/totalFolders');
        setTotalCount(response.data.totalCount);
    } catch (error) {
        console.error(error);
    }
  };

    useEffect(() => {
        fetchTotalPasswords();
    }, []);

  return (
    <div className='w-auto h-[100%] overflow-hidden mr-4'>
      {selectedComponent === 'help' && (
        <div className='w-full h-full overflow-hidden mb-12'>
          <button className='flex flex-row absolute top-4 items-center px-4 text-gray-200 py-1 bg-gray-700 mb-4 rounded-lg shadow-lg' onClick={() => setSelectedComponent('folders')} > <BsArrow90DegLeft className='mr-2'/> Back </button>
          <Help onClose={() => setSelectedComponent('help')} />
        </div>
      )}

      {selectedComponent === 'passwordsPage' && (
        <div className='w-full h-full mb-12'>
          <Passwords folder={selectedFolder} onClose={handleClosePasswordsPage} showAlert={showAlert} />
        </div>
      )}

      {alert && (
        <div className={`absolute bottom-6  flex flex-row items-center right-4 bg-${alert.type === 'success' ? 'green' : 'red'}-500 text-white text-center py-4 px-10`}>
          {alert.type === 'success' ? <FaRegCircleCheck className='mr-2'/> : <IoCloseOutline className='mr-2'/>}
          {alert.message}
        </div>
      )}

      {selectedComponent === 'generate' ? (
        <div className='w-auto h-full'>
          <button className='flex flex-row absolute top-4 items-center px-4 text-gray-200 py-1 bg-gray-700 rounded-lg shadow-lg' onClick={() => setSelectedComponent('folders')} > <BsArrow90DegLeft className='mr-2'/> Back </button>
          <GeneratePassword onClose={() => setSelectedComponent('generate')} />
        </div>
      ) : (
        <div className={` h-[100%] space-y-6 ${selectedComponent === 'passwordsPage' ? 'hidden':''}`}>
          {/* Navbar */}
          <div className='flex flex-row justify-between overflow-hidden py-1 h-[5%]  items-center'>
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
              <div className='z-10 '>
                <SearchInput placeholder="Search passwords"/>
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
          {showBanner && (
          <div className='w-full bg-gray-800 h-[25%] flex flex-row overflow-hidden'>
            <div className='w-1/4 flex justify-center items-center'>
              <Image src="/lock.svg" width={150} height={150} alt='Icon for banner' className='rounded-full bg-gray-500 m-16 p-6' />
            </div>
            <div className='w-3/4 relative justify-center space-y-2 flex flex-col'>
              <button className='absolute right-4 top-4 hover:bg-gray-600 duration-300 p-1 rounded-full' onClick={closeBanner}> <IoClose className='text-gray-200 w-5 h-5' /> </button>
              <h1 className='text-3xl font-bold text-gray-200'> Welcome to PasswordDepot</h1>
              <p className='font-light text-gray-300'> You can store your passwords here and make them as much as organized as you like </p>
              <br />
              <div className='flex flex-row space-x-6'>
                <button className='px-4 py-2 bg-purple-500 hover:bg-purple-600 duration-300 text-gray-200 rounded-md shadow-md'> See how it works</button>
                <button className='text-gray-300 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-300 hover:text-gray-800 duration-500 '> Maybe later</button>
              </div>
            </div>
          </div>
        )}
        {showFeature && (
          <div className="flex items-center justify-center h-[25%] transition-height duration-300">
            <h1 className="text-3xl font-semibold text-gray-300">Feature Coming Soon</h1>
          </div>
        )}

          {/* Passwords (cards with folders) */}
          <div className='w-full h-[70%] flex flex-col overflow-hidden'>
            <div className='flex flex-row h-1/6 justify-between items-center '>
              <h1 className='text-2xl font-semibold text-gray-200'> Folders <span className='font-thin text-lg'>({totalCount})</span></h1>
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
                  <div className='absolute bg-[#41434e] w-full top-full right-0 p-2 mt-2 rounded-lg shadow-lg z-10'>
                    <div className='flex flex-row justify-between items-center'>
                      <p className='font-light text-lg text-gray-300'> Create new folder</p>
                      <IoCloseOutline className='text-gray-200 hover:bg-gray-600 w-6 h-6 rounded-full duration-200 cursor-pointer ' onClick={() => setShowNewFolderInput(!showNewFolderInput)} />
                    </div>
                    <div className='flex w-full flex-col items-center'>
                      <input
                        type='text'
                        placeholder='Enter folder name'
                        value={newFolderName}
                        onChange={(e) => setNewFolderName(e.target.value)}
                        className='mt-2 p-2 w-full text-sm border rounded-md'
                      />
                      <input
                        type='text'
                        placeholder='Enter folder description'
                        value={newFolderDescription}
                        onChange={(e) => setNewFolderDescription(e.target.value)}
                        className='mt-2 w-full p-2 text-sm border rounded-md'
                      />
                      <button
                        type='submit'
                        onClick={handleNewFolderSubmit}
                        className='mt-4 px-2 py-1 text-sm w-full bg-purple-500 text-gray-200 rounded-md shadow-md hover:bg-purple-600 duration-300'
                      >
                        Create Folder
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='grid grid-cols-4 h-4/6 w-[100%] gap-4 relative '>
            {folders.length > 0 ? (
              folders.map((folder) => (
                <div key={folder.id} className={`duration-300 ${selectedIcon === 'list' ? 'border-gray-500 hover:border-gray-300' : 'border-gray-500 hover:border-gray-300'}`}>
                  {selectedIcon === 'list' ? (
                    <div onClick={() => handleFolderClick(folder)} className='flex h-16 cursor-pointer items-center justify-between bg-[#303444] rounded-sm p-4 border border-gray-500 hover:border-gray-200 duration-300'>
                      <div className='flex flex-row justify-between items-center w-full'>
                          <div className='flex flex-row items-center'>
                            <Image alt='static icon' width={48} height={24} src="/google.png" className='mr-2'/>
                            <h1 className='text-xl font-semibold text-gray-300'>{truncateText(folder.name, 20)}</h1>
                          </div>
                        <p className='text-gray-400'>{folder.passwords ? folder.passwords.length : 0} {folder.passwords && folder.passwords.length === 1 ? 'item' : 'items'}</p>
                      </div>
                    </div>
                  ) : (
                    <div onClick={() => handleFolderClick(folder)} className='h-32 bg-[#20263d] cursor-pointer rounded-sm border border-gray-500 hover:border-gray-200 duration-300'>
                      <div className='h-full bg-[#303444] rounded-sm flex flex-col justify-between'>
                        <div className='p-3 flex flex-row justify-between items-center'>
                          <div className='flex flex-row items-center'>
                            <Image alt='static icon' width={48} height={24} src="/google.png" className='mr-2'/>
                            <h1 className='text-xl font-semibold text-gray-300'>{folder.name}</h1>
                          </div>
                          <p className='text-gray-400'>{folder.passwords ? folder.passwords.length : 0} {folder.passwords && folder.passwords.length === 1 ? 'item' : 'items'}</p>
                        </div>
                        <div className='flex flex-col justify-center items-start p-4 text-gray-300 pb-2'>
                          <p className='font-thin'>{truncateText(folder.description, 30)}</p>
                          <p className='font-light text-gray-300'>{folder.date_created}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className=" h-full text-gray-400 flex absolute mt-36 ml-[630px]">
                 <div className='h-12 flex flex-row space-x-2 items-center'>
                    <CiFolderOff className='w-10 h-10'/>
                   <h2 className='text-xl'> No folders were found ... </h2>
                 </div>
              </div>
            )}
          </div>

          <div className='flex flex-row w-full h-1/3 items-center justify-between' >
            <FolderPerPage/>
            <Pagination/>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PasswordManager;
