import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiFillApple } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../src/app/firebaseConfig';
import { useRouter } from 'next/router';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { IoCloseSharp } from "react-icons/io5";


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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
    }
    try {
        // Create user with email and password
        setSuccessAlertVisible(true);
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        // Redirect to dashboard upon successful registration
        router.push('/backend/dashboard');
        setSuccessAlertVisible(false);

    } catch (err) {
        setErrorAlertVisible(true);
        setError(err.message);
        setTimeout(() => {
          setErrorAlertVisible(false);
        }, 2000); 
    }
};

   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col  justify-center">
            <div className='w-full h-16 border-b border-gray-400 items-left flex items-center justify-between px-8'>
              <p className='text-left text-2xl text-[#DFDFDF]'>Register</p>
              <Link className='ml-1 px-2 py-2 rounded-full hover:bg-gray-700 duration-300' href="/"><IoCloseSharp className='w-6 h-6 text-[#DFDFDF]'/></Link>
            </div>

            <h2 className=' text-[#DFDFDF] text-xl font-semibold ml-8 pb-4 pt-10'>Welcome to DataDepot</h2>
           
            <div className='items-center flex flex-col'>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block bg-[#3D3D3D] text-md w-[85%]  border my-2 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Your e-mail"
                required
              />
                <div className="relative w-[85%]">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block bg-[#3D3D3D] text-md w-full border my-2 mt-2 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Password"
                    required
                  />
                  {showPassword ? (
                    <FiEyeOff onClick={handleTogglePasswordVisibility} className="absolute right-4 top-[23px] text-gray-400 cursor-pointer" />
                  ) : (
                    <FiEye onClick={handleTogglePasswordVisibility} className="absolute right-4 top-[23px] text-gray-400 cursor-pointer" />
                  )}
                </div>
                <div className='relative w-[85%]'>
                  <input
                     type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block bg-[#3D3D3D] text-md w-full border my-4 mt-2 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Confirm password"
                    required
                    />
                    {showConfirmPassword ? (
                      <FiEyeOff onClick={handleToggleConfirmPasswordVisibility} className="absolute right-4 top-[23px] text-gray-400 cursor-pointer" />
                    ) : (
                      <FiEye onClick={handleToggleConfirmPasswordVisibility} className="absolute right-4 top-[23px] text-gray-400 cursor-pointer" />
                    )}                                     
                </div>
            
              <button className="py-2 rounded-md shadow-lg bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mb-6 w-[85%]" onClick={handleRegister}>Continue</button>

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


              <p className='mb-8 mt-2 items-center text-md flex flex-col'>Already have an account? <Link className='font-semibold pt-1 text-blue-500' href="/auth/login"> Login </Link></p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col  justify-center">
            <div className='w-full h-16 border-b border-gray-400 flex items-center justify-between'>
                <p className='text-left text-2xl text-[#DFDFDF] mx-8'>Register</p>
            </div>


            <h2 className=' text-[#DFDFDF] text-xl font-semibold ml-8 pt-8'>Addition information <span className='text-sm text-gray-400 font-thin'>(optional)</span></h2>
           
           <div className='items-center flex flex-col'>
            <input
              type="name"
              name="text"
              value={formData.password}
              onChange={handleChange}
              className="block bg-[#3D3D3D] text-md w-[85%]  border mt-4 my-2 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Full name"
              required
            />
            <input
              type="phoneNumber"
              name="text"
              value={formData.password}
              onChange={handleChange}
              className="block bg-[#3D3D3D] text-md w-[85%]  border my-2 mb-4 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Phone number"
              required
            />
          
          
            <button className="py-2 rounded-md bg-[#428DFF] text-[#fffddd] hover:bg-[#034CB8] duration-300 mb-2 w-[85%]" onClick={() => setStep(3)} >Continue</button>
            <button className=" rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(1)}> 
              <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
              Previous
            </button>
            <p className='mb-8 text-sm'>Forgot password? Create new <span className='underline text-blue-500'>here</span></p>
           </div>
          </div>
        );
        case 3:
          return (
            <div className="flex flex-col  justify-center">
              <div className='w-full h-16 border-b border-gray-400 flex items-center justify-between'>
                  <p className='text-left text-2xl text-[#DFDFDF] mx-8'>Register</p>
              </div>
  
              <h2 className=' text-[#DFDFDF] text-xl font-semibold ml-8 pt-8'>Anything else about you? <span className='text-sm text-gray-400 font-thin'>(optional)</span></h2> 

             <div className='items-center flex flex-col'>
              <textarea rows={5} className="block bg-[#3D3D3D] text-md w-[85%]  border mt-4 my-4 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            
              <button className="py-2 rounded-md bg-[#428DFF] text-[#fffddd] hover:bg-[#034CB8] duration-300 mb-2 w-[85%]" onClick={handleRegister} >Register</button>
              <button className=" rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(2)}> 
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
          src="/register_bg.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="z-[-1] flex place-items-center before:absolute before:h-[170px] before:w-full sm:before:w-[350px] before:translate-x-[330px] before:translate-y-[280px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-30 after:dark:from-blue-500 after:dark:via-red-500 after:dark:opacity-100 before:lg:h-[250px]"></div>


      {/* Right Side with Form */}
      <div className="w-1/2  flex justify-center items-center">
        {successAlertVisible && (
            <div role="alert" className={` text-white bg-green-500 absolute top-0 left-0 w-screen py-5 px-4 rounded flex items-center`}>
              <FaCheckCircle className="mr-2" />
              <span>Login was successfull!</span>
            </div>
          )}
          {errorAlertVisible && (
          <div role="alert" className={`text-white bg-red-500 absolute top-0 left-0 w-screen py-5 px-4 rounded flex items-center`}>
            <FiAlertCircle className="mr-2" />
            <span>Error while logining. Please try again.</span>
          </div>
        )}
        {/* 
        <div className="w-[450px] bg-[#262626] shadow-xl bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl">
          {renderStepContent()}
        </div>
        */}
        <div className="w-[450px] bg-[#262626]  shadow-xl bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default Register;
