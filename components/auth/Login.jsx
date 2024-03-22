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
    <div className="flex w-screen h-screen">

      {/* Left Side with Image */}
      <div className="w-1/2 bg-gray-800 relative flex justify-center items-center">
        <Image
          src="/login_bg.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 bg-gray-50 flex justify-center items-center">
      <a><Link className='btn btn-ghost  absolute top-0 right-0 mr-4 mt-4' href="/"><FaArrowLeftLong className='text-gray-800'/><span className='text-gray-800'>Back</span></Link></a>

        <div className="w-3/4 py-8 px-6 bg-gray-100 shadow-xl bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg border border-gray-300">
          <h1 className="text-center text-gray-800 text-3xl font-semibold mb-6">Login</h1>
          <label className="block mb-4">
            <input type="text" className="block bg-gray-200 text-xl w-full border-b-2 px-2 py-2 text-gray-800 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Your email" />
          </label>
          <label className="block mb-4">
            <div className="relative">
              <input type={passwordVisible ? "text" : "password"} className="block bg-gray-200 text-xl w-full border-b-2 px-2 py-2 text-gray-800 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Your password" />
              <button onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center px-3 border-b-2 border-gray-300 rounded-r-md">
                {passwordVisible ? <HiEyeOff className="text-gray-500" /> : <HiEye className="text-gray-500" />}
              </button>
            </div>
          </label>
          <button className="btn btn-primary w-full mt-4">Login</button>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Forgot password? <a href="#" className="text-blue-500 hover:underline">Reset here</a></p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Don't have an account? <a>  <Link className='text-blue-500 hover:underline hover:text-blue-700' href="/auth/register">Register here</Link></a>
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
