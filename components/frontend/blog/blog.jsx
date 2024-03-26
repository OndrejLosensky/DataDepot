import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import Navbar from '../Navbar';

const Blog = () => {
  // Array of blog posts
  const blogPosts = [
    {
      heading: 'New Features Added',
      version: 'v1.2',
      date: 'March 25, 2024',
      description: 'Discover the latest features and enhancements in version 1.2 of DataDepot.',
    },
    {
      heading: 'Important Update: Security Patch',
      version: 'v1.3',
      date: 'March 26, 2024',
      description: 'Learn about the crucial security patch released in version 1.3 of DataDepot.',
    },
    {
      heading: 'Enhanced User Experience',
      version: 'v1.4',
      date: 'March 27, 2024',
      description: 'Explore the improvements made to enhance the overall user experience in version 1.4.',
    },
    {
      heading: 'App created',
      version: 'v1.5',
      date: 'March 28, 2024',
      description: 'Explore the realease app',
    },
  ];

  return (
    <div className='max-w-screen min-h-screen'>
      <div className='w-screen h-16 bg-base-300 flex items-center'>
        <Link href="/"><button className='btn btn-ghost ml-4'><FaArrowLeftLong /> Back</button></Link>
      </div>
       
      <div className='w-2/4 mx-auto'>
        <h1 className='text-4xl pl-4 pt-8 text-gray-300'>Welcome to <span className='text-gray-100 font-semibold'>DataDepot blog</span></h1>
        <p className='ml-4 text-xl pt-2 font-thin'>Here you can find about new versions of the app, features, important changes and more interesting things  </p>
        <div className='border-b-[0.5px] border-gray-400 mx-4 pt-6'></div>
        <div className="flex flex-col gap-4 mt-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="ml-4 border-[0.5px]  border-gray-500 rounded-lg p-4">
              <h2 className="text-2xl font-semibold">{post.heading}</h2>
              <p className="text-gray-500 text-sm">Version: {post.version} - Date: {post.date}</p>
              <p className="mt-2">{post.description}</p>
              <button className='px-4 py-1 mt-2 rounded-md shadow-lg bg-blue-500 hover:bg-blue-700 duration-300 text-gray-100'> See more</button>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Blog;
