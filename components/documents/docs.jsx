import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

const Docs = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='flex w-screen max-w-screen h-screen'>
      {/* Sidebar */}
      <div className="w-80 min-h-screen bg-base-300 text-base-content shadow-xl overflow-y-auto">
        <div className='h-12 pt-10 flex pb-6 flex-row justify-center items-center'>
          <Image
              src="/logo/light.svg"
              alt="Code editor mockup image"
              width={200}
              height={0}
              className='w-10 h-10'
            />
          <h2 className='text-2xl ml-2 mt-2 font-semibold'>DataDepot</h2>
          <p className='ml-4 pt-3 font-thin'>1.0.0</p>
        </div>
        <div className='border-gray-400 pt-4 border-b w-[100%] mx-auto'></div>
        <h2 className='ml-12 text-xl font-semibold text-gray-200 pt-10'>Getting started</h2>
        <ul className='ml-12 pt-2 text-gray-500'>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('preview')}>Preview</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('account')}>Create an account</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('using')}>How to use</a></li>
        </ul>

        <h2 className='ml-12 text-xl font-semibold text-gray-200 pt-4'>Features</h2>
        <ul className='ml-12 pt-2 text-gray-500'>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('drags')}>Drag and drop</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('labels')}>Labels / tags</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('filtering')}>Filtering</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('theme')}> Dark mode / light mode</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('filePreview')}>Preview of files</a></li>
        </ul>

        <h2 className='ml-12 text-xl font-semibold text-gray-200 pt-4'>Support</h2>
        <ul className='ml-12 pt-2 text-gray-500'>
        <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('capacity')}>Maximum capacity</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('fileTypes')}>Supported file types</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('browsers')}>Supported browsers</a></li>
        </ul>
        <h2 className='ml-12 text-xl font-semibold text-gray-200 pt-4'> Source code </h2>
        <ul className='ml-12 pt-2 text-gray-500'>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('repo')}>Github repo</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('version')}>Version</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('libraries')}>Libraries</a></li>
        </ul>
      </div>

      {/* Content */}

      <div className="flex-grow min-h-screen bg-base-100 overflow-y-auto">
          <div className='bg-base-300 opacity-95 border-b border-gray-400  sticky top-0 flex py-4  justify-end h-auto items-center'>
              {/* Back button */}
              <a>
                <Link className='btn btn-ghost w-24 mr-4' href="/">
                  <FaArrowLeftLong/>Back
                </Link>
              </a>  
          </div>

          <div className='w-full  p-8'>
            <h1 className='text-4xl font-bold text-gray-300 py-4'> Getting started</h1>
            <p>Get started with DataDepot today! Create an account and start using it.</p>
            <h2 id='preview' className='text-2xl  text-gray-300 pt-6'>Preview</h2>
            <p>Here you can see quick preview of the app</p>
            <h2 id='account' className='text-2xl  text-gray-300 pt-6'>Create an account</h2>
            <p>Start by creating new account if you are here for the first time.</p>
            <h2 id='using' className='text-2xl  text-gray-300 pt-6'>How to use</h2>
            <p>Store your files, organize them and more...</p>
          </div>


          <div className='w-full p-8'>
            <h1 className='text-4xl font-bold text-gray-300 py-4'> Features</h1>
            <p>Most important features you need to know</p>
            <h2 id='drag' className='text-2xl  text-gray-300 pt-6'>Drag & drop</h2>
            <p> Re-order your files as you want, just drag them and it will save for later.</p>
            <h2 id='labels' className='text-2xl  text-gray-300 pt-6'>Labels / tags</h2>
            <p>Create tags, select different colors, label your files and more...</p>
            <h2 id='filtering' className='text-2xl  text-gray-300 pt-6'>Filtering</h2>
            <p>Filter out by file type, such as .pdf or another. Also by date of adding the file ascendingly or descendingly. Also by labels and more options coming...</p>
            <h2 id='theme' className='text-2xl  text-gray-300 pt-6'>Dark mode / light mode</h2>
            <p> In default settings, there is dark mode, but you can also use light mode. Lets look at some preview about how it looks:</p>
            <h3 className='text-lg text-gray-300 pt-2'>Preview:</h3>
            <h2 id='filePreview' className='text-2xl  text-gray-300 pt-6'>View files</h2>
            <p>Preview whats inside your files, see what the image looks like, what pdf has written inside etc.</p>

          </div>

          <div className='w-full p-8'>
            <h1 className='text-4xl font-bold text-gray-300 py-4' >Support</h1>
            <p>Everything you need to know about maximal capacity, supported files, browsers etc.</p>
            <h2 id='capacity' className='text-2xl text-gray-300 pt-6'> Maximum capacity </h2>
            <p>Currently it has its limit set to <span className='px-2 py-1 bg-gray-600 text-gray-200 rounded-md'> 50MB</span> </p>
            <h2 id='fileTypes' className='text-2xl  text-gray-300 pt-6'>Supported file types</h2>
            <ul className='list-disc ml-4 mt-2 '>
              <li>PDF</li>
              <li>DOCX</li>
              <li>XLSX</li>
              <li>PPTX</li>
              <li>ZIP</li>
            </ul>
            <h2 id='browsers' className='text-2xl  text-gray-300 pt-6'>Supported browsers</h2>   
            <p> Tested on Safari, Google chrome, Brave, Edge and Arc.</p>
          </div>
        

          <div className='w-full p-8 mb-24'> 
            <h1 className='text-4xl font-bold text-gray-300 py-4'>Source code</h1>
            <h2 id='repo' className='text-2xl text-gray-300 pt-6'>Github repo</h2>
            <p> Whole project was uploaded to my github and is avaiable for free. The url to my Github: <a className='text-blue-500 underline underline-offset-2' href="https://github.com/OndrejLosensky">here</a></p>
            <h2 id='version' className='text-2xl text-gray-300 pt-6'>Version</h2>
            <p>Currently the project is in its development stage, so version is now 0.0.0</p>
            <h2 id='libraries' className='text-2xl text-gray-300 pt-6'> Libraries</h2>
            <p>Whole app was created with Next.js. For data I used Sqlite and firebase and for styling I've used TailwindCSS </p>
          </div>
         

      </div>
    </div>
  );
};

export default Docs;
