import React, { useEffect, useState } from 'react';

const Homepage = () => {

  const [remainingHeight, setRemainingHeight] = useState(0);

  useEffect(() => {
    const navbarHeight = 68;
    const footerHeight = 56;

    const screenHeight = window.innerHeight;
    const calculatedHeight = screenHeight - navbarHeight - footerHeight;

    // Set the remaining height state
    setRemainingHeight(calculatedHeight);

    // Event listener to recalculate height on window resize
    const handleResize = () => {
      const newScreenHeight = window.innerHeight;
      const newCalculatedHeight = newScreenHeight - navbarHeight;
      setRemainingHeight(newCalculatedHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='flex flex-col items-center justify-center' style={{minHeight: remainingHeight}}>
        <h1 className='pb-8 text-6xl uppercase bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'>Homepage</h1>

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
