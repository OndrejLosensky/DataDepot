import React, { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-[250px] bg-[#323232] flex flex-col justify-between max-h-screen h-[730px] mx-4 mt-4 rounded-2xl opacity-80 border border-gray-500 shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-[98%]'}`}>
      {/* Arrow for opening and closing sidebar */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#555555] border-gray-500 border text-gray-50 w-6 h-6 rounded-l-lg flex justify-center items-center cursor-pointer" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      {/* Top part (Upload + folders) */}
      <div>

      </div>

      {/* Bottom part (Setting + logout) */}
      <div className='bg-[#292929] rounded-b-2xl h-1/6 flex flex-col justify-center gap-y-3 text-[#DFDFDF]'>
        <button className='px-6 py-2 max-w-full mx-8 justify-center bg-[#454545] border border-gray-300 rounded-lg hover:text-gray-50 hover:border-gray-50 hover:bg-[#606060] duration-300 flex flex-row'>
          <TbLogout2 className='w-6 h-6 mr-4' />
          <Link href="/">Sign out</Link>
        </button>
        <button className='px-6 py-2 max-w-full mx-8 border justify-center border-gray-200 rounded-lg flex flex-row '>
          <IoSettingsOutline className='w-6 h-6 mr-4' />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
