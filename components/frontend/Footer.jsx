import React from 'react';
import { FaWarehouse, FaGithub } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  const githubUrl = 'https://github.com/OndrejLosensky';
  const IgUrl = 'https://github.com/OndrejLosensky';
  
  return (
    <footer className="footer w-screen items-center py-4 mb-2 text-gray-300">
      <div className='w-full md:w-[70%] border-t-[0.5px] border-gray-500 pt-4 flex py-2 flex-col md:flex-row items-center mx-auto justify-between'>
        <aside className="items-center flex flex-col md:flex-row gap-2 grid-flow-col pt-2 ml-2 md:ml-0">
          <span className="relative mt-1 flex flex-row items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200  to-purple-300">
            <FaWarehouse className="w-6 h-6 mb-1 mr-2 text-gray-400" />
             2024 DataDepot. All rights reserved
          </span>
        </aside>
        <nav className="grid-flow-col gap-x-4 items-center flex flex-row md:place-self-center md:justify-self-end pt-2 mr-2">
          <Link href="/frontend/docs" data-tip="Documentation page" className='tooltip font-semibold text-gray-400 hover:text-purple-500 duration-200'> Documentation </Link>
          <Link href="/frontend/blog" data-tip="DataDepot Blog" className='tooltip font-semibold text-gray-400 hover:text-purple-500 duration-200'> Blog </Link>
          <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip pl-6 text-gray-400 hover:text-[#a554f1] duration-300"
              data-tip="Github personal profile"
            >
              <FaGithub className='w-6 h-6' />
            </a>
            <a
              href={IgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip pl-6 text-gray-400 hover:text-[#a554f1] duration-300"
              data-tip="Instagram page"
            >
              <FaInstagram className='w-6 h-6' />
            </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
