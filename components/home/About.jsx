import React from 'react'

const WhyChoose = () => {
  return (
    <div className='max-w-screen h-[600px] flex flex-row'>
      <div className='w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl text-gray-400 uppercase font-bold text-center pb-4'>
            Get started
          </h2>
      </div>
      <div className='w-1/2 flex justify-center items-center'> 
        <div className="stats shadow-xl bg-base-200">
    
          <div className="stat place-items-center">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhyChoose