import React from 'react'
import { FaWarehouse } from "react-icons/fa";


const Footer = () => {

  const githubUrl = "https://github.com/OndrejLosensky";
  const sourceCode = "https://github.com/OndrejLosensky/DataDepot";

  return (
    <footer className="footer items-center py-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col pt-2">
            <FaWarehouse className='ml-16 w-6 h-6 mb-2'/>
            <p className='pt-1'>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col md:place-self-center md:justify-self-end pt-2 mr-16">
          {/* Github profile */}
            <a  href={githubUrl} target="_blank" rel="noopener noreferrer" className='hover:text-red-500 duration-300'>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>        
            </a>

            {/* Source code */}
            <a href={sourceCode} target="_blank" rel="noopener noreferrer" className='pl-4 hover:text-red-500 duration-300'>
            <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
              >
                <path d="M10.478 1.647a.5.5 0 10-.956-.294l-4 13a.5.5 0 00.956.294l4-13zM4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" />
              </svg>
            </a>
        </nav>
  </footer>
  )
}

export default Footer