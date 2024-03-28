import React from 'react';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaWarehouse } from "react-icons/fa";
import { useTypewriter, Cursor} from "react-simple-typewriter";

const Loading = () => {
  const [text] = useTypewriter({
    words: ['Preparing your files...', 'Starting the warehouse...','Loading user settings...','Almost there...','Depot is opening...'],
    loop: true,
    typeSpeed:70,
    deleteSpeed:60,
    delaySpeed:3000,
});

  return (
    <div className="max-w-screen min-h-screen flex flex-col justify-center items-center text-white"> {/*  bg-gradient-to-br from-blue-950 opacity-75 to-yellow-950 */}
      <div className="absolute top-0 left-0 mt-4 ml-4">
      <Link className='btn btn-ghost' href="/"><FaArrowLeftLong className='text-[#DFDFDF]'/><span className='text-[#DFDFDF]'>Back</span></Link>
      </div>

      <div className='flex flex-row items-center py-4 absolute top-24'>
        <FaWarehouse className={`w-20 mr-2 h-auto text-[#DFDFDF]`}/>
        <p className='mt-4 text-4xl drop-shadow-glow2'> DataDepot</p>
      </div>

     
      {/* Loading content */}
      <span className="loading loading-spinner w-12"></span>

      <p className='pt-12 text-[#a9a9a9]'><span>{text}</span> <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#a9a9a9"/> </p>

    </div>
  );
};

export default Loading;
