import React, { useState, useEffect } from 'react';

const Countdown = ({date}) => {
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Function to pad single-digit numbers with leading zeros
  const padNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div className='h-[150px] max-w-screen flex flex-col items-center justify-center'>
      <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
        <div className="flex flex-col p-3 bg-neutral items-center  rounded-lg shadow-xl text-zinc-200 min-w-[80px] duration-300 hover:drop-shadow-xl">
          <span className="countdown font-mono text-4xl">{padNumber(timeLeft.days)}</span>
          days
        </div>
        <div className="flex flex-col p-3 bg-neutral items-center rounded-lg shadow-xl text-zinc-200 min-w-[80px] duration-300 hover:drop-shadow-xl ">
          <span className="countdown font-mono text-4xl">{padNumber(timeLeft.hours)}</span>
          hours
        </div>
        <div className="flex flex-col p-3 bg-neutral items-center rounded-lg shadow-xl text-zinc-200 min-w-[80px] duration-300 hover:drop-shadow-xl">
          <span className="countdown font-mono text-4xl">{padNumber(timeLeft.minutes)}</span>
          min
        </div>
        <div className="flex flex-col p-3 bg-neutral items-center rounded-lg shadow-xl text-zinc-200 min-w-[80px] duration-300 hover:drop-shadow-xl">
          <span className="countdown font-mono text-4xl">{padNumber(timeLeft.seconds)}</span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;
