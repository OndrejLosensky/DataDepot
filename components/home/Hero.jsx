const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-screen flex'>
          <div className='w-1/2 flex flex-col justify-center items-start ml-8 px-28 py-0'>
          
          <div class="flex place-items-center relative before:absolute before:h-[600px] before:w-full sm:before:w-[580px] before:-translate-x-[150px] before:-translate-y-[10px]  before:rounded-full before:bg-gradient-to-br before:from-custom-pink before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-custom-purple after:via-custom-indigo after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-custom-purple before:dark:opacity-20 after:dark:from-custom-blue after:dark:via-[#4f01a9] after:dark:opacity-100 before:lg:h-[360px] z-[-1]">
            <h2 className='text-5xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text shadow-glow'>
              Welcome to DataDepot
            </h2>
          </div>
          


            <p className='text-gray-400 text-lg pl-1 mt-2 mb-6'>
              DataDepot is the ultimate platform for effortlessly storing and organizing your files.
              Whether it's documents, presentations, or spreadsheets. DataDepot provides a secure and convenient way to manage your important files.
            </p>
            <button className="pl-1 btn btn-primary relative group">
              <span className="flex items-center">
                Get started
                <svg
                  className="ml-1 transition-transform transform-gpu -translate-y-0 group-hover:translate-x-2 duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1.3em"
                  width="2.2em"
                >
                  <path
                    fill="currentColor"
                    d="M23.068 11.993l-4.25-4.236-1.412 1.417 1.835 1.83L.932 11v2l18.305.002-1.821 1.828 1.416 1.412 4.236-4.25z"
                  />
                </svg>
              </span>
            </button>



          </div>

          <div class="flex place-items-center relative mr-32 mt-64 before:absolute before:h-[400px] before:w-full sm:before:w-[380px] before:translate-x-[450px] before:translate-y-[-350px] before:rounded-full before:bg-gradient-to-br before:from-warning before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-success after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20 after:dark:from-green-600 after:dark:via-green-400 after:dark:opacity-100 before:lg:h-[300px] z-[-1]"></div>


          <div className='w-1/2 flex flex-col justify-center items-end'>
            <div className="mockup-code shadow-xl rounded-none bg-base-300">
              <pre className='pl-6 pt-16' data-prefix="~/Desktop">
                <code className='ml-12'><span className="text-orange-400">cd</span> DataDepot</code>
              </pre>
              <pre className='pl-6 pt-2' data-prefix="~/Desktop/DataDepot">  
                <code className='ml-36'><span className="text-orange-400">npm</span> build</code>
              </pre>
              <pre className='pl-6 pt-2 text-success' data-prefix="~/Desktop/DataDepot">  
                <code className='ml-36'><span className="font-semibold" >npm</span> run</code>
              </pre>
            </div>
          </div>
        </div>
        <div className="border-gray-600 border-b w-[98%] mx-auto"></div>
    </section>
    
  );
};

export default Hero;
