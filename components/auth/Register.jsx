import React, { useState } from 'react';
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
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedPicture, setSelectedPicture] = useState(null);

    const handleInputClick = (index) => {
        setSelectedPicture(index);
    };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

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
        await addUserDataToFirestore(user.uid, email, username, age, phoneNumber);

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


  const options = [
    { id: 1, title: "Storing Documents" },
    { id: 2, title: "Password Manager" },
    { id: 3, title: "Project Management" },
    { id: 4, title: "File Sharing" },
    { id: 5, title: "Note Taking" },
    { id: 6, title: "Calendar Integration" },
    { id: 7, title: "Task Tracking" },
    { id: 8, title: "Contact Management" },
    { id: 9, title: "Expense Tracking" },
    { id: 10, title: "Data Analysis" },
  ];
  
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const handleOptionToggle = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };
  
  async function addUserDataToFirestore(userId, email, username, age, phoneNumber) {
    try {
        const docRef = await addDoc(collection(db, "profiles"), {
            userId: userId,
            email: email,
            username: username,
            age: age,
            phoneNumber: phoneNumber
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
  } 

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col h-full items-center justify-between">
            <div className="flex flex-col items-center w-1/2 space-y-2">
              <div className="flex flex-row space-x-1 mt-12">
                <FaWarehouse className="w-10 mr-2 h-auto text-[#DFDFDF]" />
                <h2 className="text-2xl pt-2 text-[#DFDFDF]"> DataDepot – Sign up </h2>
              </div>
              {successAlertVisible && (
                <div role="alert" className="text-green-500 absolute top-24 justify-center w-screen py-5 px-4 rounded flex items-center">
                  <FaCheckCircle className="mr-2" />
                  <span>Register was successfull!</span>
                </div>
              )}
              {errorAlertVisible && (
                <div role="alert" className="text-red-500 justify-center w-screen py-5 px-4 rounded flex items-center">
                  <FiAlertCircle className="mr-2" />
                  <span>Wrong email / password! Please try again</span>
                </div>
              )}
            </div>
  
            {/* Login */}
            <div className="w-2/4 flex flex-col">
              <Link className="ml-1 absolute left-2 top-2 px-4 py-2 rounded-full hover:bg-gray-700 duration-300 flex flex-row items-center" href="/">
                <BsArrow90DegLeft className="w-4 h-4 mr-2 text-[#DFDFDF]" /> Back
              </Link>
              <h2 className="text-[#DFDFDF] text-3xl text-center font-semibold pt-10">Welcome to DataDepot</h2>
              <p className="text-center font-light mt-1 mb-2 text-gray-200"> Please create an account or switch to login. <span className="text-xs">(fields with * are optional)</span> </p>
  
              <div className="items-center flex flex-col w-full">
                <form className="w-full" >
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
                  <div className="relative w-full my-4">
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
  
                    <button type="submit" onClick={() => setStep(2)} className="py-3 rounded-md shadow-lg bg-purple-500 text-[#fffddd] hover:bg-purple-600 duration-300 mb-6 w-full">
                      Continue
                    </button>
                  </div>
                </form>
  
                <div className="flex flex-row items-center mx-auto w-full justify-between m-1">
                  <div className="w-[35%] mr-2 border-b-[1.5px] h-0 border-gray-500"></div>
                  <p className="text-xs w-[30%] text-center"> Or Continue With</p>
                  <div className="w-[35%] ml-2 border-b-[1.5px] h-0 border-gray-500"></div>
                </div>
  
                <div className="flex flex-row w-full justify-center m-1 items-center">
                  <button className="p-3 m-3 border-[#DFDFDF] text-sm hover:bg-[#3D3D3D] duration-300 text-[#DFDFDF] border rounded-full flex flex-row items-center center">
                    <AiFillApple className="w-7 h-7" />
                  </button>
  
                  <button className="p-3 m-3 border-[#DFDFDF] text-sm hover:bg-[#3D3D3D] duration-300 text-[#DFDFDF] border rounded-full flex flex-row items-center justify-between">
                    <Image src="/icons/google_btn.svg" alt="Google icon" width={28} height={28} className="" />
  
                  </button>
  
                  <button className="p-3 m-3 border-[#DFDFDF] text-sm hover:bg-[#3D3D3D] duration-300 text-[#DFDFDF] border rounded-full  flex flex-row items-center justify-between">
                    <FaGithub className="w-7 h-7" />
                  </button>
                </div>
  
                  <p className="mb-8 mt-2 items-center text-md flex flex-col">Already have an account? <Link className="font-semibold pt-1 text-blue-500" href="/auth/login"> Login </Link></p>
              </div>
            </div>
  
            <div className="mb-4">
              <p className="w-[60%] text-wrap mx-auto text-center text-md font-light">Join DataDepot for free! Quickly login or create an account and start using the app. By joining you agree to our Privacy Policy Terms</p>
            </div>
  
          </div>
        );
      case 2:
        return (
          <div className="w-screen flex flex-col justify-between items-center h-screen">
            <div className="flex flex-col items-center w-1/2 space-y-2">
              <div className="flex flex-row space-x-1 mt-12">
                <FaWarehouse className="w-10 mr-2 h-auto text-[#DFDFDF]" />
                <h2 className="text-2xl pt-2 text-[#DFDFDF]"> DataDepot – Sign up </h2>
              </div>
            </div>

            <div className='items-center w-2/3 mt-2 flex flex-col'>
              <h1 className='text-3xl font-bold text-gray-200 pb-2 '> Step 2 - Additional info</h1>
              <p className='text-gray-300 w-1/2 mb-4 text-center'>You can tell us more about yourself, but everything is <strong>optional</strong>. It is up to you! This data is stored inside your folder that you can edit any time.</p>
              <div className='w-1/3 flex mt-4 flex-col items-start'>
                <p className='text-gray-300 font-medium'> What is your full name? *</p>
                <input
                  type="name"
                  name="text"
                  //value={formData.name}
                  value="Ondřej"
                  onChange={handleChange}
                  className="block bg-[#3D3D3D] text-md w-full border mt-2 my-2 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className='w-1/3 flex mt-4 flex-col items-start'>
                <p className='text-gray-300 font-medium'> What is your phone number? * </p>
                <input
                  type="tel"
                  name="phone"
                  //value={formData.phoneNumber}
                  value="333666999"
                  onChange={handleChange}
                  className="block bg-[#3D3D3D] text-md w-full border my-2 mb-2 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className='w-1/3 flex flex-col items-start mt-4'>
                <p className='text-gray-300 font-medium'> What is your age? * </p>
                <input
                    type="number"
                    name="age"
                    //value={formData.age}
                    value="19"
                    onChange={handleChange}
                    className="block bg-[#3D3D3D] text-md w-full  border my-2 mb-4 px-2 py-2 text-[#DFDFDF] rounded-md border-[#B6B6B6] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Your age"
                    required
                  />
              </div>
            
              <button className="py-2 rounded-md bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mt-4 mb-2 w-1/3" onClick={() => setStep(3)} >Continue</button>
              <button className=" rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(1)}> 
                <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
                Previous
              </button>
              <p className='mb-8 mt-2 items-center text-md flex flex-col text-blue-500 hover:text-blue-600 duration-300 cursor-pointer' onClick={() => setStep(3)}> Skip this step</p>
           </div>

           <div className="mb-4">
              <p className="w-[55%] text-wrap mx-auto text-center text-md font-light">Join DataDepot for free! Quickly login or create an account and start using the app. By joining you agree to our Privacy Policy Terms</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-screen flex flex-col justify-between items-center h-screen">
            <div className="flex flex-col items-center w-1/2 space-y-2">
              <div className="flex flex-row space-x-1 mt-12">
                <FaWarehouse className="w-10 mr-2 h-auto text-[#DFDFDF]" />
                <h2 className="text-2xl pt-2 text-[#DFDFDF]"> DataDepot – Sign up </h2>
              </div>
            </div>

            <div className='items-center w-2/3  h-2/3 mt-36 flex flex-col'>
              <h1 className='text-3xl font-bold text-gray-200 pb-2 '> Step 3 - Additional info</h1>
             <p className='text-gray-300 w-1/2 mb-4 text-center'>You can tell us more about yourself, but everything is <strong>optional</strong>. It is up to you! This data is stored inside your folder that you can edit any time.</p>
              
              <h2 className='py-4 text-lg text-gray-300 font-medium'> Who are you?</h2>
              <div className='w-1/3 h-1/4 mb-4 flex flex-row space-x-8'>
                  <div className={`w-1/2 flex flex-col justify-center items-center rounded-lg shadow-sm border cursor-pointer bg-[#3d3d40] text-[#DFDFDF] duration-300 ${selectedGender === 'male' ? 'bg-[#48484b] border-2 border-purple-300 shadow-lg' : 'hover:bg-[#48484b] hover:border-gray-400 hover:shadow-lg'}`} onClick={() => handleGenderSelect('male')}>
                        <FaMale className='w-8 h-8 mb-1'/>
                        Male
                  </div>
                  <div className={`w-1/2 flex flex-col justify-center items-center rounded-lg shadow-sm border cursor-pointer bg-[#3d3d40] text-[#DFDFDF] duration-300 ${selectedGender === 'female' ? 'bg-[#48484b] border-2 border-purple-300 shadow-lg' : 'hover:bg-[#48484b] hover:border-gray-400 hover:shadow-lg'}`} onClick={() => handleGenderSelect('female')}>
                        <FaFemale className='w-8 h-8 mb-1'/>
                        Female
                  </div>
              </div> 
              
              <button className="py-2 rounded-md bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mt-4 mb-2 w-1/3" onClick={() => setStep(4)} >Continue</button>
              <button className=" rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(2)}> 
                <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
                Previous
              </button>
              <p className='mb-8 mt-2 items-center text-md flex flex-col text-blue-500 hover:text-blue-600 duration-300 cursor-pointer' onClick={() => setStep(4)}> Skip this step</p>
           </div>

           <div className="mb-4">
              <p className="w-[55%] text-wrap mx-auto text-center text-md font-light">Join DataDepot for free! Quickly login or create an account and start using the app. By joining you agree to our Privacy Policy Terms</p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="w-screen flex flex-col justify-between items-center h-screen">
            <div className="flex flex-col items-center w-1/2 space-y-2">
              <div className="flex flex-row space-x-1 mt-12">
                <FaWarehouse className="w-10 mr-2 h-auto text-[#DFDFDF]" />
                <h2 className="text-2xl pt-2 text-[#DFDFDF]"> DataDepot – Sign up </h2>
              </div>
            </div>
        
            <div className='items-center w-2/3  h-2/3 mt-36 flex flex-col'>
              <h1 className='text-3xl font-bold text-gray-200 pb-2 '> Step 4 - Select default profile picture</h1>
              <p className='text-gray-300 w-1/2 mb-4 text-center'>Select one image to have as your profile picture or add custom</p>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[1, 2, 3, 4, 5, 6].map(index => (
                  <Image 
                      key={index}
                      alt={`profile picture ${index}`}
                      src={`/profile_pictures/${index}.jpeg`}
                      width={105}
                      height={105}
                      onClick={() => handleInputClick(index)}
                      className={`rounded-full mt-4 cursor-pointer ${
                          selectedPicture === index ? 'border-4 scale-105 border-purple-500' : ''
                      }`}
                  />
                ))}
              </div>

              <button className="py-2 rounded-md bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mt-4 mb-2 w-1/3" onClick={() => setStep(5)}> Continue</button>
              <button className="rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(3)}> 
                <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
                Previous
              </button>
           </div>
        
           <div className="mb-4">
              <p className="w-[55%] text-wrap mx-auto text-center text-md font-light">Join DataDepot for free! Quickly login or create an account and start using the app. By joining you agree to our Privacy Policy Terms</p>
            </div>
          </div>
        );
        case 5:
          return (
            <div className="w-screen flex flex-col justify-between items-center h-screen">
              <div className="flex flex-col items-center w-1/2 space-y-2">
                <div className="flex flex-row space-x-1 mt-12">
                  <FaWarehouse className="w-10 mr-2 h-auto text-[#DFDFDF]" />
                  <h2 className="text-2xl pt-2 text-[#DFDFDF]"> DataDepot – Sign up </h2>
                </div>
              </div>
          
              <div className='items-center w-2/3  h-2/3 mt-36 flex flex-col'>
                <h1 className='text-3xl font-bold text-gray-200 pb-2 '> Step 4 - Select the usage of DataDepot</h1>
                <p className='text-gray-300 w-1/2 mb-4 text-center'>Select minimally <strong>one</strong> thing that you want to use DataDepot for</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {options.map(option => (
                    <label key={option.id} htmlFor={`option-${option.id}`} className="flex items-center px-3 py-1 bg-[#2f3858] rounded-md cursor-pointer">
                      <input
                        type="checkbox"
                        id={`option-${option.id}`}
                        value={option.id}
                        checked={selectedOptions.includes(option.id)}
                        onChange={() => handleOptionToggle(option.id)}
                        className="mr-2"
                      />
                      <span className="text-gray-200">{option.title}</span>
                    </label>
                  ))}
                </div>
                <button className="py-2 rounded-md bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mt-4 mb-2 w-1/3" onClick={handleRegister} >Register</button>
                <button className="rounded-md bg-transparent text-[#c4c4c4] hover:text-[#e6e6e6] duration-300 flex flex-row items-center py-1 mb-6 mt-2" onClick={() => setStep(4)}> 
                  <HiOutlineArrowLongLeft className='mr-2 font-thin'/> 
                  Previous
                </button>
             </div>
          
             <div className="mb-4">
                <p className="w-[55%] text-wrap mx-auto text-center text-md font-light">Join DataDepot for free! Quickly login or create an account and start using the app. By joining you agree to our Privacy Policy Terms</p>
              </div>
            </div>
          );
      default:
        return null;
    }
  };
  
  return (
    <div className="flex w-screen h-screen">
      {/* Left Side with Image (only in step 1) */}
      {step === 1 && (
        <div className="w-1/2 bg-gray-800 relative flex justify-center items-center border-r-[0.3px] border-[#6e6e6e]">
          <Image
            src="/register_bg.jpeg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      )}
  
      {/* Right Side with Form */}
      <div className="w-1/2 relative flex flex-col justify-center items-center">
        <div className="w-full h-full mx-auto backdrop-filter backdrop-blur-lg rounded-2xl">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
}

export default Register;