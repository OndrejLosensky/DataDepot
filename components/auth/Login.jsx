import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='flex flex-row items-center w-screen justify-center h-screen'>

      <div class="flex place-items-center relative before:absolute before:h-[400px] before:w-full sm:before:w-[380px] before:translate-x-[450px] before:translate-y-[-350px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>
     
      <a><Link className='btn btn-ghost absolute top-0 left-0 ml-4 mt-4' href="/"><FaArrowLeftLong/>Back</Link></a>
      <div className='w-[25%] h-auto mx-auto py-8 pb-16 px-16 bg-gray-800 shadow-2xl backdrop-blur-lg rounded-2xl'>
        <h1 className='text-center text-gray-300 text-4xl py-6'>Login form</h1>
        <label className="input input-bordered flex items-center gap-2 mb-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type={passwordVisible ? "text" : "password"} className="grow" placeholder="Password" />
          <button onClick={togglePasswordVisibility} className="">
            {passwordVisible ? <HiEyeOff /> : <HiEye />}
          </button>
        </label>

        <button className='btn btn-primary w-full mt-1'>
          Login
        </button>

        

        <div className='pt-4'>
           <p> Forgot password? Create new <a href="#" className='underline text-blue-500'>here</a></p>
        </div>
      </div>

      <div class="flex place-items-center relative before:absolute before:h-[400px] before:w-full sm:before:w-[380px] before:translate-x-[550px] before:-translate-y-[400px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>



      <div className='bg-black h-screen w-[60%]'>
      <Image
        src="/login_bg.jpeg"
        alt="Description of the image"
        width={1000}
        height={0}
        className='max-w-screen max-h-screen'
      />
      </div>
    </div>
  );
};

export default Login;
