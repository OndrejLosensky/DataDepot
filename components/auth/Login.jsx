import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiFillApple, AiFillGoogleCircle } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";



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
          <div className="flex flex-col  justify-center">
            <div className='w-full h-16 border-b border-gray-400 flex items-center justify-between'>
                <p className='text-left text-2xl text-[#DFDFDF] mx-8'>Login</p>
               
            </div>

            <h2 className=' text-[#DFDFDF] text-xl font-semibold ml-8 pt-10'>Welcome to DataDepot</h2>
           
           <div className='items-center flex flex-col'>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block bg-[#3D3D3D] text-md w-[85%]  border mb-6 my-4 mt-4 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Your e-mail"
              required
            />
          
            <button className="py-2 rounded-md shadow-lg bg-[#428DFF] text-[#fffddd] hover:bg-[#034CB8] duration-300 mb-6 w-[85%]" onClick={() => setStep(2)}>Continue</button>

            <div className='flex flex-row items-center w-[85%] mt-2 mb-4'>
                <div className='w-1/2 mr-2 border-b-[1.5px] h-0 border-gray-500'></div>
                <p className='text-xs'> OR</p>
                <div className='w-1/2 ml-2 border-b-[1.5px] h-0 border-gray-500'></div>
            </div>

            <button className='w-[85%] border-[#DFDFDF] hover:bg-[#3D3D3D] duration-300 text-[#DFDFDF] border rounded-lg py-2 my-2 flex flex-row items-center justify-center'>
              <AiFillApple className='absolute left-12 w-7 h-7 mr-2'/> Continue with Apple
            </button>

            <button className='w-[85%] border-[#DFDFDF] hover:bg-[#3D3D3D] duration-300 text-[#DFDFDF] border rounded-lg py-2 my-2 mb-8 flex flex-row items-center justify-center'>
              Continue with Google
              <Image src='/icons/google_btn.svg' alt="Google icon" width={28} height={28} className='absolute left-12'/>
            </button>


            <p className='mb-8 text-sm'>New user? Create new account <Link className='underline text-blue-500' href="/auth/register"> here</Link></p>
           </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col  justify-center">
            <div className='w-full h-16 border-b border-gray-400 flex items-center justify-between'>
                <p className='text-left text-2xl text-[#DFDFDF] mx-8'>Login</p>
            </div>


            <h2 className=' text-[#DFDFDF] text-xl font-semibold ml-8 pt-8'>Enter your password</h2>
           
           <div className='items-center flex flex-col'>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block bg-[#3D3D3D] text-md w-[85%]  border my-4 mt-4 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Password"
              required
            />
          
            <button className="py-2 rounded-md bg-[#428DFF] text-[#fffddd] hover:bg-[#034CB8] duration-300 mb-2 w-[85%]" >Login</button>
            <button className=" rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(1)}> 
              <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
              Previous
            </button>
            <p className='mb-8 text-sm'>Forgot password? Create new <span className='underline text-blue-500'>here</span></p>
           </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex w-screen h-screen'>
      {/* Left Side with Image */}
      <div className="w-1/2 bg-gray-800 relative flex justify-center items-center border-r-[0.3px] border-[#6e6e6e]">
        <Image
          src="/login_bg.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="z-[-1] flex place-items-center before:absolute before:h-[200px] before:w-full sm:before:w-[450px] before:translate-x-[40px] before:translate-y-[-280px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-25 after:dark:from-blue-500 after:dark:via-red-500 after:dark:opacity-100 before:lg:h-[250px]"></div>


      {/* Right Side with Form */}
      <div className="w-1/2 flex justify-center items-center">
        <Link className='btn btn-ghost absolute top-0 right-0 mr-4 mt-4' href="/"><FaArrowLeftLong className='text-[#DFDFDF]'/><span className='text-[#DFDFDF]'>Back</span></Link>
        <Link className='absolute top-0 mt-4 ' href="/frontend/loading">Loading page</Link>
        <div className="w-[450px] bg-[#262626]  shadow-xl bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default Register;
