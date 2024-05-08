import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import Chart from 'chart.js/auto';
import Profile from '../Profile';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { auth } from '../../../src/app/firebaseConfig';
import axios from 'axios';
import SearchInput from '../SearchInput';
import PasswordGraph from '../Lab/PasswordGraph';
import FolderGraph from '../Lab/FolderGraph';
import PieChart from '../Lab/PieChart';
import { LuFolderCog } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import PercentageSnippetCount from '../Lab/PercentageSnippetCount';
import SnippetGraph from '../Lab/SnippetGraph';
import { FaLock } from "react-icons/fa";
import { BsJournalCode } from "react-icons/bs";
import { LuFolderTree } from "react-icons/lu";
import { FaCode, FaFolderTree } from 'react-icons/fa6';


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

  
      const filesData = {
        labels: ['1','2','3','4','5','6','7','8','9','10'],
        datasets: [
          {
            label: 'Passwords',
            data: [1498, 1277, 1508, 1781, 2104, 2488, 2944, 3476,2348,1797]            ,
            fill: {
              target: 'origin',
              above: 'rgba(210, 77, 82, 0.2)',
            },
            borderColor: '#fa5861',
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
  
         const data = {
    labels: ['Notes', 'Files', 'Passwords', 'Coding snippets'],
    values: [12, 19, 3, 5]
  };
    
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
                <div className='bg-[#20263d] w-1/4 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
                    <div className='flex flex-col w-1/2'>
                        <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Notes</h1>
                        <div className='flex flex-row items-end'>
                            <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>0</p>
                            <p className='text-sm text-red-500 mb-1 ml-1 flex flex-row items-center'> <GoArrowUpRight className='mr-1'/> +0% </p>
                        </div>
                    </div>
                </div>

               <SnippetGraph/>

                {/*                 
                <div className='bg-[#20263d] w-1/3 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
                    <div className='flex flex-col w-1/2'>
                        <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Passwords stored</h1>
                        <div className='flex flex-row items-end'>
                            <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>{totalCountPasswords}</p>
                            <p className='text-sm text-green-500 mb-1 ml-1 flex flex-row items-center'> <GoArrowUpRight className='mr-1'/>  +100% </p>
                        </div>
                    </div>
                    <PasswordGraph/>
                </div>*/}

                <PasswordGraph/>

                <FolderGraph/>
                {/*  
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
                */}
            </div>
            {/* Middle level */}
            <div className='flex flex-row space-x-6 h-[35%]'>
                <div className='bg-[#20263d]  w-2/3 h-full rounded-lg pt-8 flex flex-col pl-4 shadow-lg border border-gray-500'>
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
                <div className='bg-[#20263d] flex flex-col items-center justify-center w-1/3 h-full rounded-lg shadow-lg border border-gray-500'>
                    <h2 className='text-xl  text-gray-100 pl-4 p-2'> App capacity</h2>
                    <div className='h-3/4 w-3/4'>
                      <PieChart data={data} />
                    </div>
                </div>

            </div>

            {/* Bottom level */}
            <div className='h-[45%] w-full flex flex-row space-x-6'>
                <div className='bg-[#20263d]  space-y-6  w-2/3 h-full p-4 rounded-lg flex flex-col pl-4 shadow-lg border border-gray-500'>
                   <div className='h-[20%]'>
                    <h2 className='text-3xl font-bold pt-2 text-gray-200'> Folders </h2>
                    <p className='pt-2'> Biggest folders that you currently have:</p>
                   </div>
                   <div className='flex h-[80%] w-auto pt-4 pb-4 items-start justify-between flex-row space-x-4 mr-4'>
                      <div className='w-1/4 h-full flex flex-col items-center justify-center  rounded-md bg-gray-600'>
                              <div className='h-[80%] relative text-gray-600 cursor-pointer bg-sky-200  rounded-t-md w-full flex items-center justify-center'>
                                  <BsThreeDotsVertical className='absolute top-4  w-4 h-4 right-4 cursor-pointer'/>
                                   <div className='w-16 flex items-center justify-center h-16 rounded-full bg-sky-600  text-gray-200'>
                                      <LuFolderCog className='w-8 h-8'/>
                                   </div>
                              </div>
                              <div className='h-[20%] w-full rounded-b-md bg-gray-500 text-gray-100 flex flex-row justify-between items-center px-4'>
                                  <p className='font-semibold'>Apple </p>
                                  <p className='text-gray-300 font-light'> 12 </p>
                              </div>
                      </div>
                      <div className='w-1/4 h-full flex flex-col items-center justify-center rounded-md bg-gray-600'>
                            <div className='h-[80%] relative text-gray-600 bg-emerald-200 cursor-pointer rounded-t-md w-full flex items-center justify-center'>
                              <BsThreeDotsVertical className='absolute top-4  w-4 h-4 right-4 cursor-pointer'/>
                              <div className='w-16 flex items-center justify-center h-16 rounded-full bg-emerald-600 text-gray-200'>
                                  <FaCode className='w-8 h-8'/>
                              </div>
                              </div>
                              <div className='h-[20%] w-full rounded-b-md bg-gray-500 text-gray-100 flex flex-row justify-between items-center px-4'>
                                  <p className='font-semibold'>Dev </p>
                                  <p className='text-gray-300 font-light'> 111 </p>
                              </div>
                      </div>
                      <div className='w-1/4 h-full flex flex-col items-center justify-center rounded-md bg-gray-600'>
                              <div className='h-[80%] relative bg-amber-200 text-gray-600  cursor-pointer rounded-t-md w-full flex items-center justify-center'>
                                    <BsThreeDotsVertical className='absolute top-4  w-4 h-4 right-4 cursor-pointer'/>
                                   <div className='w-16 flex items-center justify-center h-16 rounded-full bg-amber-600 text-gray-200'>
                                      <BsJournalCode className='w-8 h-8'/>
                                   </div>
                              </div>
                              <div className='h-[20%] w-full rounded-b-md bg-gray-500 text-gray-100 flex flex-row justify-between items-center px-4'>
                                  <p className='font-semibold'>Passwords </p>
                                  <p className='text-gray-300 font-light'> 1253 </p>
                              </div>
                      </div>
                      <div className='w-1/4 h-full flex flex-col items-center justify-center rounded-md bg-gray-600'>
                              <div className='h-[80%] relative bg-fuchsia-200 text-gray-600 cursor-pointer rounded-t-md w-full flex items-center justify-center'>
                                  <BsThreeDotsVertical className='absolute top-4  w-4 h-4 right-4 cursor-pointer'/>
                                   <div className='w-16 flex items-center justify-center h-16 rounded-full bg-fuchsia-600 text-gray-200'>
                                      <FaFolderTree className='w-8 h-8'/>
                                   </div>
                              </div>
                              <div className='h-[20%] w-full rounded-b-md bg-gray-500 text-gray-100 flex flex-row justify-between items-center px-4'>
                                  <p className='font-semibold'>Notes </p>
                                  <p className='text-gray-300 font-light'> 7 </p>
                              </div>
                      </div>
                   </div>
                </div>

              <div className='w-1/3  bg-[#20263d] h-full  justify-center items-center flex flex-col rounded-lg shadow-lg border border-gray-500 overflow-y-auto'>
                      <h2 className='text-3xl font-semibold text-gray-200 p-4'> User Activity</h2>
              </div>
    
            </div>
        </div>
    </div>
  )
}

export default Overview
