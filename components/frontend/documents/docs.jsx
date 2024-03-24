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
                <Link className='btn btn-ghost w-24 mr-4' href="/">
                  <FaArrowLeftLong/>Back
                </Link>
          </div>

          <div className='w-full p-8'>
            <h1 className='text-4xl font-bold text-gray-100 py-4'>Getting started</h1>
            <p>Welcome to DataDepot! This guide will help you kickstart your journey with our platform.</p>
            <h2 id='preview' className='text-2xl text-gray-200 pt-6'>Preview</h2>
            <p className='max-w-[900px]'>Before you dive in, let's take a quick tour of DataDepot's interface and features.</p>
            <h3 className='text-xl font-semibold text-gray-200 pt-4'>Dashboard Overview</h3>
            <p className='max-w-[900px]'>Upon logging in to DataDepot, you'll be greeted by a clean and intuitive dashboard that serves as your central hub for managing your files.
            The dashboard provides easy access to all the essential features and tools you need to organize, upload, and view your files effortlessly.</p>
            <h3 className='text-xl font-semibold text-gray-200 pt-4'>File Upload</h3>
            <p className='max-w-[900px]'>Uploading files to DataDepot is a breeze. Simply click on the "Upload" button located prominently on the dashboard, and you can either select files from your local device or drag and drop them directly into the designated area.
            Our platform supports various file formats, ensuring you can store all your important documents, images, and presentations with ease.</p>
            <h3 className='text-xl font-semibold text-gray-200 pt-4'>File Organization</h3>
            <p className='max-w-[900px]'>Efficiently organize your files using DataDepot's robust organizational features. You can create folders, assign labels or tags, and even apply custom metadata to ensure every file is easily searchable and accessible.
            With our intuitive drag-and-drop interface, rearranging files within folders is as simple as it gets.</p>
            <h3 className='text-xl font-semibold text-gray-200 pt-4'>File Preview</h3>
            <p className='max-w-[900px]'>Previewing files within DataDepot is seamless and hassle-free. Whether it's a PDF document, a Word file, or an image, you can instantly view its contents without having to download or open it externally. This feature saves you time and allows you to quickly glance through your files to find the information you need.</p>
        

            <h3 className='text-xl font-semibold text-gray-200 pt-4'>Collaboration Tools</h3>
            <p className='max-w-[900px]'>DataDepot offers powerful collaboration tools that enable seamless teamwork and communication. Share files with colleagues or clients, collaborate on documents in real-time, and leave comments or annotations to facilitate productive discussions. With DataDepot, working together has never been easier.</p>
            <h3 className='text-xl font-semibold text-gray-200 pt-4'>Customization Options</h3>
            <p className='max-w-[900px]'>Personalize your DataDepot experience with a range of customization options. Choose between dark mode and light mode to suit your preferences, adjust display settings, and tailor the interface to match your workflow. Our platform adapts to your needs, ensuring a comfortable and productive user experience.</p>
            {/* Placeholder for image(s) */}
            <div className="flex justify-center pt-8">
                {/* Placeholder for image(s) */}
                {/* <img src="preview_image_2.jpg" alt="Preview Image 2" className="max-w-lg mx-auto" /> */}
            </div>
        </div>


<div className='w-full p-8'>
    <h1 className='text-4xl font-bold text-gray-300 py-4'>Features</h1>
    <p>Discover the powerful features that DataDepot offers to streamline your file management tasks.</p>
    <h2 id='drag' className='text-2xl text-gray-300 pt-6'>Drag & drop</h2>
    <p>Easily rearrange your files by dragging them to your desired location within DataDepot.</p>
    <h2 id='labels' className='text-2xl text-gray-300 pt-6'>Labels / tags</h2>
    <p>Organize your files efficiently by creating custom tags and assigning them different colors for easy identification.</p>
    <h2 id='filtering' className='text-2xl text-gray-300 pt-6'>Filtering</h2>
    <p>Effortlessly find specific files by filtering them based on file type, date added, labels, and more.</p>
    <h2 id='theme' className='text-2xl text-gray-300 pt-6'>Dark mode / light mode</h2>
    <p>Customize your DataDepot experience with either dark mode or light mode, whichever suits your preference.</p>
    <h2 id='filePreview' className='text-2xl text-gray-300 pt-6'>View files</h2>
    <p>Preview the contents of your files directly within DataDepot without needing to open them separately.</p>
</div>
          
<div className='w-full p-8'>
    <h1 className='text-4xl font-bold text-gray-300 py-4'>Support</h1>
    <p>Learn about the various support options available to assist you while using DataDepot.</p>
    <h2 id='capacity' className='text-2xl text-gray-300 pt-6'>Maximum capacity</h2>
    <p>Understand the maximum file size limit currently imposed by DataDepot, ensuring optimal performance. <br /> Current maximum capacity is <span className='bg-gray-600 text-gray-200 px-2 py-1 rounded-md'>50MB</span></p>
    <h2 id='fileTypes' className='text-2xl text-gray-300 pt-6'>Supported file types</h2>
    <p>Explore the different file types supported by DataDepot, including PDF, DOCX, XLSX, PPTX, and ZIP.</p>
    <h2 id='browsers' className='text-2xl text-gray-300 pt-6'>Supported browsers</h2>
    <p>Discover the list of web browsers tested and supported for use with DataDepot, ensuring compatibility.</p>
</div>

<div className='w-full p-8'>
    <h1 className='text-4xl font-bold text-gray-300 py-4'>Source code</h1>
    <h2 id='repo' className='text-2xl text-gray-300 pt-6'>Github repo</h2>
    <p>Access the entire source code of DataDepot on GitHub for free. Visit our repository to explore and contribute.</p>
    <h2 id='version' className='text-2xl text-gray-300 pt-6'>Version</h2>
    <p>Stay informed about the current development stage and version number of DataDepot.</p>
    <h2 id='libraries' className='text-2xl text-gray-300 pt-6'>Libraries</h2>
    <p>Learn about the technologies and libraries used in the development of DataDepot, including Next.js, SQLite, Firebase, and TailwindCSS.</p>
</div>

      </div>
    </div>
  );
};

export default Docs;
