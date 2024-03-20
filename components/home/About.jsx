import React from 'react'

const WhyChoose = () => {
  return (
    <div className='max-w-screen h-[600px]'>
      <div className='w-3/4 mx-auto'>
        <h2 className='text-4xl font-semibold text-center mt-16 py-4'> Frequently asked questions </h2>
        <div className="collapse collapse-arrow py-2">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-2xl font-medium border-gray-400 border-b-2">
            What is DataDepot?
          </div>
          <div className="collapse-content pt-4"> 
            <p>DataDepot is a platform made using Next.js, Sqlite and TailwindCSS.
             Its an app to store files such as .docx, .pdf, .xlsx, .zip, .jpg and more... </p>
          </div>
        </div>
        <div className="collapse collapse-arrow py-2">
          <input type="radio" name="my-accordion-2"/> 
          <div className="collapse-title text-2xl font-medium border-gray-400 border-b-2">
            Is DataDepot free?
          </div>
          <div className="collapse-content pt-4"> 
            <p> Yes, DataDepot is completly free now. Also its open-source so you can see everything thats happening if you want to</p>
          </div>
        </div>
        <div className="collapse collapse-arrow py-2">
          <input type="radio" name="my-accordion-2"/> 
          <div className="collapse-title text-2xl font-medium border-gray-400 border-b-2">
            Can i customize it for myself?
          </div>
          <div className="collapse-content pt-4"> 
            <p>
              Yes, you can fork the repository on Github and adjust it as you want to.
            </p>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default WhyChoose