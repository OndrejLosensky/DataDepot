import React from 'react'

const WhyChoose = () => {
  return (
    <div className='max-w-screen h-[600px]'>
      <div className='w-3/4 mx-auto'>
      <h2 className='text-4xl font-semibold text-center text-gray-200 mt-16 py-4'> Frequently Asked Questions </h2>
      <div className="collapse collapse-arrow py-2 text-gray-300">
        <input type="radio" name="my-accordion-2" defaultChecked /> 
        <div className="collapse-title text-2xl font-medium ">
          What is DataDepot?
        </div>
        <div className="collapse-content pt-4 text-gray-400"> 
          <p>DataDepot is a versatile platform built using Next.js, SQLite, and TailwindCSS. It serves as a centralized hub for securely storing various file formats, including .docx, .pdf, .xlsx, .zip, .jpg, and more. With DataDepot, users can easily organize and manage their files, streamline their workflow, and access their documents from anywhere.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow py-2 text-gray-300">
        <input type="radio" name="my-accordion-2"/> 
        <div className="collapse-title text-2xl font-medium border-gray-400 border-b-2">
          Is DataDepot free?
        </div>
        <div className="collapse-content pt-4 text-gray-400"> 
          <p>Yes, DataDepot is completely free to use. Additionally, it is an open-source project, allowing users to access and contribute to its development. By leveraging the power of community-driven development, DataDepot remains accessible to all users, with the freedom to customize and enhance the platform according to individual needs and preferences.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow py-2 text-gray-300">
        <input type="radio" name="my-accordion-2"/> 
        <div className="collapse-title text-2xl font-medium border-gray-400 border-b-2">
          Can I customize it for myself?
        </div>
        <div className="collapse-content pt-4 text-gray-400"> 
          <p>Absolutely! DataDepot is designed to be highly customizable and adaptable to individual requirements. As an open-source project hosted on GitHub, users have the freedom to fork the repository, explore the codebase, and tailor the platform to their specific needs. Whether it's modifying the user interface, extending functionality, or integrating with other tools, DataDepot provides a flexible foundation for users to create their personalized file management solution.</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default WhyChoose