import React, { useState, useEffect } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import Footer from '../Footer';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);


  useEffect(() => {
    fetch('/api/blogPosts')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  const openDialog = (post) => {
    setSelectedPost(post);
    document.getElementById('posts').showModal();
  };

  return (
    <div className='max-w-screen min-h-screen overflow-hidden bg-[#18191A]'>
      <div className='w-screen h-16 bg-[#111212] flex items-center'>
        <Link href="/"><button className='btn btn-ghost ml-4'><FaArrowLeftLong /> Back</button></Link>
      </div>
       

      <dialog id="posts" className="modal max-w-screen max-h-screen">
        <div className="h-[90%] mb-48 bg-[#262626] w-2/3 text-left flex flex-col">
          {selectedPost && (
            <>
              <div className=''>
                <div className='h-12 flex flex-row items-center border-b-[0.3px] border-gray-500 '>
                  <h2 className='w-64 flex flex-row ml-4'>
                    <span className='font-thin text-md'>Post number:</span>
                    <span className='items-center flex pl-1 text-md'>{selectedPost.id}</span>
                  </h2>
                  <button className='flex w-full items-center justify-end pr-2' onClick={() => document.getElementById('posts').close()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#f44336"
                        d="M44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4s20 8.955 20 20z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M29.656 15.516l2.828 2.828-14.14 14.14-2.828-2.828 14.14-14.14z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M32.484 29.656l-2.828 2.828-14.14-14.14 2.828-2.828 14.14 14.14z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className='mx-4 mt-4'>
                  <h1 className='text-3xl text-[#DFDFDF]'>{selectedPost.heading}</h1>
                  <div className='flex flex-row'>
                    <h2 className='font-thin'>Version: {selectedPost.version}</h2>
                    <p className='mx-2'> – </p>
                    <h3 className='font-thin'>Date: {selectedPost.date}</h3>
                  </div>
                  <p className='pt-2'>{selectedPost.description}</p>
                  <div className='border-b-[0.5px] border-gray-400 py-2'></div>
                </div>  
                {/* Content section */}
                <div>

                </div>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop bg-black opacity-15">
          <button>close</button>
        </form>
      </dialog>


      <div className='w-2/4 mx-auto'>
        <h1 className='text-4xl pl-4 pt-8 text-gray-300'>Welcome to <span className='text-gray-100 font-semibold'>DataDepot blog</span></h1>
        <p className='ml-4 text-xl pt-2 font-thin'>Here you can find about new versions of the app, features, important changes and more interesting things  </p>
        <div className='border-b-[0.5px] border-gray-400 mx-4 pt-6'></div>
        <div className="flex flex-col gap-4 mt-4 mb-16">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-[#222222] duration-300 hover:drop-shadow-glow mx-4 border-[0.5px]  border-gray-500 rounded-lg p-4">
              <h2 className="text-2xl font-semibold">{post.heading}</h2>
              <p className="text-gray-500 text-sm">Version: {post.version} - Date: {post.date}</p>
              <p className="mt-2">{post.description}</p>
              <button onClick={() => openDialog(post)} className='px-4 py-1 mt-2 rounded-md shadow-lg bg-blue-500 hover:bg-blue-700 duration-300 text-gray-100'>See more</button>
            </div>
          ))}
        </div>
      </div> 
      <Footer/>
    </div>
  );
};

export default Blog;
