import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link'

const docs = () => {
  return (
    <div className='max-w-screen min-h-screen flex flex-row'>
        <div className="drawer drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
          
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <h2 className='text-3xl font-semibold py-2 pl-4'> Docs </h2>
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          
          </div>
      </div>

      <a><Link className='btn btn-ghost w-24 absolute top-2 right-2' href="/"><FaArrowLeftLong/>Back</Link></a>
    </div>
  )
}

export default docs