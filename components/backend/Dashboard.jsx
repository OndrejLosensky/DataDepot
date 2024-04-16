// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import RequireAuth from '../../components/auth/RequireAuth';
import Loading from '../Loading';
import Image from 'next/image';
import Sidebar from './Sidebar';
import Head from 'next/head';
import Files from './Files';
import Settings from './Settings';
import Overview from './Overview'; // Import Overview component
import PasswordManager from './PasswordManager'; // Import PasswordManager component
import Analytics from './Analytics';
import { LuFiles } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import ProgressBar from './upload/ProgressBar';
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { auth } from '../../src/app/firebaseConfig';
import { IoAnalyticsOutline } from "react-icons/io5";
import { RiDashboard3Line } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { IoChevronLeft, IoChevronRight } from 'react-icons/io5';


const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState('Overview'); // Default active component
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Function to toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Conditional class to hide the sidebar when it's collapsed
  const sidebarClass = sidebarVisible ? 'w-[15%]' : 'w-[5%]';


  const handleLogout = async () => {
    // Display confirmation dialog
    const shouldLogout = window.confirm('Are you sure you want to log out?');
    
    // If user confirms, proceed with logout
    if (shouldLogout) {
        try {
            await signOut(auth);
            router.push('/'); // Redirect to the landing page after logout
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }
  };

  // Simulating loading completion after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const toolTipData = sidebarVisible ? 'Close the sidebar' : 'Open the sidebar';

  return (
    <div className='w-screen h-screen'>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>DataDepot</title>
      </Head>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className='flex flex-row w-screen min-h-screen'>
          {showConfirmation && (
          <div className="confirmation-modal">
              <p>Are you sure you want to log out?</p>
              <button onClick={() => setShowConfirmation(false)}>Cancel</button>
              <button onClick={handleLogout}>Confirm</button>
            </div>
          )}
            <div className={`w-[15%] shadow-lg h-screen sticky left-0 top-0 justify-between bg-[#323232] text-gray-200 flex flex-col duration-200 ${sidebarVisible ? 'w-[15%]' : 'w-[5%]'}`}>
            {/* Toggle sidebar button */}
            <div className="tooltip absolute top-1/2 right-0 tooltip-right" data-tip={toolTipData}>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#555555] border-gray-500 border text-gray-50 w-6 h-6 rounded-l-lg flex justify-center items-center cursor-pointer" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${sidebarVisible ? 'rotate-0 duration-500' : 'rotate-180 duration-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            <div>
              <div className='flex flex-row justify-center mt-4'>
                <Image src="/logo/light.svg" width={32} height={32} />
                {sidebarVisible && <p className='pt-1 text-2xl text-gray-100 pl-2'> DataDepot</p>}
              </div>
              {sidebarVisible && <p className='mx-4 px-4 pb-1 pt-6'> Menu</p>}
              <div className='mt-1 space-y-3 flex flex-col '>
                <button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4 mt-8'} rounded-md text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Overview' ? 'bg-purple-500 text-purple-200' : ''}`} onClick={() => handleComponentClick('Overview')}> <RiDashboard3Line className={`${sidebarVisible ? '':'w-6 h-10'}`} /> {sidebarVisible && 'Overview'} </button>
                <button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4'} rounded-md  text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Files' ? 'bg-purple-500 text-purple-200' : ''}`} onClick={() => handleComponentClick('Files')}> <LuFiles className={`${sidebarVisible ? '':'w-6 h-10'}`} /> {sidebarVisible && 'Files'} </button>
                <button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4'}  rounded-md text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'PasswordManager' ? 'bg-purple-500 text-purple-200' : ''}`} onClick={() => handleComponentClick('PasswordManager')}> <MdLockOutline className={`${sidebarVisible ? '':'w-6 h-10'}`} /> {sidebarVisible && 'Passwords'} </button>
                <button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4'}  rounded-md text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Analytics' ? 'bg-purple-500 text-purple-200' : ''}`} onClick={() => handleComponentClick('Analytics')}> <IoAnalyticsOutline className={`${sidebarVisible ? '':'w-6 h-10'}`} /> {sidebarVisible && 'Analytics'} </button>
              </div>
            </div>
            <div className='w-full flex flex-col space-y-2 mb-6'>
              {sidebarVisible && <ProgressBar />}
              <button onClick={handleLogout} className={`flex items-center ${sidebarVisible ? 'px-4 py-2 mx-5':'mx-4 px-2 py-2'} justify-center bg-[#454545] border border-gray-300 rounded-lg hover:text-gray-50 hover:border-gray-50 hover:bg-[#606060] duration-300`}>
                <TbLogout2 className={`${sidebarVisible ? 'mr-2':'w-6 h-6'}`} />
                {sidebarVisible && <span className="text-white">Sign out</span>}
              </button>
              <button onClick={() => handleComponentClick('Settings')} className={`flex items-center ${sidebarVisible ? 'px-4 py-2 mx-5':'mx-4 px-2 py-2'} justify-center border border-gray-300 rounded-lg hover:border-gray-300 duration-300`}>
                <IoSettingsOutline className={`${sidebarVisible ? 'mr-2':'w-6 h-6'}`} />
                {sidebarVisible && <span className="text-gray-200">Settings</span>}
              </button>
            </div>

            </div>


            <div className={`m-4 ${sidebarVisible ? 'w-[85%]':'w-[95%]'}`}>
              {activeComponent === 'Files' && <Files />}
              {activeComponent === 'Settings' && <Settings setActiveComponent={setActiveComponent} />}
              {activeComponent === 'Overview' && <Overview />}
              {activeComponent === 'PasswordManager' && <PasswordManager />}
              {activeComponent === 'Analytics' && <Analytics />}
            </div>
        </div>
      )}
    </div>
  );
}

export default RequireAuth(Dashboard);
