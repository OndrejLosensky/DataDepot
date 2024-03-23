import React from 'react';
import { FaWarehouse, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'; 
import { FaC, FaCode } from "react-icons/fa6";
import Image from 'next/image';

const Footer = () => {
  const githubUrl = 'https://github.com/OndrejLosensky';
  const sourceCode = 'https://github.com/OndrejLosensky/DataDepot';
  const email = 'mailto:your.email@example.com';

  return (
    <footer className="footer items-center py-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col pt-2">
        <FaWarehouse className="ml-16 w-6 h-6 mb-2" />
        <p className="pt-1">Copyright © 2024 - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col md:place-self-center md:justify-self-end pt-2 mr-16">
        {/* Github profile */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pl-4 text-gray-400 hover:text-red-500 duration-300"
        >
          <FaGithub className='w-7 h-auto' />
        </a>

        {/* Source code */}
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="pl-4 text-gray-400 hover:text-red-500 duration-300"
        >
         <FaCode className='w-7 h-auto'/>
        </a>

        {/* Gmail */}
        <a href={email} onClick={()=>document.getElementById('email-form').showModal()} className="pl-4 text-gray-400 hover:text-red-500 duration-300">
          <FiMail className='w-7 h-auto' />
        </a>
      </nav>
        <dialog id="email-form" className="modal">
          <div className="modal-box h-2/5 mt-64 text-left flex flex-col">
            <h3 className="font-bold text-3xl">Contact form</h3>
            <input className='py-2 my-3' placeholder='Your mail' type="text" />
            <input className='py-2 my-3' placeholder='Subject' type="text" />
            <input className='py-2 my-3' placeholder='Message' type="text" />
            <button className='bg-blue-500 py-2 px-4 w-32 mt-3 text-gray-100 mx-auto rounded-xl'> Send</button>
          </div>
          <form method="dialog" className="modal-backdrop bg-black opacity-50">
            <button>close</button>
          </form>
        </dialog>

    </footer>
  );
};

export default Footer;
