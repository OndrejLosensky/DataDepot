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

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState('Overview'); // Default active component
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  return (
    <div className='w-screen'>
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
            <div className='w-[15%] shadow-lg justify-between bg-[#323232] text-gray-200 flex flex-col'>
              <div>
                <div className='flex flex-row justify-center mt-4'>
                  <Image src="/logo/light.svg" width={32} height={32} />
                  <p className='pt-1 text-2xl text-gray-100 pl-2'> DataDepot</p>
                </div>
                <p className='mx-4 px-4 pb-1 pt-6'> Menu</p>
                <div className='mt-1 space-y-3 flex flex-col '>
                  <button className={`px-4 py-2  rounded-md mx-4 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Overview' ? 'bg-purple-500 text-purple-200' : ''}`} onClick={() => handleComponentClick('Overview')}> <RiDashboard3Line/> Overview </button>
                  <button className={`px-4 py-2  rounded-md mx-4 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Files' ? 'bg-purple-500 text-purple-200' : ''}`} onClick={() => handleComponentClick('Files')}> <LuFiles/> Files </button>
                  <button className={`px-4 py-2  rounded-md mx-4 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'PasswordManager' ? 'bg-purple-500 text-purple-200' : ''}`} onClick={() => handleComponentClick('PasswordManager')}> <MdLockOutline/> Password manager</button>
                  <button className={`px-4 py-2  rounded-md mx-4 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Analytics' ? 'bg-purple-500 text-purple-200' : ''}`} onClick={() => handleComponentClick('Analytics')}> <IoAnalyticsOutline/> Analytics </button>
                </div>
              </div>
              <div className='w-full flex flex-col space-y-2 mb-6'>
                <ProgressBar />
                <button onClick={handleLogout} className='px-6 py-2 mt-6 mx-5 justify-center bg-[#454545] border border-gray-300 rounded-lg hover:text-gray-50 hover:border-gray-50 hover:bg-[#606060] duration-300 flex flex-row'>
                    <TbLogout2 className='w-6 h-6 mr-4' />
                    Sign out
                </button>
                <button onClick={() => handleComponentClick('Settings')}  className='px-6 py-2  mx-5 border justify-center border-gray-200 rounded-lg flex flex-row'>
                  <IoSettingsOutline className='w-6 h-6 mr-4'/>
                  Settings
                </button>
              </div>
            </div>

            <div className='w-[85%] m-4'>
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
