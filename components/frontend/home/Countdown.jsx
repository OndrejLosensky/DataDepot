import React, { useState, useEffect } from 'react';

const Countdown = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const padNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div className='h-[150px] max-w-screen flex flex-col items-center justify-center'>
      <h1 className='text-md pb-4 text-gray-300 hover:text-gray-50 font-black'> Launching soon...</h1>
      {timeLeft && (
        <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
          <div className="flex flex-col p-3 bg-neutral border-gray-700 border-[1px] hover:border-gray-500 items-center rounded-lg shadow-xl text-zinc-400 min-w-[90px] duration-300 hover:drop-shadow-xl">
            <span className="countdown text-gray-100 font-mono text-4xl">{padNumber(timeLeft.days)}</span>
            days
          </div>
          <div className="flex flex-col p-3 bg-neutral border-gray-700 border-[1px] hover:border-gray-500 items-center rounded-lg shadow-xl text-zinc-400 min-w-[90px] duration-300 hover:drop-shadow-xl ">
            <span className="countdown text-gray-100 font-mono text-4xl">{padNumber(timeLeft.hours)}</span>
            hours
          </div>
          <div className="flex flex-col p-3 bg-neutral border-gray-700 border-[1px] hover:border-gray-500 items-center rounded-lg shadow-xl text-zinc-400 min-w-[90px] duration-300 hover:drop-shadow-xl">
            <span className="countdown text-gray-100 font-mono text-4xl">{padNumber(timeLeft.minutes)}</span>
            min
          </div>
          <div className="flex flex-col p-3 bg-neutral border-gray-700 border-[1px] hover:border-gray-500 items-center rounded-lg shadow-xl text-zinc-400 min-w-[90px] duration-300 hover:drop-shadow-xl">
            <span className="countdown text-gray-100 font-mono text-4xl">{padNumber(timeLeft.seconds)}</span>
            sec
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
