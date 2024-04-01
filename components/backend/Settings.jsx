import React, {useEffect} from 'react';
import { HiArrowLongLeft } from "react-icons/hi2";
import Image from 'next/image';
const Settings = ({ setActiveComponent }) => {
  const handleGoBack = () => {
    setActiveComponent('Files');
  };

  useEffect(() => {
    const links = document.querySelectorAll('ul.nav-links li');

    links.forEach(link => {
      link.addEventListener('click', () => {
        const targetId = link.dataset.target;
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Apply active class to the clicked link
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }, []);

  return (
    <div className='overflow-y-auto'>
      <button onClick={handleGoBack} className='text-gray-200 flex flex-row items-center h-8'> <HiArrowLongLeft className='mr-2 w-6 h-8'/> Back</button>
      <h1 className='text-4xl text-gray-100 font-semibold'>Account Settings</h1>
      <ul className='gap-x-8 flex flex-row text-gray-300 mt-4 nav-links'>
        <li className='border-b-[2px] border-gray-200 cursor-pointer active' data-target='details'>My details</li>
        <li className='border-b-[2px] border-gray-200 cursor-pointer' data-target='app'>App settings</li>
        <li className='border-b-[2px] border-gray-200 cursor-pointer' data-target='password'>Password</li>
        <li className='border-b-[2px] border-gray-200 cursor-pointer' data-target='delete'>Delete</li>
      </ul>


      {/*  Cards to edit */}
      <div id='details' className='w-full h-[300px] mt-8 bg-[#202020] rounded-lg border flex flex-row border-[#969696] shadow-lg'>
            <div className='w-1/3 m-4'>
                <h2 className='text-3xl font-semibold ml-4 mt-4 text-[#DFDFDF]'> Basic details</h2>
            </div>
            <div className='w-2/3'>
                <div className='flex flex-row gap-x-8'>
                    <Image src="/profilePic.svg" width={150} height={150} className='rounded-full mt-4' />
                    <button className='text-purple-500 text-xl'> Change </button>
                </div>
                <h2 className='text-gray-200 py-2 text-xl mt-4 font-semibold'> Username</h2>
                <label className="input input-bordered border-gray-500 mr-12 bg-[#222222] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow" placeholder="Username" />
                </label>
            </div>
      </div>

      <div id='app' className='w-full h-[300px] mt-8 bg-[#202020] rounded-lg border flex flex-row border-[#969696] shadow-lg'>
            <div className='w-1/3 m-4 '>
                <h2 className='text-3xl font-semibold ml-4 mt-4 text-[#DFDFDF]'> App settings</h2>
            </div>
            <div className='w-2/3'>
                    <h2 className='text-2xl text-[#DFDFDF] mt-8'> Default color theme <span className='text-sm text-gray-400 font-thin'>(It will load at next login)</span> </h2>
                    <label className="flex cursor-pointer gap-2 pt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    <h2 className='text-2xl text-[#DFDFDF] mt-10'> Billing </h2>
                    <h3 className='text-lg text-gray-200 py-2'> Current plan: <span className='bg-gray-500 px-2 py-1 text-lg text-white rounded-lg'> Pro </span></h3>
                    <p className='text-gray-300 text-sm'> You can cancel your paid plan anytime! </p>
                    <button className='text-red-400 cursor-pointer underline-offset-4 underline'> cancel subscription</button>
            </div>
      </div>

      <div id='password' className='w-full h-[300px] mt-8 bg-[#202020] rounded-lg border flex flex-row border-[#969696] shadow-lg'>
            <div className='w-1/3 m-4 '>
                <h2 className='text-3xl font-semibold ml-4 mt-4 text-[#DFDFDF]'> Password</h2>
            </div>
            <div className='w-2/3'>
                <h2 className='text-2xl text-[#DFDFDF] pb-2 mt-8'> Change password</h2>
                <div className='flex flex-row gap-8 w-full'>
                    <div className=''>
                        <p className='text-lg text-gray-200 py-1'> New password</p>
                        <label className="input input-bordered w-64 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" value="password" />
                        </label>
                    </div>
                    <div>
                        <p className='text-lg text-gray-200 py-1'> Confirm new password</p>
                        <label className="input input-bordered w-64 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" value="password" />
                        </label>
                    </div>
                </div>

                <h2 className='text-xl text-[#DFDFDF] mt-8 py-1'> Current password to save</h2>
                <div className='flex flex-row w-full'>
                    <label className="input input-bordered flex w-[61%] items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" value="password" />
                    </label>
                    <button className='w-48 ml-8 bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg text-[#DFDFDF] py-2 px-4'> Save </button>
                </div>

            </div>
      </div>

      <div id='delete' className='w-full h-64 mt-8 bg-[#202020] rounded-lg border flex flex-row mb-12 border-[#969696] shadow-lg'>
            <div className='w-1/3 m-4 '>
                <h2 className='text-3xl font-semibold ml-4 mt-4 text-[#DFDFDF]'> Profile</h2>
            </div>
            <div className='w-2/3'>
                <h2 className='text-xl text-gray-300 mt-8 mr-4 font-light'>
                    Delete your profile with all data inside. This cannot be reversed as 
                    all the data will be lost. Please make sure you dont have any important data saved here.
                </h2>
                <button className='px-4 py-2 bg-red-500 hover:bg-red-700 duration-300 text-gray-100 rounded-md mt-4 w-32'> Delete </button>
                <p className='text-xs font-thin text-gray-300 mt-16'> DataDepot application doesnt gurantee anything about your lost or stolen data!!! </p>
            </div>
      </div>

    </div>
  );
};

export default Settings;
