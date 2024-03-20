import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Link from 'next/link';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phoneNumber: '',
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
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className='text-center text-gray-300 text-4xl py-6'>Step 1: Account Information</h1>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input input-bordered w-full pr-12"
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
                className="input input-bordered w-full pr-12"
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
            <h1 className='text-center text-gray-300 text-4xl py-6'>Step 2: Personal Information (Optional)</h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Name"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Phone Number"
            />
            <div className="flex flex-col items-center justify-center gap-y-2 w-full">
              <button className="btn btn-bordered w-full" onClick={() => setStep(1)}>Previous</button>
              <button className="btn btn-primary w-full" onClick={handleSubmit}>Register</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-base-100'>
      <a><Link className='btn btn-ghost absolute top-0 left-0 ml-4 mt-4' href="/"><FaArrowLeftLong/>Back</Link></a>
      <div className='w-[100%] h-auto mx-auto py-10 px-8 bg-gray-800 shadow-2xl backdrop-blur-lg rounded-2xl'>
        {renderStepContent()}
      </div>
    </div>
  );
};

export default Register;
