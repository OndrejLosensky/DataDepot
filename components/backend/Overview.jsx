import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import Chart from 'chart.js/auto';

const Overview = () => {
    const passwordsChartRef = useRef(null);
    const foldersChartRef = useRef(null);
    const filesChartRef = useRef(null);
    const passwordsChartInstance = useRef(null);
    const foldersChartInstance = useRef(null);
    const filesChartInstance = useRef(null);
  
    {/* Top level charts */}
    useEffect(() => {
      const generateRandomData = () => {
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
      };
  
      // Data for passwords chart
      const passwordsData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
          {
            label: 'Passwords',
            data: generateRandomData(),
            fill: false,
            borderColor: '#c900ff',
            tension: 0.3,
          },
        ]
      };
  
      // Data for folders chart
      const foldersData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
          {
            label: 'Folders',
            data: generateRandomData(),
            fill: false,
            borderColor: '#c900ff',
            tension: 0.3,
          },
        ]
      };
  
      const filesData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
          {
            label: 'Passwords',
            data: generateRandomData(),
            fill: false,
            borderColor: '#c900ff',
            tension: 0.3,
          },
        ]
      };
      const options = {
        scales: {
          x: {
            display: false // Hide x-axis labels
          },
          y: {
            display: false // Hide y-axis labels
          }
        },
        plugins: {
          legend: {
            display: false // Hide the legend
          }
        }
      };
  
      // Create passwords chart
      if (passwordsChartRef && passwordsChartRef.current) {
        if (passwordsChartInstance.current) {
          passwordsChartInstance.current.destroy();
        }
        passwordsChartInstance.current = new Chart(passwordsChartRef.current, {
          type: 'line',
          data: passwordsData,
          options: options
        });
      }
  
      // Create folders chart
      if (foldersChartRef && foldersChartRef.current) {
        if (foldersChartInstance.current) {
          foldersChartInstance.current.destroy();
        }
        foldersChartInstance.current = new Chart(foldersChartRef.current, {
          type: 'line',
          data: foldersData,
          options: options
        });
      }

      // Create files chart
      if (filesChartRef && filesChartRef.current) {
        if (filesChartInstance.current) {
          filesChartInstance.current.destroy();
        }
        filesChartInstance.current = new Chart(filesChartRef.current, {
          type: 'line',
          data: filesData,
          options: options
        });
      }
  
      return () => {
        // Cleanup on component unmount
        if (passwordsChartInstance.current) {
          passwordsChartInstance.current.destroy();
        }
        if (foldersChartInstance.current) {
          foldersChartInstance.current.destroy();
        }
        if (filesChartInstance.current) {
            filesChartInstance.current.destroy();
          }
      };
  
    }, []);
    
  return (
    <div className='w-auto h-full'>
        {/* Navbar */}
        <div className='flex flex-row justify-between h-[10%] items-center'>
            <div className='pl-2'>
                <h1 className='text-2xl text-[#DFDFDF] font-bold'> Overview</h1>
                <p className='text-gray-400 font-thin'> Main dashboard </p>
            </div>
            <div className='flex flex-row items-center'>
                <div>
                <label className="input input-bordered h-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <input type="text" className="grow w-64" placeholder="Search" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </label>
                </div>
                <div className='flex flex-row '>
                <Image src="/pf.jpeg" width={48} height={48} className='rounded-full border border-gray-400 ml-4 cursor-pointer' />
                </div>
            </div>
        </div>
        {/* Charts, statistics etc */}
        <div className='w-full space-y-6 h-[90%] flex flex-col'>
            {/* Top level */}
            <div className='flex flex-row space-x-6 justify-center h-[20%]'>
                <div className='bg-gray-700 w-1/3 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
                    <div className='flex flex-col w-1/2'>
                        <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Files stored</h1>
                        <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>1797</p>
                    </div>
                    <canvas className='p-6  w-1/2' ref={filesChartRef}></canvas>
                </div>

                <div className='bg-gray-700 w-1/3 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
                    <div className='flex flex-col w-1/2'>
                        <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Passwords stored</h1>
                        <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>395</p>
                    </div>
                    <canvas className='p-6  w-1/2' ref={passwordsChartRef}></canvas>
                </div>

                <div className='bg-gray-700 w-1/3 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
                    <div className='flex flex-col w-1/2'>
                        <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Folders stored</h1>
                        <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>5</p>
                    </div>
                    <canvas className='p-6  w-1/2' ref={foldersChartRef}></canvas>
                </div>
            </div>
            {/* Middle level */}
            <div className='flex flex-row space-x-6 h-[35%]'>
                <div className='bg-gray-700 w-1/2 h-full rounded-lg flex flex-col pl-4 shadow-lg border border-gray-500'>
                    <h1 className='pt-4 text-xl text-gray-200 font-semibold'>App Health</h1>
                    <p className='font-light pb-2'> You got a lot of space still free</p>
                    <div className='flex flex-row items-center my-2'>
                        <div className="flex flex-row items-center space-x-4">
                            <progress className="progress progress-error w-64" value="25" max="100"></progress>
                            <p className="text-gray-300 text-sm">25% – Files Capacity</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center my-2'>
                        <div className="flex flex-row items-center space-x-4">
                            <progress className="progress progress-warning w-64" value="65" max="100"></progress>
                            <p className="text-gray-300 text-sm">65% – Passwords Capacity</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center my-2'>
                        <div className="flex flex-row items-center space-x-4">
                            <progress className="progress progress-success w-64" value="95" max="100"></progress>
                            <p className="text-gray-300 text-sm">95% – Folders Capacity</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-700 w-1/2 h-full rounded-lg shadow-lg border border-gray-500'>
                    <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'>App Statistics</h1>
                    <p className='pl-4 font-light pb-2'> More detailed information that is also important</p>
                    <div className="p-4">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-300">Overall Storage Usage:</p>
                                <p className="text-gray-200">65% used</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-300">Last Backup:</p>
                                <p className="text-gray-200">April 10, 2024</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-300">Account Activity:</p>
                                <p className="text-gray-200">Recent login from 3 new devices</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom level */}
            <div className='h-[45%]'>
            <div className='w-full bg-gray-700 h-full rounded-lg shadow-lg border border-gray-500'>
                <div className='flex flex-col'>
                    <div className='flex flex-row py-3 bg-gray-600 w-full justify-between px-4 items-center'> 
                        <h1 className='text-2xl font-bold text-gray-200'>Most Recent Actions</h1>
                        <button className='py-1 px-6 text-gray-100 rounded-full bg-purple-500'>Filter</button>
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <div className="flex items-center bg-[#374151] hover:bg-[#404b5e] duration-300 py-2 px-4 w-full justify-between">
                                <p className="text-gray-300">Document 1</p>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#374151] hover:bg-[#404b5e] duration-300  py-2 px-4 w-full justify-between">
                                <p className="text-gray-300">Document 2</p>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#374151] hover:bg-[#404b5e] duration-300  py-2 px-4 w-full justify-between">
                                <p className="text-gray-300">Document 3</p>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#374151] hover:bg-[#404b5e] duration-300  py-2 px-4 w-full justify-between">
                                <p className="text-gray-300">Document 4</p>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#374151] hover:bg-[#404b5e] duration-300  py-2 px-4 w-full justify-between">
                                <p className="text-gray-300">Document 5</p>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Overview
