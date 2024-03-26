import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileArchive, FaFileCode, FaPython } from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';

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
              width={2000}
              height={0}
              className='w-9 h-9'
            />
          <h2 className='text-2xl ml-2 mt-2 font-semibold'>DataDepot</h2>
          <Link className='ml-4 pt-3 font-thin hover:underline duration-300 cursor-pointer' href='/frontend/blog'>1.0.1</Link>
        </div>
        <div className='border-gray-400 pt-4 border-b w-[100%] mx-auto'></div>
        <h2 className='ml-12 text-xl font-semibold text-gray-200 pt-10'>Getting started</h2>
        <ul className='ml-12 pt-2 text-gray-500'>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('dashboard')}>Dashboard</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('upload')}>Uploading files</a></li>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('files')}>Files</a></li>
        </ul>

        <h2 className='ml-12 text-xl font-semibold text-gray-200 pt-4'>Features</h2>
        <ul className='ml-12 pt-2 text-gray-500'>
          <li className='py-1 hover:text-gray-200 duration-300 cursor-pointer'><a onClick={() => scrollToSection('drag')}>Drag and drop</a></li>
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
          <div className='sticky top-0 flex py-4  justify-end h-auto items-center'>
              {/* Back button */}
                <Link className='btn btn-ghost w-24 mr-4' href="/">
                  <FaArrowLeftLong/>Back
                </Link>
          </div>

          <div className='w-full p-8'>
    <h1 className='text-4xl font-bold text-gray-100 py-4'>Getting started</h1>
    <p className="text-lg text-gray-300">Welcome to DataDepot! This guide will help you kickstart your journey with our platform.</p>
    
    <div className="mt-8">
        <div className="py-6">
            <h3 id='dashboard' className='text-xl font-semibold text-gray-200'>Dashboard Overview</h3>
            <p className='max-w-prose text-gray-300'>Upon logging in to DataDepot, you'll be greeted by a clean and intuitive dashboard that serves as your central hub for managing your files.
            The dashboard provides easy access to all the essential features and tools you need to organize, upload, and view your files effortlessly.</p>
            <Image src="/homepage.svg" alt='Dashboard Overview' width={900} height={512} className='my-6 rounded-lg shadow-lg' />
        </div>
        
        <div className="py-6">
            <h3 id='upload' className='text-xl font-semibold text-gray-200'>File Upload</h3>
            <p className='max-w-prose text-gray-300'>Uploading files to DataDepot is a breeze. Simply click on the "Upload" button located prominently on the dashboard, and you can either select files from your local device or drag and drop them directly into the designated area.
            Our platform supports various file formats, ensuring you can store all your important documents, images, and presentations with ease.</p>
            <Image src="/fileUpload.svg" alt='File Upload' width={900} height={302} className='my-6 rounded-lg shadow-lg' />
        </div>
        
        <div className="py-6">
            <h3 id='files' className='text-xl font-semibold text-gray-200'>File Preview</h3>
            <p className='max-w-prose text-gray-300'>Previewing files within DataDepot is seamless and hassle-free. Whether it's a PDF document, a Word file, or an image, you can instantly view its contents without having to download or open it externally. This feature saves you time and allows you to quickly glance through your files to find the information you need.</p>
        </div>
    </div>
</div>



        <div className='w-full p-8'>
    <h1 className='text-4xl font-bold text-gray-300 py-4'>Features</h1>
    <p className="text-lg text-gray-400">Discover the powerful features that DataDepot offers to streamline your file management tasks.</p>
    
    <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div id='drag' className="feature-card">
            <h2 className='text-2xl text-gray-300 mb-4'>Drag & Drop</h2>
            <p className="text-gray-400">Easily rearrange yougr files by dragging them to your desired location within DataDepot.</p>
        </div>
        
        <div id='labels' className="feature-card">
            <h2 className='text-2xl text-gray-300 mb-4'>Labels / Tags</h2>
            <p className="text-gray-400">Organize your files efficiently by creating custom tags and assigning them different colors for easy identification.</p>
        </div>
        
        <div id='filtering' className="feature-card">
            <h2 className='text-2xl text-gray-300 mb-4'>Filtering</h2>
            <p className="text-gray-400">Effortlessly find specific files by filtering them based on file type, date added, labels, and more.</p>
        </div>
        
        <div id='themes' className="feature-card">
            <h2 className='text-2xl text-gray-300 mb-4'>Dark Mode / Light Mode</h2>
            <p className="text-gray-400">Customize your DataDepot experience with either dark mode or light mode, whichever suits your preference.</p>
        </div>
        
        <div id='filePreview' className="feature-card">
            <h2 className='text-2xl text-gray-300 mb-4'>File Preview</h2>
            <p className="text-gray-400">Preview the contents of your files directly within DataDepot without needing to open them separately.</p>
        </div>
    </div>
