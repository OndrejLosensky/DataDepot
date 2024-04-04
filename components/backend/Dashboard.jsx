import React, { useState, useEffect } from 'react';
import '../../src/app/bg.css'
import RequireAuth from '../../components/auth/RequireAuth';
import Loading from '../Loading';
import Image from 'next/image';
import ThemeController from '../ThemeController';
import Sidebar from './Sidebar';
import Head from 'next/head';
import Files from './Files';
import Settings from './Settings';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState('Files'); // Default active component

  // Simulating loading completion after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'h') {
        toggleSidebar();
        event.preventDefault(); // Prevents default behavior of CTRL + H (e.g., browser history)
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>DataDepot</title>
      </Head>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className='flex flex-col h-screen'> {/* bg-[#18191A] */}
          {/* Navbar */}
          <nav className='py-2 shadow-lg border-b-[0.4px] border-gray-600 bg-[#111212] px-8 flex items-center justify-between'>
            {/* Logo and title */}
            <div className='flex flex-row'>
              <Image src="/logo/light.svg" width={32} height={32} />
              <p className='pt-1 text-2xl text-gray-100 pl-2'> DataDepot</p>
            </div>

            {/* Search bar */}
            <div>
              <label className="input input-bordered h-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                <input type="text" className="grow w-64" placeholder="Search" />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
              </label>
            </div>

            {/* Theme toggle and profile picture */}
            <div className='flex flex-row '>
              <ThemeController />
              <Image src="/profilePic.svg" width={48} height={48} className='rounded-full ml-8 cursor-pointer' />
            </div>
          </nav>

          {/* Sidebar and main content */}
          <div className='flex flex-1'>
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} setActiveComponent={setActiveComponent} />

            {/* Main content */}
            <div className={`m-4  ${isSidebarOpen ? 'flex-1' : 'w-full flex-grow'}`}>
              {activeComponent === 'Files' && <Files />}
              {activeComponent === 'Settings' && <Settings setActiveComponent={setActiveComponent} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequireAuth(Dashboard);
