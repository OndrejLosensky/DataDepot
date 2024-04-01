import React, {useState} from 'react';
import RequireAuth from '../../components/auth/RequireAuth';
import Loading from '../Loading';
import Image from 'next/image';
import ThemeController from '../ThemeController';
import Sidebar from './Sidebar';
import Head from 'next/head';
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading completion after 3 seconds
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);


  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>DataDepot</title>
      </Head>
      {isLoading ? (
        <div className=''>
          <Loading/>
        </div>
      ) : (
        <div className='w-screen min-h-screen bg-[#18191A]'>
            <nav className='w-screen h-16 bg-[#111212] px-8 flex items-center justify-between'>
                {/* Left side (Logo) */}
                <div className='flex flex-row'>
                  <Image src="/logo/light.svg" width={32} height={32} className=''></Image>
                  <p className='pt-1 text-2xl text-gray-100 pl-2'> DataDepot</p>
                </div>

                {/* Center (searchbar) */}
                <div>
                  <label className="input input-bordered h-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <input type="text" className="grow w-64" placeholder="Search" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                  </label>
                </div>
                {/* Right side (toggle theme, profile button) */}
                <div className='flex flex-row '>
                    <ThemeController/>
                    <Image src="/profilePic.svg" width={48} height={48} className='rounded-full ml-8 cursor-pointer'></Image>
                </div>
            </nav>
            <Sidebar/>
        </div>
      )}
    </div>
  )
}

export default RequireAuth(Dashboard);