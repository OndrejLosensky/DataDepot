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
import { FaMale, FaFemale } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { BsArrow90DegLeft } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

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
  const [passwordError, setPasswordError] = useState('');

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
        }, 3000); 
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

  const validatePassword = (password) => {
    const capitalLetterRegex = /[A-Z]/;
    const isValidLength = password.length >= 8;
    const hasCapitalLetter = capitalLetterRegex.test(password);
    return isValidLength && hasCapitalLetter;
  };

  const handleContinue = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long with one capital letter');
    } else {
      setStep(2);
      console.log('Validation successful! Proceed to the next step or submit the form.');
      setPasswordError(" ");
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col h-full items-center justify-between">
          <div className='flex flex-col items-center w-1/2 space-y-2'>
            <div className="flex flex-row space-x-1 mt-12">
              <FaWarehouse className='w-10 mr-2 h-auto text-[#DFDFDF]'/>
              <h2 className='text-2xl pt-2 text-[#DFDFDF]'> DataDepot – Sign up </h2>
            </div>
            {successAlertVisible && (
                <div role="alert" className={` text-green-500 absolute top-24 justify-center w-screen py-5 px-4 rounded flex items-center`}>
                  <FaCheckCircle className="mr-2" />
                  <span>Login was successfull!</span>
                </div>
              )}
               {errorAlertVisible && (
                <div role="alert" className={`text-red-500 justify-center w-screen py-5 px-4 rounded flex items-center`}>
                  <FiAlertCircle className="mr-2" />
                  <span>Wrong email / password! Please try again</span>
                </div>
              )}
          </div>

          {/* Login */}
          <div className='w-2/4 flex flex-col'>
            <Link className='ml-1 absolute left-2 top-2 px-4 py-2 rounded-full hover:bg-gray-700 duration-300 flex flex-row items-center' href="/"><BsArrow90DegLeft className='w-4 h-4 mr-2 text-[#DFDFDF]'/> Back </Link>
              <h2 className=' text-[#DFDFDF] text-3xl text-center font-semibold pt-10'>Welcome to DataDepot</h2>
              <p className='text-center font-light mt-1 mb-2 text-gray-200'> Please create an account or switch to login. <span className='text-xs'>(fields with * are optional)</span> </p>
            
            <div className='items-center flex flex-col w-full'>
              <form className='w-full' >
                  <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block bg-[#3D3D3D] text-md w-full border my-4 px-2 py-3 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Your e-mail"
                  required
                  autoFocus
                />
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="focused block bg-[#3D3D3D] text-md w-full border my-4 mt-4 px-2 py-3 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Password"
                    required
                  />
                  {showPassword ? (
                    <FiEyeOff onClick={handleTogglePasswordVisibility} className="absolute right-4 top-4 text-gray-400 cursor-pointer" />
                  ) : (
                    <FiEye onClick={handleTogglePasswordVisibility} className="absolute top-4 right-4 text-gray-400 cursor-pointer" />
                  )}
                </div>
                <div className='relative w-full my-4'>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block bg-[#3D3D3D] text-md w-full border my-4 mt-2 px-2 py-3 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Confirm password"
                    required
                  />
                  {showConfirmPassword ? (
                    <FiEyeOff onClick={handleToggleConfirmPasswordVisibility} className="absolute right-4 top-4 text-gray-400 cursor-pointer" />
                  ) : (
                    <FiEye onClick={handleToggleConfirmPasswordVisibility} className="absolute right-4 top-4 text-gray-400 cursor-pointer" />
                  )}

                  <button type="submit" onClick={handleContinue} className="py-3 rounded-md shadow-lg bg-purple-500 text-[#fffddd] hover:bg-purple-600 duration-300 mb-6 w-full">
                      Continue
                  </button>
                </div>
              </form>
              
              <div className='flex flex-row items-center mx-auto w-full justify-between mt-2 mb-4'>
                <div className='w-[35%] mr-2 border-b-[1.5px] h-0 border-gray-500'></div>
                <p className='text-xs w-[30%] text-center'> Or Continue With</p>
                <div className='w-[35%] ml-2 border-b-[1.5px] h-0 border-gray-500'></div>
              </div>

             <div className='flex flex-row w-full justify-center m-1 items-center'>
                <button className='p-3 m-3 border-[#DFDFDF] text-sm hover:bg-[#3D3D3D] duration-300 text-[#DFDFDF] border rounded-full flex flex-row items-center center'>
                  <AiFillApple className=' w-7 h-7'/> 
                </button>

                <button className='p-3 m-3 border-[#DFDFDF] text-sm hover:bg-[#3D3D3D] duration-300 text-[#DFDFDF] border rounded-full flex flex-row items-center justify-between'>
                  <Image src='/icons/google_btn.svg' alt="Google icon" width={28} height={28} className=''/>
                  
                </button>

                <button className='p-3 m-3 border-[#DFDFDF] text-sm hover:bg-[#3D3D3D] duration-300 text-[#DFDFDF] border rounded-full  flex flex-row items-center justify-between'>
                  <FaGithub className=' w-7 h-7 '/>
                </button>
             </div>


              <p className='mb-8 mt-2 items-center text-md flex flex-col'>Already have an account? <Link className='font-semibold pt-1 text-blue-500' href="/auth/login"> Login </Link></p>
            </div>
          </div>

          <div className='mb-4'>
            <p className='w-[55%] text-wrap mx-auto text-center text-md font-light'>Join DataDepot for free! Quickly login or create an account and start using the app. By joining you agree to our Privacy Policy Terms</p>
          </div>
          
        </div>
        );
      case 2:
        return (
          <div className="flex flex-col justify-center">
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
              type="tel"
              name="phone"
              value={formData.password}
              onChange={handleChange}
              className="block bg-[#3D3D3D] text-md w-[85%]  border my-2 mb-2 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Phone number"
              required
            />
            <input
              type="number"
              name="age"
              value={formData.password}
              onChange={handleChange}
              className="block bg-[#3D3D3D] text-md w-[85%]  border my-2 mb-4 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Your age"
              required
            />
          
          
            <button className="py-2 rounded-md bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mb-2 w-[85%]" onClick={() => setStep(3)} >Continue</button>
            <button className=" rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(1)}> 
              <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
              Previous
            </button>
            <p className='mb-8 mt-2 items-center text-md flex flex-col'>Already have an account? <Link className='font-semibold pt-1 text-blue-500' href="/auth/login"> Login </Link></p>
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
            
              <button className="py-2 rounded-md bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mb-2 w-[85%]" onClick={() => setStep(4)} >Continue</button>
              <button className=" rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(2)}> 
                <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
                Previous
              </button>
              <p className='mb-8 mt-2 items-center text-md flex flex-col'>Already have an account? <Link className='font-semibold pt-1 text-blue-500' href="/auth/login"> Login </Link></p>
             </div>
            </div>
          );
      case 4: 
        return (
          <div className="flex flex-col  justify-center">
            <div className='w-full h-16 border-b border-gray-400 flex items-center justify-between'>
                <p className='text-left text-2xl text-[#DFDFDF] mx-8'>Register</p>
            </div>
            <h2 className=' text-[#DFDFDF] text-xl font-semibold ml-8 pt-8'>Select your sex<span className='text-sm text-gray-400 font-thin'>(optional)</span></h2>
            <div className='items-center flex flex-col mt-6'>           
              <div className='flex flex-row space-x-8'>
                <div className='flex flex-col justify-center items-center rounded-lg shadow-sm border border-gray-500 cursor-pointer bg-[#3d3d40] text-[#DFDFDF] duration-300 hover:bg-[#48484b] hover:border-gray-400 hover:shadow-lg w-36 h-32'>
                      <FaMale className='w-8 h-8 mb-1'/>
                      Male
                </div>
                <div className='flex flex-col justify-center items-center rounded-lg shadow-sm border border-gray-500 cursor-pointer bg-[#3d3d40] text-[#DFDFDF] duration-300 hover:bg-[#48484b] hover:border-gray-400 hover:shadow-lg w-36 h-32'>
                      <FaFemale className='w-8 h-8 mb-1'/>
                      Female
                </div>
              </div> 
              <button className="py-2 mt-6 rounded-md bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mb-2 w-[85%]" onClick={handleRegister} >Register</button>
              <button className=" rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(3)}> 
                <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
                Previous
              </button>
              <p className='mb-8 mt-2 items-center text-md flex flex-col'>Already have an account? <Link className='font-semibold pt-1 text-blue-500' href="/auth/login"> Login </Link></p>
             </div>
          </div>
      );
      default:
        return null;
    }
  };

  return (
    <div className='flex w-screen h-screen'>
      <div className="flex place-items-center before:absolute before:h-[600px] before:w-full sm:before:w-[2000px] before:translate-x-[0px] before:translate-y-[0px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-400 before:dark:opacity-30 after:dark:from-rose-500 after:dark:via-blue-500 after:dark:opacity-100 before:lg:h-[250px] z-[-1]"></div>

      {/* Left Side with Image */}
      <div className="w-1/2 bg-gray-800 relative flex justify-center items-center border-r-[0.3px] border-[#6e6e6e]">
        <Image
          src="/register_bg.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className='text-gray-200 absolute bottom-2 px-2 py-1 bg-sky-900 rounded-lg'> E-mail: <span className='font-bold'>ondra@gmail.com</span> | heslo: <span className='font-bold'>  123456</span> </p>
      </div>


      {/* Right Side with Form */}
      <div className="w-1/2 relative flex flex-col justify-center items-center">
        <div className="w-full h-full mx-auto backdrop-filter backdrop-blur-lg rounded-2xl">
          <div> <p className='absolute bottom-2 right-2 text-sm text-gray-400 font-thin'> © 2024 DataDepot </p> </div>
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default Register;

{/* 
<input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block bg-[#3D3D3D] text-md w-[85%] border my-2 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
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
*/}