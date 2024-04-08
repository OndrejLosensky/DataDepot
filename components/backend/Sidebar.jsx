import React, { useState, useEffect } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import Link from 'next/link';
import FileUpload from './upload/FileUpload';
import { FaCheckCircle } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import ProgressBar from './upload/ProgressBar';
import { FaRegFolder } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar,setActiveComponent }) => {
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0){
        setIsScrolled(false);
        console.log("Resized to not scrolled size")
      } else if (window.screenY > 0) {
        setIsScrolled(true);
        console.log("Scrolled size is active")
      } else { console.log("Something is so fucking wrong!")}
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSettingsClick = () => {
    setActiveComponent('Settings');
  };

  return (
    <section className='h-screen'>
      {successAlertVisible && (
        <div role="alert" className={` text-white bg-green-500 absolute top-0 left-0 w-screen py-5 px-4 rounded flex items-center`}>
          <FaCheckCircle className="mr-2" />
          <span>File uploaded successfully!</span>
        </div>
      )}
      {errorAlertVisible && (
        <div role="alert" className={`text-white bg-red-500 absolute top-0 left-0 w-screen py-5 px-4 rounded flex items-center`}>
          <FiAlertCircle className="mr-2" />
          <span>Error uploading file. Please try again.</span>
        </div>
      )}

      <div className={`w-[250px] bg-[#323232] flex flex-col sticky top-4 justify-between max-h-screen h-[88%] mx-4 mt-4 rounded-2xl opacity-80 border border-gray-500 shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-[98%]'}`}>
        {/* Arrow for opening and closing sidebar */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#555555] border-gray-500 border text-gray-50 w-6 h-6 rounded-l-lg flex justify-center items-center cursor-pointer" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isOpen ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        {/* Top part (Upload + folders) */}
        <div className='text-white h-[80%] w-[100%] justify-between flex flex-col'>
          <div>
            <FileUpload
              successAlertVisible={setSuccessAlertVisible}
              errorAlertVisible={setErrorAlertVisible}
            />
            <div className='mx-5 mt-8'>
              <h2 className='text-2xl text-white border-b border-gray-400 mb-1'> Folders</h2>
              <ul className='list-none'>  
                <li className='py-1 flex flex-row items-center hover:bg-[#484848] rounded-md duration-500 cursor-pointer'> <FaRegFolder className='w-4 h-4 mr-1'/> Documents</li>
                <li className='py-1 flex flex-row items-center hover:bg-[#484848] rounded-md duration-500 cursor-pointer'> <FaRegFolder className='w-4 h-4 mr-1'/> Personal</li>
                <li className='py-1 flex flex-row items-center hover:bg-[#484848] rounded-md duration-500 cursor-pointer'> <FaRegFolder className='w-4 h-4 mr-1'/> School</li>
                <li className='py-1 flex flex-row items-center hover:bg-[#484848] rounded-md duration-500 cursor-pointer'> <FaRegFolder className='w-4 h-4 mr-1'/> Work</li>
              </ul>
            </div>
          </div>
          <ProgressBar />
        </div>
        {/* Bottom part (Setting + logout) */}
        <div className='bg-[#292929] rounded-b-2xl h-[20%] flex flex-col justify-center gap-y-3 text-[#DFDFDF]'>
          <button className='px-6 py-2 max-w-full mx-8 justify-center bg-[#454545] border border-gray-300 rounded-lg hover:text-gray-50 hover:border-gray-50 hover:bg-[#606060] duration-300 flex flex-row'>
            <TbLogout2 className='w-6 h-6 mr-4' />
            <Link href="/">Sign out</Link>
          </button>
          <button className='px-6 py-2 max-w-full mx-8 border justify-center border-gray-200 rounded-lg flex flex-row' onClick={handleSettingsClick}>
            <IoSettingsOutline className='w-6 h-6 mr-4' />
            Settings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
