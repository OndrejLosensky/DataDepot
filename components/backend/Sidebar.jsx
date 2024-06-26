import React, { useState, useEffect } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import FileUpload from './upload/FileUpload';
import { FaCheckCircle } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import ProgressBar from './upload/ProgressBar';
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { auth } from '../../src/app/firebaseConfig';

const Sidebar = ({ isOpen, toggleSidebar, setActiveComponent }) => {
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = async () => {
      const shouldLogout = window.confirm('Are you sure you want to log out?');
      
      if (shouldLogout) {
          try {
              await signOut(auth);
              router.push('/'); // Redirects to the landing page after logout
          } catch (error) {
              console.error('Error signing out:', error);
          }
      }
  };
  

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

  const toolTipData = isOpen ? 'Close the sidebar' : 'Open the sidebar';

  return (
    <section className='max-h-screen'>
      {showConfirmation && (
          <div className="confirmation-modal">
              <p>Are you sure you want to log out?</p>
              <button onClick={() => setShowConfirmation(false)}>Cancel</button>
              <button onClick={handleLogout}>Confirm</button>
          </div>
      )}
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

      <div className={`w-[250px] bg-[#323232] flex flex-col sticky top-4 justify-between max-h-screen h-[95%] mx-4 mt-4 rounded-2xl opacity-80 border border-gray-500 shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-[98%]'}`}>
        {/* Arrow for opening and closing sidebar */}
        <div className="tooltip absolute top-1/2 right-0 tooltip-right" data-tip={toolTipData}>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#555555] border-gray-500 border text-gray-50 w-6 h-6 rounded-l-lg flex justify-center items-center cursor-pointer" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isOpen ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        

        {/* Top part (Upload + folders) */}
        <div className='text-white h-[80%] w-[100%] justify-between flex flex-col'>
          <div className='justify-center flex flex-col space-y-3'>
            <button className='py-2 px-4 text-purple-600 bg-purple-200 font-semibold mt-3 rounded-md mx-5'> Password manager </button>
            <button className='py-2 px-4 text-purple-600 bg-purple-200 font-semibold mt-3 rounded-md mx-5'> Statistics </button>
            <FileUpload
              successAlertVisible={setSuccessAlertVisible}
              errorAlertVisible={setErrorAlertVisible}
            />
          </div>
          <ProgressBar />
        </div>
        {/* Bottom part (Setting + logout) */}
        <div className='bg-[#292929] rounded-b-2xl h-[20%] flex flex-col justify-center gap-y-3 text-[#DFDFDF]'>
          <button className='px-6 py-2 max-w-full mx-8 justify-center bg-[#454545] border border-gray-300 rounded-lg hover:text-gray-50 hover:border-gray-50 hover:bg-[#606060] duration-300 flex flex-row' onClick={handleLogout}>
              <TbLogout2 className='w-6 h-6 mr-4' />
              Sign out
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
