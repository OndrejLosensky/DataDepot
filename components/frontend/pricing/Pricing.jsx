import React, {useState} from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [hovered, setHovered] = useState(false);


  return (
    <div className='max-w-screen min-h-screen overflow-x-hidden'>

        <div className='flex flex-col items-center mt-16'>
          <h1 className=' text-md text-purple-500 font-semibold'> Pricing</h1>
          <p className='text-4xl text-gray-200 mb-8 font-semibold'> Only the free plan is available now.</p>
        </div>  

        <div className="z-[-1] flex place-items-center before:dark:bg-gradient-to-bl before:dark:from-pink-400 before:dark:to-sky-300 before:dark:opacity-[15%] before:absolute before:h-[420px] before:w-full sm:before:w-[460px] before:translate-x-[-170px] before:translate-y-[120px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-2xl after:content-['']  after:dark:from-rose-800 after:dark:via-blue-200 after:dark:opacity-100 "></div>
        <div className="z-[-1] flex place-items-center before:dark:bg-gradient-to-l before:dark:from-sky-400 before:dark:to-violet-400 before:dark:opacity-[15%] before:absolute before:h-[290px] before:w-full sm:before:w-[320px] before:translate-x-[1300px] before:translate-y-[650px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-yellow-400 after:blur-2xl after:content-['']  after:dark:from-rose-800 after:dark:via-blue-200 after:dark:opacity-100"></div>


        <div className='bg-gray-700 my-4 mx-auto w-[266px] rounded-full py-1 px-1 h-10 items-center justify-between flex'>
            <button
              className={`pricing-btn py-1 text-gray-200 w-32 rounded-full h-8 ${selectedPlan === 'monthly' ? 'bg-purple-500 duration-500' : ''}`}
              onClick={() => setSelectedPlan('monthly')}
            >
              Monthly
            </button>
            <button
              className={`pricing-btn py-1 text-gray-200 w-32 rounded-full h-8 ${selectedPlan === 'yearly' ? 'bg-purple-500 duration-500' : ''}`}
              onClick={() => setSelectedPlan('yearly')}
            >
              Yearly
            </button>
        </div>

        <div className='flex justify-center mt-8 p-4'>
          <div className='grid grid-cols-3 gap-x-8'>

          <div className='w-[400px] h-[480px] bg-[#262626] opacity-65 rounded-2xl shadow-xl self-end'>
            <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end relative'>
              <div className='flex flex-col mb-4'>
                <span className='w-7 h-7 ml-8 mb-2 bg-gradient-to-br from-[#6157FF] to-[#EE49FD] rounded-full'></span>
                <h2 className='text-2xl font-bold text-gray-100 ml-8'> Basic </h2>   
                <p className='text-md text-gray-400 ml-8 w-2/3'> For more advanced users that want to store large files or big amounts</p>
              </div>
              <div className='bg-[#d852c8] overlay-100 shadow-xl flex h-8 w-32 mr-8 absolute top-0 right-0 text-gray-50 rounded-b-xl items-center justify-center'>
                <span className=''>Most popular</span>
              </div>
            </div>
            <div className='mx-8 mt-10'>
              {selectedPlan === 'yearly' ? (
                <div>             
                  <h2 className='text-3xl text-gray-100'>$99 <span className='text-sm text-gray-400 font-thin'> once a year</span></h2>
                </div>
              ) : (
                <div>
                  <h2 className='text-3xl text-gray-100'>$5 <span className='text-sm text-gray-400 font-thin'>billed monthly</span></h2>
                </div>
              )}
              <button className='w-full mt-8 py-2 items-center justify-center flex bg-purple-500 rounded-lg text-gray-200 cursor-default'> <CiLock className='text-gray-300 w-6 h-8'/> </button>
              <div>
                <h3 className='font-semibold text-gray-100 pt-4'> Everything in Free and:</h3>
                <ul className='font-light text-sm mt-2 text-gray-200'>
                  <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/> Export option and statistics</li>
                  <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/>  500MB capacity for docs</li>
                  <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/>20 color to choose from</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='w-[400px] h-[550px] border-2 border-purple-500 bg-[#262626] rounded-2xl shadow-xl'>
            <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end'>
              <div className='flex flex-col mb-8'>
                <span className='w-7 h-7 ml-8 mb-4  bg-gradient-to-br from-[#103CE7] to-[#64E9FF] rounded-full'></span>
                <h2 className='text-2xl font-bold text-gray-100 ml-8'> Free </h2>   
                <p className='text-md text-gray-400 ml-8 w-2/3'> version for anyone, manage your files efficiently.  </p>
              </div>
            </div>
            <div className='mx-8 mt-16'>
              {selectedPlan === 'yearly' ? (
                <div>             
                  <h2 className='text-3xl text-gray-100'>Free</h2>
                </div>
              ) : (
                <div>
                  <h2 className='text-3xl text-gray-100'>Free</h2>
                </div>
              )}
              <button className='w-full mt-8 py-2 text-lg font-medium items-center justify-center flex bg-purple-500 cursor-default rounded-lg text-gray-200'> <CiLock className='text-gray-300 w-6 h-8 mr-2'/> </button>
              <div>
                <h3 className='font-semibold text-gray-100 pt-8'> Featuring </h3>
                <ul className='font-light mt-2 text-gray-200'>
                  <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/> all files types supported</li>
                  <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/>50MB capacity for docs</li>
                  <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/>10 different color labels </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className='w-[400px] h-[480px] bg-[#262626] opacity-65 rounded-2xl shadow-xl self-end'>
              <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end relative'>
                <div className='flex flex-col mb-4'>
                  <span className='w-7 h-7 ml-8 mb-2 bg-gradient-to-br from-[#FF4066] to-[#FFF16A] rounded-full'></span>
                  <h2 className='text-2xl font-bold text-gray-100 ml-8'> Pro </h2>   
                  <p className='text-md text-gray-400 ml-8 w-2/3'> For professionals that like to store ultra large amount of documents </p>
                </div>
                <div className='bg-[#ff8f39] flex h-8 w-32 mr-8 absolute top-0 right-0 shadow-xl text-gray-50 rounded-b-xl items-center justify-center'>
                  <span className=''>Best Price</span>
                </div>
              </div>
              <div className='mx-8 mt-10'>
                {selectedPlan === 'yearly' ? (
                  <div>             
                    <h2 className='text-3xl text-gray-100'>$399 <span className='text-sm text-gray-400 font-thin'> once a year</span></h2>
                  </div>
                ) : (
                  <div>
                    <h2 className='text-3xl text-gray-100'>$27 <span className='text-sm text-gray-400 font-thin'>billed monthly</span></h2>
                  </div>
                )}
                <button className='w-full mt-8 py-2 items-center justify-center flex bg-purple-500 rounded-lg text-gray-200 cursor-default'> <CiLock className='text-gray-300 w-6 h-8'/> </button>
                <div>
                  <h3 className='font-semibold text-gray-100 pt-4'> Everything in Free, Basic and:</h3>
                  <ul className='list-disc font-light text-sm pl-4 mt-2 text-gray-200'>
                    <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/>Folder structure system</li>
                    <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/>10GB capacity</li>
                    <li className='py-1 flex flex-row items-center gap-3'> <IoIosCheckmarkCircleOutline className='text-green-400'/>Unlimited colors for labels</li>
                  </ul>
                </div>
              </div>
          </div>

        </div>

        </div>

        <span
        className="flex flex-row space-x-2 items-center absolute left-[46%] font-semibold mt-4 cursor-pointer text-gray-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p>Click to learn more</p>
        <FaArrowRightLong
          className="h-4 w-6 transition-all duration-500"
          style={{ marginLeft: hovered ? '12px' : '8px' }}
        />
      </span>

    </div>
  )
}

export default Pricing;