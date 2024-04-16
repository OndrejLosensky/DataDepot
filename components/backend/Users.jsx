import React from 'react'
import Image from 'next/image'

const Users = () => {
  return (
    <div className='w-full h-full items-center justify-center flex flex-col'>
        <div className='flex opacity-75 absolute top-12 flex-row'>
            <Image src="/logo/light.svg" width={32} height={32} />
            <p className='pt-1 text-2xl text-gray-100 pl-2'> DataDepot</p>
      </div>
      <h1 className='text-2xl font-light mb-8'>
        Coming soon...
      </h1>
      <div>
        <label
          htmlFor="email"
          className="sr-only block text-sm font-semibold text-heading"
        >
          Email
        </label>
        <div className="relative mt-2 flex">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your email"
            className="block w-full font-light rounded-xl rounded-r-none border bg-transparent px-4 py-2.5 text-heading border-white  focus:border-violet-500 focus:outline-none focus:ring-0 sm:text-sm"
          />
          <button
            type="button"
            className="right-0 -ml-0.5 inline-flex flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl rounded-l-none border-2 border-violet-500 bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-within:z-20 focus:outline-none "
          >
            Subscribe
          </button>
        </div>
      </div>
      <p className='w-1/3 text-center mt-6 text-sm'> Subscribe to DataDepot newsletter to receive information to news everytime something happens </p>
    </div>
  )
}

export default Users