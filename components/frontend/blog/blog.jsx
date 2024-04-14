import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import Footer from '../Footer';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/api/blogPosts');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div className='max-w-screen min-h-screen overflow-hidden text-white'>

      <div className='w-3/4 mx-auto mt-12'>
        <Link href="/"><button className='flex flex-row items-center py-2 my-2 hover:bg-gray-700 p-2 rounded-lg duration-300 mb-4'><FaArrowLeft className='mr-2' /> Back</button></Link>
        <h1 className='text-4xl font-bold mb-4'>Welcome to DataDepot Blog</h1>
        <p className='text-xl font-light mb-8'>
          Stay updated with the latest news, updates, and releases. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim mi nec dolor tristique, eget varius elit viverra.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div key={index} className='bg-[#262626] border border-gray-500 hover:drop-shadow-glow cursor-pointer duration-300 rounded-lg p-4'>
              <div className="mb-4">
                <img src="/blog_test.jpeg" alt={`Image ${index+1}`} className='w-full h-[300px] object-cover rounded-md' />
              </div>
              <div className='flex flex-row space-x-4 items-center mb-2'>
                <p className='px-2 py-1 bg-green-200 text-green-600 shadow-md text-xs rounded-lg'> 🎉 New</p>
                <p className='text-gray-400 text-sm'>Version: {post.version}</p>
                <p className='text-gray-400 text-sm'>Date: {post.date}</p>
              </div>
              <h2 className="text-2xl font-semibold mb-2">{post.heading}</h2>
              <p className='mb-4'>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
