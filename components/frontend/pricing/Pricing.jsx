import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link'

const Pricing = () => {
  return (
    <div className='max-w-screen min-h-screen bg-[#18191A]'>
         <div className='w-screen h-16 bg-[#111212] flex items-center'>
          <Link href="/"><button className='btn btn-ghost ml-4'><FaArrowLeftLong /> Back</button></Link>
        </div>
        <div className='flex flex-col items-center mt-16'>
          <h1 className='text-gray-100 text-4xl font-semibold'> Pricing Plans</h1>
          <p className='text-md text-gray-300 font-thin'>We currently offer only the <span className='font-semibold'>Free</span> plan.</p>
        </div>  

        <div className='flex justify-center mt-4 p-4'>
          <div className='grid grid-cols-3 gap-x-8'>
            <div className='w-[400px] h-[480px] bg-[#262626] rounded-2xl shadow-xl self-end'>
              <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end'>
                  <div className='flex flex-col mb-4'>
                    <span className='w-7 h-7 ml-8 mb-2  bg-gradient-to-br from-pink-500 to-blue-400 rounded-full'></span>
                    <h2 className='text-2xl font-bold text-gray-100 ml-8'> Basic </h2>   
                    <p className='text-md text-gray-400 ml-8 w-2/3'> For more advanced users that want to store large files or big amounts   </p>
                  </div>
                </div>
                <div className='mx-8 mt-10'>
                  <h2 className='text-3xl text-gray-100'>$5 <span className='text-sm text-gray-400 font-thin'> per month billed annually</span></h2>
                  <h2 className='font-thin'> or  <span className='text-gray-400 font-semibold'>$9 billed monthly</span> </h2>
                  <button className='border-[0.5px] w-full mt-6 py-2 border-blue-500 hover:bg-blue-700 duration-300  bg-[#468ced] rounded-lg text-gray-100'> Get Started </button>
                  <div>
                    <h3 className='font-semibold text-gray-100 pt-4'> Everything in Free and:</h3>
                    <ul className='list-disc font-light text-sm pl-4 mt-2 text-gray-200'>
                      <li className='py-1'>Export option and statistics</li>
                      <li className='py-1'>500MB capacity for docs</li>
                      <li className='py-1'>20 color to choose from   </li>
                    </ul>
                  </div>
                </div>
            </div>

             <div className='w-[400px] h-[550px] bg-[#262626] rounded-2xl shadow-xl'>
      <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end'>
        <div className='flex flex-col mb-8'>
          <span className='w-7 h-7 ml-8 mb-4  bg-gradient-to-br from-purple-500 to-green-400 rounded-full'></span>
          <h2 className='text-2xl font-bold text-gray-100 ml-8'> Free </h2>   
          <p className='text-md text-gray-400 ml-8 w-2/3'> version for anyone, manage your files efficiently.  </p>
        </div>
      </div>
      <div className='mx-8 mt-16'>
        <h2 className='text-3xl text-gray-100'>$0 <span className='text-sm text-gray-400 font-thin'> per month billed annually </span></h2>
        <button className='border-[0.5px] w-full mt-8 py-2 border-gray-200 bg-[#3a3a3a] rounded-lg text-gray-100'> Current </button>
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
    
            <div className='w-[400px] h-[480px] bg-[#262626] rounded-2xl shadow-xl self-end'>
              <div className='h-1/3 w-full bg-[#323232] border-b-[0.3px] border-gray-500 shadow-md rounded-t-2xl flex items-end'>
                  <div className='flex flex-col mb-4'>
                    <span className='w-7 h-7 ml-8 mb-2  bg-gradient-to-br from-yellow-300 to-rose-400 rounded-full'></span>
                    <h2 className='text-2xl font-bold text-gray-100 ml-8'> Pro </h2>   
                    <p className='text-md text-gray-400 ml-8 w-2/3'> For professionals that like to store ultra large amount of documens  </p>
                  </div>
                </div>
                <div className='mx-8 mt-10'>
                  <h2 className='text-3xl text-gray-100'>$19 <span className='text-sm text-gray-400 font-thin'> per month billed annually</span></h2>
                  <h2 className='font-thin'> or  <span className='text-gray-400 font-semibold'>$27 billed monthly</span> </h2>
                  <button className='border-[0.5px] w-full mt-6 py-2 border-blue-500 hover:bg-blue-700 duration-300  bg-[#468ced] rounded-lg text-gray-100'> Get Started </button>
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



    </div>
  )
}

export default Pricing;