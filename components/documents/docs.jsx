import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';

const Docs = () => {
  return (
    <div className='flex w-screen h-screen'>
      {/* Sidebar */}
      <div className="w-80 min-h-screen bg-base-200 text-base-content overflow-y-auto">
        <h2 className='text-3xl font-semibold py-2 pl-4'>Docs</h2>
        <ul className="menu p-4">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
          {/* Add more sidebar items here */}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-grow min-h-screen bg-base-100 p-4 overflow-y-auto">
        <h1 className='pb-32'> Welcome</h1>
        <p className='pb-32'> Lorem ipsum</p>
        <h1 className='pb-32'> Welcome</h1>
        <p className='pb-32'> Lorem ipsum</p>
        <h1 className='pb-32' > Welcome</h1>
        <p className='pb-32'> Lorem ipsum</p>
        <h1 className='pb-32'> Welcome</h1>
        <p className='pb-32'> Lorem ipsum</p>
      </div>

      {/* Back button */}
      <a>
        <Link className='btn btn-ghost w-24 absolute top-2 right-2' href="/">
          <FaArrowLeftLong/>Back
        </Link>
      </a>
    </div>
  );
};

export default Docs;