</div>

          
<div id='support' className='w-full p-8'>
    <h1 className='text-4xl font-bold text-gray-300 py-4'>Support</h1>
    <p>Learn about the various support options available to assist you while using DataDepot.</p>
    <h2 id='capacity' className='text-2xl text-gray-300 pt-6'>Maximum capacity</h2>
    <p>Understand the maximum file size limit currently imposed by DataDepot, ensuring optimal performance. <br /> Current maximum capacity is <span className='bg-gray-600 text-gray-200 px-2 py-1 rounded-md'>50MB</span></p>
    <h2 id='fileTypes' className='text-2xl text-gray-300 pt-6'>Supported file types</h2>
    <p>Explore the different file types supported by DataDepot:</p>
    <div className="flex flex-wrap mt-4 items-center pt-4 bg-[#232B35] rounded-md shadow-md justify-between">
        <div className="flex items-center ml-2 mr-8 mb-4 ">
            <FaFilePdf className="text-red-500 text-4xl mr-2" />
            <p className="text-gray-400">PDF</p>
        </div>
        <div className="flex items-center mr-8 mb-4">
            <FaFileWord className="text-blue-500 text-4xl mr-2" />
            <p className="text-gray-400">DOCX</p>
        </div>
        <div className="flex items-center mr-8 mb-4">
            <FaFileExcel className="text-green-500 text-4xl mr-2" />
            <p className="text-gray-400">XLSX</p>
        </div>
        <div className="flex items-center mr-8 mb-4">
            <FaFilePowerpoint className="text-yellow-500 text-4xl mr-2" />
            <p className="text-gray-400">PPTX</p>
        </div>
        <div className="flex items-center mr-8 mb-4">
            <FaFileArchive className="text-purple-500 text-4xl mr-2" />
            <p className="text-gray-400">ZIP</p>
        </div>
        <div className="flex items-center mr-8 mb-4">
            <FaFileCode className="text-orange-500 text-4xl mr-2" />
            <p className="text-gray-400">JS</p>
        </div>
        <div className="flex items-center mr-8 mb-4">
            <FaPython className="text-yellow-600 text-4xl mr-2" />
            <p className="text-gray-400">PY</p>
        </div>
        <div className="flex items-center mr-8 mb-4">
            <FiImage className="text-pink-500 text-4xl mr-2" />
            <p className="text-gray-400">JPG</p>
        </div>
        <div className="flex items-center mr-8 mb-4">
            <FiImage className="text-green-500 text-4xl mr-2" />
            <p className="text-gray-400">PNG</p>
        </div>
    </div>
    <h2 id='browsers' className='text-2xl text-gray-300 pt-6'>Supported browsers</h2>
    <p>Discover the list of web browsers tested and supported for use with DataDepot, ensuring compatibility.</p>
    <div className="mt-4">
        <table className="table-auto border-collapse border border-gray-300">
            <thead>
                <tr className='bg-gray-800 text-gray-300'>
                    <th className="px-4 py-2 text-center border">Browser</th>
                    <th className="px-4 py-2 text-center border">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border'>
                    <td className="px-4 py-2 text-center border">
                        <Image src="/icons/safari.png" alt='Safari Icon' width={32} height={32}/>
                    </td>
                    <td className="px-4 py-2 text-center border">Safari</td>
                </tr>
                <tr className='border'>
                    <td className="px-4 py-2 text-center border">
                        <Image src="/icons/chrome.png" alt='Chrome Icon' width={32} height={32}/>
                    </td>
                    <td className="px-4 py-2 text-center border">Google Chrome</td>
                </tr>
                <tr className='border'>
                    <td className="px-4 py-2 text-center border">
                        <Image src="/icons/microsoft.png" alt='Microsoft Edge Icon' width={32} height={32}/>
                    </td>
                    <td className="px-4 py-2 text-center border">Microsoft Edge</td>
                </tr>
                <tr className='border'>
                    <td className="px-4 py-2 text-center border">
                        <Image src="/icons/brave.png" alt='Brave Icon' width={32} height={32}/>
                    </td>
                    <td className="px-4 py-2 text-center border">Brave</td>
                </tr>
                <tr className='border'>
                    <td className="px-4 py-2 text-center border">
                        <Image src="/icons/arc.png" alt='Arc Icon' width={32} height={32}/>
                    </td>
                    <td className="px-4 py-2 text-center border">Arc</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div className='w-full p-8'>
    <h1 className='text-4xl font-bold text-gray-300 py-4'>Source code</h1>
    <h2 id='repo' className='text-2xl text-gray-300 pt-6'>GitHub Repository</h2>
    <p>Access the entire source code of DataDepot on GitHub for free. Visit our <a href="https://github.com/your_username/your_repository" className="text-blue-500 underline">repository</a> to explore and contribute.</p>
    <h2 id='version' className='text-2xl text-gray-300 pt-6'>Version</h2>
    <p className="text-3xl font-semibold text-gray-500 pt-2">1.0.1</p>
    <h2 id='libraries' className='text-2xl text-gray-300 pt-6'>Libraries</h2>
    <p>Learn about the technologies and libraries used in the development of DataDepot:</p>
    <ul className="list-disc pl-6">
        <li className="text-gray-400">Next.js</li>
        <li className="text-gray-400">SQLite</li>
        <li className="text-gray-400">Firebase</li>
        <li className="text-gray-400">TailwindCSS</li>
    </ul>
</div>

      </div>
    </div>
  );
};

export default Docs;
