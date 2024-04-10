import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLock, FaUnlock} from "react-icons/fa";

const Pricing = () => {
  return (
    <div className='max-w-screen min-h-screen'>
        <div className='flex flex-col items-center mt-16'>
          <h1 className=' text-md text-purple-500 font-semibold'> Pricing</h1>
          <p className='text-4xl text-gray-200 mb-8 font-semibold'> Only the free plan is available now.</p>
        </div>  

        <div className='bg-gray-700 my-4 mx-auto w-[266px] rounded-full py-1 px-1 h-10 items-center justify-between flex'>
           <button className='py-1 text-gray-200 w-32 bg-purple-500 rounded-full h-8'> Montly </button>
           <button className='py-1 text-gray-200 w-32 active:bg-purple-500 rounded-full h-8'> Yearly </button>
        </div>

        <div className='flex justify-center mt-8 p-4'>
          <div className='grid grid-cols-3 gap-x-8'>

          <div className='w-[400px] h-[480px] bg-[#262626] opacity-65 rounded-2xl shadow-xl self-end'>
            <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end relative'>
              <div className='flex flex-col mb-4'>
                <span className='w-7 h-7 ml-8 mb-2 bg-gradient-to-br from-pink-500 to-blue-400 rounded-full'></span>
                <h2 className='text-2xl font-bold text-gray-100 ml-8'> Basic </h2>   
                <p className='text-md text-gray-400 ml-8 w-2/3'> For more advanced users that want to store large files or big amounts</p>
              </div>
              <div className='bg-[#d852c8] overlay-100 shadow-xl flex h-8 w-32 mr-8 absolute top-0 right-0 text-gray-50 rounded-b-xl items-center justify-center'>
                <span className=''>Most popular</span>
              </div>
            </div>
            <div className='mx-8 mt-10'>
              <h2 className='text-3xl text-gray-100'>$5 <span className='text-sm text-gray-400 font-thin'> per month billed annually</span></h2>
              <h2 className='font-thin'> or <span className='text-gray-400 font-semibold'>$9 billed monthly</span></h2>
              <button className='w-full mt-8 py-2 items-center justify-center flex bg-purple-500 rounded-lg text-gray-200'> <FaLock className='text-gray-300 w-6 h-8'/> </button>
              <div>
                <h3 className='font-semibold text-gray-100 pt-4'> Everything in Free and:</h3>
                <ul className='list-disc font-light text-sm pl-4 mt-2 text-gray-200'>
                  <li className='py-1'>Export option and statistics</li>
                  <li className='py-1'>500MB capacity for docs</li>
                  <li className='py-1'>20 color to choose from</li>
                </ul>
              </div>
            </div>
          </div>


          <div className='w-[400px] h-[550px] border-2 border-purple-500 bg-[#262626] rounded-2xl shadow-xl'>
            <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end'>
              <div className='flex flex-col mb-8'>
                <span className='w-7 h-7 ml-8 mb-4  bg-gradient-to-br from-purple-500 to-green-400 rounded-full'></span>
                <h2 className='text-2xl font-bold text-gray-100 ml-8'> Free </h2>   
                <p className='text-md text-gray-400 ml-8 w-2/3'> version for anyone, manage your files efficiently.  </p>
              </div>
            </div>
            <div className='mx-8 mt-16'>
              <h2 className='text-3xl text-gray-100'>$0 <span className='text-sm text-gray-400 font-thin'> per month billed annually </span></h2>
              <button className='w-full mt-8 py-2 items-center justify-center flex bg-purple-500 rounded-lg text-gray-200'> <FaUnlock className='text-gray-300 w-6 h-8'/> </button>
              <div>
                <h3 className='font-semibold text-gray-100 pt-8'> Featuring </h3>
                <ul className='list-disc font-light pl-4 mt-2 text-gray-200'>
                  <li className='py-1'>all files types supported</li>
                  <li className='py-1'>50MB capacity for docs</li>
                  <li className='py-1'>10 different color labels </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className='w-[400px] h-[480px] bg-[#262626] opacity-65 rounded-2xl shadow-xl self-end'>
              <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end relative'>
                <div className='flex flex-col mb-4'>
                  <span className='w-7 h-7 ml-8 mb-2 bg-gradient-to-br from-yellow-300 to-rose-400 rounded-full'></span>
                  <h2 className='text-2xl font-bold text-gray-100 ml-8'> Pro </h2>   
                  <p className='text-md text-gray-400 ml-8 w-2/3'> For professionals that like to store ultra large amount of documents </p>
                </div>
                <div className='bg-[#ff8f39] flex h-8 w-32 mr-8 absolute top-0 right-0 shadow-xl text-gray-50 rounded-b-xl items-center justify-center'>
                  <span className=''>Best Price</span>
                </div>
              </div>
              <div className='mx-8 mt-10'>
                <h2 className='text-3xl text-gray-100'>$19 <span className='text-sm text-gray-400 font-thin'> per month billed annually</span></h2>
                <h2 className='font-thin'> or <span className='text-gray-400 font-semibold'>$27 billed monthly</span></h2>
                <button className='w-full mt-8 py-2 items-center justify-center flex bg-purple-500 rounded-lg text-gray-200'> <FaLock className='text-gray-300 w-6 h-8'/> </button>
                <div>
                  <h3 className='font-semibold text-gray-100 pt-4'> Everything in Free, Basic and:</h3>
                  <ul className='list-disc font-light text-sm pl-4 mt-2 text-gray-200'>
                    <li className='py-1'>Folder structure system</li>
                    <li className='py-1'>10GB capacity</li>
                    <li className='py-1'>Unlimited colors for labels</li>
                  </ul>
                </div>
              </div>
          </div>

  </div>
        </div>

        <div>
          <button className='flex flex-row items-center text-gray-200 font-bold mx-auto my-8'> Click to learn more <FaArrowRightLong className='w-6 h-4 ml-2 text-gray-200'/> </button>
        </div>



    </div>
  )
}

export default Pricing;