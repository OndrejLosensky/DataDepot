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
    <footer className="footer w-screen items-center py-4 mb-2 text-gray-300">
      <div className='w-[70%] border-t-[0.5px] border-gray-500 pt-4 flex py-2 flex-row mx-auto justify-between'>
        <aside className="items-center flex flex-row gap-2 grid-flow-col pt-2">
          <FaWarehouse className="w-6 h-6 text-gray-400" />
          <p className="pt-1 text-gray-400 font-light">© 2024 DataDepot. All rights reserved</p>
        </aside>
        <nav className="grid-flow-col flex flex-row md:place-self-center md:justify-self-end pt-2">
          {/* Github profile */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-6 text-gray-400 hover:text-[#a554f1] duration-300"
          >
            <FaGithub className='w-6 h-auto' />
          </a>

          {/* Source code */}
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-6 text-gray-400 hover:text-[#a554f1] duration-300"
          >
          <FaCode className='w-6 h-auto'/>
          </a>

          {/* Gmail */}
          <a href={email} onClick={()=>document.getElementById('email-form').showModal()} className="pl-6 text-gray-400 hover:text-[#a554f1] duration-300">
            <FiMail className='w-6 h-auto' />
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
      </div>

    </footer>
  );
};

export default Footer;
