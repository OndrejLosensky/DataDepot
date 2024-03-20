import React from 'react'

const WhyChoose = () => {
  return (
    <div className='max-w-screen h-[600px]'>
      <div className='w-3/4 mx-auto'>
        <h2 className='text-4xl font-semibold text-center py-4'> Frequently asked questions </h2>
        <div className="collapse collapse-arrow py-2">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-2xl font-medium border-gray-400 border-b-2">
            Click to open this one and close others
          </div>
          <div className="collapse-content pt-4"> 
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow py-2">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-2xl font-medium border-gray-400 border-b-2">
            Click to open this one and close others
          </div>
          <div className="collapse-content pt-4"> 
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow py-2">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-2xl font-medium border-gray-400 border-b-2">
            Click to open this one and close others
          </div>
          <div className="collapse-content pt-4"> 
            <p>hello</p>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default WhyChoose