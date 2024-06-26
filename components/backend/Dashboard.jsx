// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import RequireAuth from '../../components/auth/RequireAuth';
import Loading from '../Loading';
import Image from 'next/image';
import Head from 'next/head';
import Files from './Files';
import Settings from './Settings';
import Analytics from './Analytics/Analytics'; // Import Overview component
import PasswordManager from './PasswordManager/PasswordManager'; // Import PasswordManager component
import { LuFiles } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import ProgressBar from './upload/ProgressBar';
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { auth } from '../../src/app/firebaseConfig';
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import ProgressBarRadial from './upload/ProgressBarRadial';
import { FaUsersCog } from "react-icons/fa";
import Users from './Users';
import Lab from './Lab';
import { ImLab } from "react-icons/im";
import CodeSnippets from './CodeSnippets';
import { FaCode } from "react-icons/fa6";
import Link from 'next/link';
import Notes from '../backend/Notes';
import { FaRegStickyNote } from "react-icons/fa";
import GetStarted from './GetStarted';


const Dashboard = ({isUserActive}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState('getStarted');
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'h') {
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };


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
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const onCloseModal = () => {
    document.getElementById('logout_modal').close();
  };

  const confirmDelete = async () => {
    try {
      await signOut(auth);
      router.push('/'); // Redirects to the landing page after logout
  } catch (error) {
      console.error('Error signing out:', error);
  }
  };

  const toolTipData = sidebarVisible ? 'Close the sidebar' : 'Open the sidebar';

  return (
    <div className='w-screen h-screen '>
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

            <button onClick={() => handleComponentClick('Lab')} className='absolute bottom-4 right-4 p-2 bg-purple-600 rounded-full hover:bg-purple-700 duration-200'> <ImLab className='w-4 h-4 text-gray-50'/> </button>

            <div className={`shadow-lg h-screen border-r-[0.3px] border-gray-600 sticky left-0 top-0 justify-between bg-[#2d2f36] text-gray-200 flex flex-col duration-200 ${sidebarVisible ? 'w-[15%]' : 'w-[5%]'}`}>
            {/* Toggle sidebar button */}
            <div className={`tooltip absolute ${sidebarVisible ? 'translate-x-0':'translate-x-0'} duration-300 right-0 top-1/2 tooltip-right`} data-tip={toolTipData}>
              <div className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#555555] border-gray-500 border text-gray-50 w-6 h-6 ${sidebarVisible ? 'rounded-l-lg':'rounded-l-lg'} flex justify-center items-center cursor-pointer`} onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${sidebarVisible ? 'rotate-0 duration-500' : 'rotate-180 duration-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            <div>
              <div className='flex flex-row justify-center py-4 border-b  border-gray-400' onClick={() => handleComponentClick('getStarted')}>
                <Image alt='logo' src="/logo/light.svg" width={32} height={32} />
                {sidebarVisible && <p className='text-2xl text-gray-100 pl-2'> DataDepot</p>}
              </div>
              
              {sidebarVisible && <p className='mx-4 pb-1'></p>}
              <div className='mt-2 space-y-3 flex flex-col'>
                <button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4 mt-8'} rounded-md hover:text-purple-200 duration-300 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Analytics' ? 'bg-purple-500 text-purple-200 hover:text-purple-100' : ''}`} onClick={() => handleComponentClick('Analytics')}> <IoAnalyticsOutline className={`${sidebarVisible ? '':'w-5 h-12'}`} /> {sidebarVisible && 'Analytics'} </button>
                {/*<button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4'} rounded-md  hover:text-purple-200 duration-300 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Files' ? 'bg-purple-500 text-purple-200 hover:text-purple-100' : ''}`} onClick={() => handleComponentClick('Files')}> <LuFiles className={`${sidebarVisible ? '':'w-5 h-12'}`} /> {sidebarVisible && 'Files'} </button>*/}
                <button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4'}  rounded-md hover:text-purple-200 duration-300 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'PasswordManager' ? 'bg-purple-500 text-purple-200 hover:text-purple-100' : ''}`} onClick={() => handleComponentClick('PasswordManager')}> <MdLockOutline className={`${sidebarVisible ? '':'w-5 h-12'}`} /> {sidebarVisible && 'Passwords'} </button>
                <button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4'}  rounded-md hover:text-purple-200 duration-300 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'CodeSnippets' ? 'bg-purple-500 text-purple-200 hover:text-purple-100' : ''}`} onClick={() => handleComponentClick('CodeSnippets')}> <FaCode className={`${sidebarVisible ? '':'w-5 h-12'}`} /> {sidebarVisible && 'Coding'} </button>
                <button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4'}  rounded-md hover:text-purple-200 duration-300 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Notes' ? 'bg-purple-500 text-purple-200 hover:text-purple-100' : ''}`} onClick={() => handleComponentClick('Notes')}> <FaRegStickyNote className={`${sidebarVisible ? '':'w-5 h-12'}`} /> {sidebarVisible && 'Notes'} </button>
                {/*<button className={`${sidebarVisible ? 'px-4 py-2  mx-4':'justify-center mx-4'}  rounded-md hover:text-purple-200 duration-300 text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer ${activeComponent === 'Users' ? 'bg-purple-500 text-purple-200 hover:text-purple-100' : ''}`} onClick={() => handleComponentClick('Users')}> <FaUsersCog className={`${sidebarVisible ? '':'w-5 h-12'}`} /> {sidebarVisible && 'Users'} </button>*/}
              </div>

            </div>
            <div className='w-full flex flex-col space-y-2 mb-6'>
              {sidebarVisible ?  (<ProgressBar />) : (<ProgressBarRadial/>)}
              <button onClick={()=>document.getElementById('logout_modal').showModal()} className={`flex items-center ${sidebarVisible ? 'px-4 py-2 mx-5':'mx-4 px-2 py-2'} justify-center bg-[#454545] border border-gray-300 rounded-lg hover:text-gray-50 hover:border-gray-50 hover:bg-[#606060] duration-300`}>
                <TbLogout2 className={`${sidebarVisible ? 'mr-2':'w-6 h-6'}`} />
                {sidebarVisible && <span className="text-white">Sign out</span>}
              </button>
              <button onClick={() => handleComponentClick('Settings')} className={`flex items-center ${sidebarVisible ? 'px-4 py-2 mx-5':'mx-4 px-2 py-2'} justify-center border border-gray-300 rounded-lg hover:border-gray-300 duration-300`}>
                <IoSettingsOutline className={`${sidebarVisible ? 'mr-2':'w-6 h-6'}`} />
                {sidebarVisible && <span className="text-gray-200">Settings</span>}
              </button>
            </div>

            </div>

            <dialog id="logout_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-xl text-gray-200">Are you sure you want to log out?</h3>
                <p className="py-4 text-gray-300">Clicking on the sign out button will take you to landing page. You can then login again if you need to.</p>
                <div className='flex flex-row items-center space-x-6 mt-4 justify-between w-full'>
                  <button onClick={onCloseModal} className='w-1/2 text-center text-gray-400 hover:bg-gray-200 duration-300 hover:text-gray-800 py-3 border border-gray-400 rounded-md'> Cancel</button>
                  <button onClick={confirmDelete}  className='w-1/2 text-center text-gray-200 hover:bg-red-600 duration-300 bg-red-500 rounded-md shadow-lg py-3'> Sign out </button>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>


            <div className={`m-4 font-sora ${sidebarVisible ? 'w-[85%]':'w-[95%]'}`}>
              {activeComponent === 'Files' && <Files isUserActive={isUserActive} />}
              {activeComponent === 'Settings' && <Settings setActiveComponent={setActiveComponent} />}
              {activeComponent === 'Analytics' && <Analytics isUserActive={isUserActive}/>}
              {activeComponent === 'PasswordManager' && <PasswordManager isUserActive={isUserActive}/>}
              {activeComponent === 'Notes' && <Notes isUserActive={isUserActive}/>}
              {activeComponent === 'getStarted' && <GetStarted  setActiveComponent={setActiveComponent}/>}
              {activeComponent === 'Lab' && <Lab/>}
              {activeComponent === 'CodeSnippets' && <CodeSnippets isUserActive={isUserActive}/>}

            </div>
        </div>
      )}
    </div>
  );
}

export default RequireAuth(Dashboard);
