import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
import Image from 'next/image';
import SkeletonFolder from '../../SkeletonFolder';
import { LuShieldCheck } from "react-icons/lu";

const PasswordManager = ({ isUserActive }) => {
  const [folders, setFolders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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
  const [showBanner, setShowBanner] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [alert, setAlert] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);


  const closeBanner = () => {
    setShowBanner(false);
    setShowFeature(true);
  };

  const handleInputClick = () => {
    setIsClicked(true);
  };

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

  useEffect(() => {
    fetchFolders();
  }, [searchQuery]);

  const fetchFolders = async () => {
    try {
      const response = await axios.get('/api/getFolders');
      setFolders(response.data);
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.error('Failed to fetch folders:', error.message);
      setFolders([]);
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

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    setSelectedComponent('passwordsPage');
  };

  const handleClosePasswordsPage = () => {
    setSelectedFolder(null);
    setSelectedComponent('folders');
    fetchFolders();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredFolders = folders.filter(folder => {
    return folder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           folder.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className='w-auto h-[100%] overflow-hidden mr-4'>
      {/* Help component */}
      {selectedComponent === 'help' && (
        <div className='w-full h-full overflow-hidden mb-12'>
          <button className='flex flex-row absolute top-4 items-center px-4 text-gray-200 py-1 bg-gray-700 mb-4 rounded-lg shadow-lg' onClick={() => setSelectedComponent('folders')} > <BsArrow90DegLeft className='mr-2'/> Back </button>
          <Help onClose={() => setSelectedComponent('help')} />
        </div>
      )}

      {/* Passwords component */}
      {selectedComponent === 'passwordsPage' && (
        <div className='w-full h-full mb-12'>
          <Passwords folder={selectedFolder} onClose={handleClosePasswordsPage} showAlert={showAlert} />
        </div>
      )}

      {/* Alert banner */}
      {alert && (
        <div className={`absolute bottom-6  flex flex-row items-center right-4 bg-${alert.type === 'success' ? 'green' : 'red'}-500 text-white text-center py-4 px-10`}>
          {alert.type === 'success' ? <FaRegCircleCheck className='mr-2'/> : <IoCloseOutline className='mr-2'/>}
          {alert.message}
        </div>
      )}

      {/* Generate Password component */}
      {selectedComponent === 'generate' ? (
        <div className='w-auto h-full'>
          <button className='flex flex-row absolute top-4 items-center px-4 text-gray-200 py-1 bg-gray-700 rounded-lg shadow-lg' onClick={() => setSelectedComponent('folders')} > <BsArrow90DegLeft className='mr-2'/> Back </button>
          <GeneratePassword onClose={() => setSelectedComponent('generate')} />
        </div>
      ) : (
        <div className={` h-[100%] flex flex-col justify-between space-y-6 ${selectedComponent === 'passwordsPage' ? 'hidden':''}`}>
          {/*  Main content */}
          <div className='space-y-4'>  
            {/* Navbar */}
            <div className='flex flex-row justify-between overflow-hidden py-1 h-12  items-center'>
              <div className='flex flex-row gap-x-4'>
                {/* Add Password button */}
                <button
                  onClick={() => setShowAddPasswordInput(!showAddPasswordInput)}
                  className='bg-purple-500 text-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-purple-600 duration-300'
                >
                  + Add Password
                </button>
                {/* Generate Secure Password button */}
                <button
                  onClick={() => setSelectedComponent('generate')}
                  className='border border-gray-300 hover:bg-[#323a59] hover:border-gray-100 duration-300 text-gray-300 px-4 py-2 rounded-md'
                >
                  Generate Secure Password
                </button>
                {/* Search Input */}
                <div className='z-10'>
                  <SearchInput placeholder="Search passwords..." setSearchQuery={setSearchQuery} />
                </div>
              </div>
              <div className='flex flex-row items-center'>
                {/* Help button */}
                <button onClick={() => setSelectedComponent('help')}> <AiOutlineQuestion className='text-gray-200 bg-[#323232] hover:text-gray-50 duration-300 hover:shadow-xl hover:border-gray-400 border border-transparent w-7 h-7 mr-2 p-1 rounded-full' /></button>
                {/* Profile component */}
                <div className='flex flex-row relative'>
                  <Profile isUserActive={isUserActive} />
                </div>
              </div>
            </div>

            {/* Add Password form */}
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
            
            {/* Data defender */}
            <div className='w-full h-64 flex space-x-4 flex-col text-neutral-300 items-center justify-center'>
                 <div className='flex flex-row items-center space-x-4'>
                    <LuShieldCheck className='w-12 h-12'/>  
                    <h1 className="relative z-10 text-5xl bg-clip-text text-transparent bg-gradient-to-br from-neutral-100 to-neutral-500">
                      DataDefender
                    </h1>
                 </div>
                 <div className='text-lg font-thin'>
                  Coming soon
                </div>
            </div>
           
            {/* Passwords (cards with folders) */}
            <div className='w-full h-auto flex flex-col overflow-hidden'>
              <div className='flex flex-row  justify-between items-center '>
                <h1 className='text-2xl font-semibold text-gray-200'> Folders <span className='font-thin text-lg'>
                    {" "}
                    {" "}
                    <span className="text-gray-300 font-thin">
                        ({filteredFolders.length} / {folders.length})
                    </span></span>
                </h1>
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

              <div className='grid grid-cols-4 gap-4 h-[85%] mt-4 w-full'>
                {loading && [1, 2, 3, 4, 5, 6, 7, 8].map(index => <SkeletonFolder key={index} />)}

                {filteredFolders.length > 0 ? (
                  filteredFolders.map((folder, index) => (
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
                  <div className="col-span-4 h-full text-gray-400 flex items-center justify-center">
                    <div className='flex flex-row space-x-2 items-center'>
                      <CiFolderOff className='w-10 h-10'/>
                      <h2 className='text-xl'>No folders were found...</h2>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
          {/* Pagination */}
          <div className='flex flex-row w-full h-12 items-center justify-end' >
            <Pagination/>
          </div>
        </div>
      )}
    </div>
  )
}

export default PasswordManager;
