import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phoneNumber: '',
    additionalInfo: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to backend
    console.log(formData);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col w-full items-center justify-center space-y-4">
            <h1 className='text-center text-gray-800 text-4xl py-6'>Step 1: Account Information</h1>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block bg-gray-200 text-xl w-full border-b-2 px-2 py-2 text-gray-800 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Email"
              required
            />
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block bg-gray-200 text-xl w-full border-b-2 px-2 py-2 text-gray-800 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Password"
                required
              />
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block bg-gray-200 text-xl w-full border-b-2 px-2 py-2 text-gray-800 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pr-12"
                placeholder="Confirm Password"
                required
              />
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>


            <button className="btn btn-primary w-full" onClick={() => setStep(2)}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col w-full items-center justify-center space-y-4">
            <h1 className='text-center text-gray-800 text-4xl py-6'>Step 2: Personal Information (Optional)</h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block bg-gray-200 text-xl w-full border-b-2 px-2 py-2 text-gray-800 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              placeholder="Name"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block bg-gray-200 text-xl w-full border-b-2 px-2 py-2 text-gray-800 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              placeholder="Phone Number"
            />
            <button className="btn btn-ghost  w-full" onClick={() => setStep(1)}> <span className='text-gray-600'> Previous </span></button>
            <button className="btn btn-primary w-full" onClick={() => setStep(3)}>Next</button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col w-full items-center justify-center space-y-4">
            <h1 className='text-center text-gray-800 text-4xl py-6'>Step 3: Additional Information</h1>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="block bg-gray-200 text-xl w-full border-b-2 px-2 py-2 text-gray-800 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-32"
              placeholder="Additional Information"
            />
            <button className="btn btn-ghost w-full" onClick={() => setStep(2)}><span className='text-gray-600'> Previous </span></button>
            <button className="btn btn-primary w-full" onClick={handleSubmit}>Register</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex h-screen'>
      {/* Left Side with Image */}
      <div className="w-1/2 bg-gray-800 relative flex justify-center items-center">
        <Image
          src="/register_bg.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 bg-gray-50 flex justify-center items-center">
        <a><Link className='btn btn-ghost absolute top-0 right-0 mr-4 mt-4' href="/"><FaArrowLeftLong className='text-gray-800'/><span className='text-gray-800'>Back</span></Link></a>
        <div className="w-3/4 py-8 px-6 bg-gray-100 shadow-xl bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg border border-gray-300">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default Register;
