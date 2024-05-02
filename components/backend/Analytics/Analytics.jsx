import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import Chart from 'chart.js/auto';
import Profile from '../Profile';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { auth } from '../../../src/app/firebaseConfig';
import axios from 'axios';
import SearchInput from '../SearchInput';

const Overview = ({ isUserActive}) => {
    const passwordsChartRef = useRef(null);
    const foldersChartRef = useRef(null);
    const filesChartRef = useRef(null);
    const passwordsChartInstance = useRef(null);
    const foldersChartInstance = useRef(null);
    const filesChartInstance = useRef(null);
    const [selectedOption, setSelectedOption] = useState('Last 7 days');

    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });

      return () => unsubscribe();
    }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
    {/* Top level charts */}
    useEffect(() => {
      const generateRandomData = () => {
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
      };
  
      // Data for passwords chart
      const passwordsData = {
        labels: ['1','2','3','4','5','6','7','8','9','10'],
        datasets: [
          {
            label: 'Passwords',
            data: [53,43,52,469,120,200,300,310,340,356],
            fill: {
              target: 'origin',
              above: 'rgba(30, 197, 92, 0.2)',
            },
            borderColor: '#22c55d',
            tension: 0.3,
          },
        ]
      };

      const foldersData = {
        labels: ['1','2','3','4','5','6','7','8','9','10'],
        datasets: [
          {
            label: 'Folders',
            data: [4,3,3,5,7,11,12,15,24,1],
            fill: {
              target: 'origin',
              above: 'rgba(238, 68, 67, 0.2)',
            },
            borderColor: '#ef4444',
            tension: 0.3,
          },
        ]
      };
  
      const filesData = {
        labels: ['1','2','3','4','5','6','7','8','9','10'],
        datasets: [
          {
            label: 'Passwords',
            data: [1498, 1277, 1508, 1781, 2104, 2488, 2944, 3476,2348,1797]            ,
            fill: {
              target: 'origin',
              above: 'rgba(30, 197, 92, 0.2)',
            },
            borderColor: '#22c55d',
            tension: 0.3,
          },
        ]
      };
      const options = {
        scales: {
          x: {
            display: false // Hides x-axis labels
          },
          y: {
            display: false // Hides y-axis labels
          }
        },
        plugins: {
          legend: {
            display: false // Hides the legend
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


    const [totalCountPasswords, setTotalCountPasswords] = useState(0);
    const [totalCountFolders, setTotalCountFolders] = useState(0);
        
    const fetchTotalPasswords = async () => {
      try {
          const response = await axios.get('/api/totalPasswords');
          setTotalCountPasswords(response.data.totalCount);
      } catch (error) {
          console.error(error);
      }
    };
  
      useEffect(() => {
          fetchTotalPasswords();
      }, []);

    const fetchTotalFolders = async () => {
        try {
            const response = await axios.get('/api/totalFolders');
            setTotalCountFolders(response.data.totalCount);
        } catch (error) {
            console.error(error);
        }
      };
    
        useEffect(() => {
            fetchTotalFolders();
        }, []);
  
    
  return (
    <div className='w-auto h-full overflow-hidden'>
        {/* Navbar */}
        <div className='flex flex-row justify-between overflow-hidden h-[10%] items-center'>
            {user && (
              <div className='pl-2'>
                <span className="relative text-transparent font-light bg-clip-text bg-gradient-to-r from-gray-200  to-gray-300">
                  Welcome back,<span className='font-semibold'> {user.email}</span>
                </span>
                👋
                <h1 className='text-2xl text-[#DFDFDF] font-bold'> Analytics</h1>
              </div>
            )}
            <div className='flex flex-row items-center'>
                {/* 
                <div>
                    <button
                        className={`mr-4 px-2 py-1 ${selectedOption === 'Last 7 days' ? 'bg-purple-500 border-purple-500' : 'border-gray-500'} border text-gray-200 rounded-md duration-200`}
                        onClick={() => handleOptionClick('Last 7 days')}
                    >
                        Last 7 days
                    </button>
                    <button
                        className={`mr-4 px-2 py-1 ${selectedOption === 'Last 30 days' ? 'bg-purple-500 border-purple-500' : 'border-gray-500'} border text-gray-200 rounded-md duration-200`}
                        onClick={() => handleOptionClick('Last 30 days')}
                    >
                        Last 30 days
                    </button>
                    <button
                        className={`mr-4 px-2 py-1 ${selectedOption === 'Last 90 days' ? 'bg-purple-500 border-purple-500' : 'border-gray-500'} border text-gray-200 rounded-md duration-200`}
                        onClick={() => handleOptionClick('Last 90 days')}
                    >
                        Last 90 days
                    </button>
                    <button
                        className={`mr-4 px-2 py-1 ${selectedOption === 'All time' ? 'bg-purple-500 border-purple-500' : 'border-gray-500'} border text-gray-200 rounded-md duration-200`}
                        onClick={() => handleOptionClick('All time')}
                    >
                        All time
                    </button>
                </div>
                */}
                <div>
                    <SearchInput placeholder='Search something...'/>
                </div>
                <div className='flex flex-row relative'>
                  <Profile isUserActive={isUserActive}/> 
                </div>
            </div>
        </div>
        {/* Charts, statistics etc */}
        <div className='w-full space-y-6 h-[90%] flex flex-col overflow-hidden'>
            {/* Top level */}
            <div className='flex flex-row space-x-6 justify-center h-[20%]'>
                <div className='bg-[#20263d] w-1/3 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
                    <div className='flex flex-col w-1/2'>
                        <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Files stored</h1>
                        <div className='flex flex-row items-end'>
                            <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>0</p>
                            <p className='text-sm text-green-500 mb-1 ml-1 flex flex-row items-center'> <GoArrowUpRight className='mr-1'/> +0% </p>
                        </div>
                    </div>
                    <canvas className='p-6  w-1/2' ref={filesChartRef}></canvas>
                </div>

                <div className='bg-[#20263d] w-1/3 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
                    <div className='flex flex-col w-1/2'>
                        <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Passwords stored</h1>
                        <div className='flex flex-row items-end'>
                            <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>{totalCountPasswords}</p>
                            <p className='text-sm text-green-500 mb-1 ml-1 flex flex-row items-center'> <GoArrowUpRight className='mr-1'/>  +100% </p>
                        </div>
                    </div>
                    <canvas className='p-6  w-1/2' ref={passwordsChartRef}></canvas>
                </div>

                <div className='bg-[#20263d]  w-1/3 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
                    <div className='flex flex-col w-1/2'>
                        <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Folders stored</h1>
                        <div className='flex flex-row items-end'>
                            <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>{totalCountFolders}</p>
                            <p className='text-sm text-red-500 mb-1 ml-1 flex flex-row items-center'> <GoArrowDownLeft className='mr-1'/> +100% </p>
                        </div>
                    </div>
                    <canvas className='p-6  w-1/2' ref={foldersChartRef}></canvas>
                </div>
            </div>
            {/* Middle level */}
            <div className='flex flex-row space-x-6 h-[35%]'>
                <div className='bg-[#20263d]  w-1/2 h-full rounded-lg flex flex-col pl-4 shadow-lg border border-gray-500'>
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
                <div className='bg-[#20263d]  w-1/2 h-full rounded-lg shadow-lg border border-gray-500'>
                    <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'>App Statistics</h1>
                    <p className='pl-4 font-light pb-2'> More detailed information that is also important</p>
                    <div className="p-4">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-300">Overall Storage Usage:</p>
                                <p className="text-gray-200"><strong>65% </strong>used</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-300">Last Backup:</p>
                                <p className="text-gray-200 font-semibold">April 10, 2024</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-300">Account Activity:</p>
                                <p className="text-gray-200 font-semibold">Recent login from 3 new devices</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom level */}
            <div className='h-[45%]'>
            <div className='w-full  bg-[#20263d] h-full  justify-center items-center flex flex-col rounded-lg shadow-lg border border-gray-500 overflow-y-auto'>
                {/* 
                <div className='flex flex-col'>
                    <div className='flex flex-row py-3 bg-[#191e31]  w-full justify-between px-4 items-center'> 
                        <h1 className='text-2xl font-bold text-gray-200'>Most Recent Actions</h1>
                        <button className='py-1 px-6 text-gray-100 rounded-full bg-purple-500'>Filter</button>
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <div className="flex items-center bg-[#20263d]  hover:bg-[#2c3353] duration-300 py-2 px-4 w-full justify-between">
                               <div className='flex flex-row items-center'>
                                    <Image className='w-6 h-6 mr-2' src="/icons/word.svg" height={32} width={32} ></Image>
                                    <p className="text-gray-300">demo.docx</p>
                               </div>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#20263d]  hover:bg-[#2c3353] duration-300  py-2 px-4 w-full justify-between">
                                <div className='flex flex-row items-center'>
                                    <Image className='w-6 h-6 mr-2' src="/icons/word.svg" height={32} width={32} ></Image>
                                    <p className="text-gray-300">login.docx</p>
                               </div>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#20263d]  hover:bg-[#2c3353] duration-300  py-2 px-4 w-full justify-between">
                                <div className='flex flex-row items-center'>
                                        <Image className='w-6 h-6 mr-2' src="/icons/word.svg" height={32} width={32} ></Image>
                                        <p className="text-gray-300">logs.docx</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#20263d]  hover:bg-[#2c3353] duration-300  py-2 px-4 w-full justify-between">
                                <div className='flex flex-row items-center'>
                                    <Image className='w-6 h-6 mr-2' src="/icons/word.svg" height={32} width={32} ></Image>
                                    <p className="text-gray-300">CV.docx</p>
                               </div>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#20263d]  hover:bg-[#2c3353] duration-300  py-2 px-4 w-full justify-between">
                                <div className='flex flex-row items-center'>
                                    <Image className='w-6 h-6 mr-2' src="/icons/word.svg" height={32} width={32} ></Image>
                                    <p className="text-gray-300">Github.docx</p>
                               </div>
                                <div className="flex space-x-2">
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">View</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Edit</button>
                                    <button className="text-gray-100 bg-gray-500 hover:bg-gray-400 duration-300 rounded-full px-3 py-1">Delete</button>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                */}
                    <div className='flex opacity-95 mb-2 flex-row justify-center items-center mt-4'>
                        <Image src="/logo/light.svg" width={32} height={32} alt='logo' />
                        <p className='pt-1 text-2xl text-gray-100 pl-2'> DataDepot</p>
                    </div>
                    <h1 className='text-xl text-gray-300 font-light text-center '> Coming soon... </h1>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Overview
