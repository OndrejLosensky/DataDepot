import React from 'react';

const Homepage = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-6xl uppercase bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'>Welcome</h1>
        <h2 className='pb-6 pt-2 text-2xl text-gray-300 hover:text-gray-100 duration-300'> This is DataDepot</h2>

        <div className="relative">
            <input type="text" placeholder="Search" className="input input-bordered input-width pr-16" />
            <div className="absolute top-0 right-0 bottom-0 flex items-center">
                <kbd className="kbd flex items-center justify-center w-6 h-1/2 text-sm mr-1">⌘</kbd>
                <kbd className="kbd flex items-center justify-center w-6 h-1/2 text-sm mr-1">K</kbd>
            </div>
        </div>

    </section>
  );
}

export default Homepage;
