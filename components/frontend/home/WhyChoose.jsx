import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const WhyChoose = () => {
  return (
    <section id='questions' className='flex flex-col'>
      <div className='max-w-screen h-auto py-24 flex flex-row'>
        <div className='w-1/2 flex justify-center items-center'>
          <div className="mockup-browser border ml-36 w-auto h-auto">
            <div className="mockup-browser-toolbar">
              <div className="input">https://www.data-depot.com</div>
            </div>
            <div className='overflow-hidden'>
              <Image
                  src="/homepage.svg"
                  alt="Code editor mockup image"
                  width={800}
                  height={0}
                  className='hover:scale-[4.5] hover:-translate-y-32 hover:translate-x-20 transition duration-700'
                />
            </div>
          </div>
        </div>

        <div className="flex place-items-center relative mt-64 before:absolute before:h-[400px] before:w-full sm:before:w-[300px] before:-translate-x-[850px] before:translate-y-[-300px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>
        <div className="flex place-items-center relative mt-64 before:absolute before:h-[800px] before:w-full sm:before:w-[550px] before:translate-x-[180px] before:translate-y-[-150px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>

        <div className='w-1/2 flex flex-col justify-center'>
            <p className='pb-2 ml-36 text-lg text-[#a554f1] uppercase drop-shadow-glow2'>
              Why Choose DataDepot?
            </p>
            <h2 className='text-5xl text-gray-300 ml-36 font-bold text-left pb-4'>
              Discover DataDepot
            </h2>
            <ul className='text-left text-xl list-disc text-gray-400 ml-36 pl-4'>
              <li className='py-1'>Support for many file types (.docx;.pdf;.pptx;...)</li>
              <li className='py-1'>SQlite integration for efficient storage</li>
              <li className='py-1'>Create tags for your stored files</li>
              <li className='py-1'>Simple but modern UI</li>
            </ul>
            <div className='pt-8'>
              <Link className='text-left ml-36 btn w-[200px] hover:-translate-y-1 duration-200' href="/frontend/docs#support">
                Supported files 
                <svg
                  viewBox="0 0 64 64"
                  fill="currentColor"
                  height="1.5em"
                  width="1.9em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M31 15l17 17-17 17"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M16 15l17 17-17 17"
                  />
                </svg>
              </Link> 
              
              <p className='text-gray-400 text-sm font-thin ml-36 pl-1 pt-1'>
                Microsoft Office files supported!
              </p>
            </div>


        </div>

      </div>


      <div className='max-w-screen h-auto py-24 flex flex-row'>
        <div className='w-1/2 flex flex-col  justify-center items-end'>
          <p className='pb-2 text-lg text-[#a554f1] uppercase drop-shadow-glow2 mr-36'>
             Simple account settings
            </p>
            <h2 className='text-5xl text-gray-300  font-bold text-left pb-4 mr-36'>
              Everything simplified
            </h2>
          <p className='mr-36'>
            Change profile picture, manage your nickname, email, password and more...
          </p>
            <div className='pt-8 mr-36'>
              <Link className='text-left btn w-[200px] hover:-translate-y-1 duration-200' href="/frontend/docs#support">
                See more
                <svg
                  viewBox="0 0 64 64"
                  fill="currentColor"
                  height="1.5em"
                  width="1.9em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M31 15l17 17-17 17"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M16 15l17 17-17 17"
                  />
                </svg>
              </Link> 
              
            </div>

        </div>

        <div className="flex place-items-center relative mt-64 before:absolute before:h-[400px] before:w-full sm:before:w-[300px] before:-translate-x-[850px] before:translate-y-[-300px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>
        <div className="flex place-items-center relative mt-64 before:absolute before:h-[800px] before:w-full sm:before:w-[550px] before:translate-x-[180px] before:translate-y-[-150px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>

        <div className='w-1/2 flex flex-col justify-center'>
            <div className="mockup-browser border mr-36 w-auto h-auto">
              <div className="mockup-browser-toolbar">
                <div className="input">https://www.data-depot.com</div>
              </div>
              <div className='overflow-hidden'>
                <Image
                    src="/account_settings.svg"
                    alt="Code editor mockup image"
                    width={800}
                    height={0}
                    className='hover:scale-[1.15] hover:-translate-y-6 hover:-translate-x-14 transition duration-300'
                  />
              </div>
            </div>
        </div>

      </div>



    </section>
  )
}

export default WhyChoose