import React from 'react'
import SectionTitle from '../layout/SectionTitle'
import FeaturesCardsContainer from '../layout/FeaturesCard'

const WhatIs = () => {
  return (
    <section>
        <div className='max-w-screen max-h-screen py-24'>
            <SectionTitle name="DataDepot"/>
            <div className="w-2/4 mx-auto text-center font-bold">
              <p className="text-5xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                DataDepot features
              </p>
            </div>
            <div>
              <p className='text-center pt-8'> 
                Welcome to DataDepot, your personal project hub for securely storing and managing all your files. <br />
                Designed with simplicity and efficiency in mind, DataDepot is the ideal solution for organizing your documents, <br />
                script files, and more, all within one convenient platform.
              </p>
              <div class="flex place-items-center relative pl-32 mt-8 ml-64 before:absolute before:h-[600px] before:w-full sm:before:w-[580px] before:translate-x-1/3 before:rounded-full before:bg-gradient-to-br before:from-custom-pink before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-custom-purple after:via-custom-indigo after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-custom-purple before:dark:opacity-20 after:dark:from-custom-blue after:dark:via-[#4f01a9] after:dark:opacity-100 before:lg:h-[360px] z-[-1]"></div>
            </div>
            <div>
              <FeaturesCardsContainer/>
            </div>

        </div>
        <div className='border-b border-gray-600 w-[98%] mx-auto'></div>
    </section>
  )
}

export default WhatIs