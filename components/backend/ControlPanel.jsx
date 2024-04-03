import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { IoArrowUp, IoArrowDown } from "react-icons/io5";
import axios from 'axios';
import {FaExclamationCircle, FaCheckCircle} from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";


const ControlPanel = ({ fileTypeFilter, setFileTypeFilter, setSortOption }) => {
    const dropdownRef = useRef(null);
    const [maxDropdownWidth, setMaxDropdownWidth] = useState('auto');
    const [sortOption, setSortOptionLocal] = useState('asc'); // Local state for sorting option
    const [selectedFileType, setSelectedFileType] = useState('');
    const [newLabelName, setNewLabelName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [errorCreatingAlertVisible, setErrorCreatingAlertVisible] = useState(false);
    const [successCreatingAlertVisible, setSuccessCreatingAlertVisible] = useState(false);
    const [labels, setLabels] = useState([]);

    const isDarkMode = useState(true);

    useEffect(() => {
      const fetchLabels = async () => {
        try {
          const response = await axios.get('/api/getLabels');
          setLabels(response.data);
        } catch (error) {
          console.error('Error fetching labels:', error);
        }
      };
      const intervalId = setInterval(() => {
        fetchLabels();
      }, 10000); // Auto-fetch every 10 seconds
      return () => clearInterval(intervalId); 
    }, []); // Empty dependency array to fetch labels only once on component mount

    const handleFileTypeFilter = (fileType) => {
        setFileTypeFilter(fileType);
        setSelectedFileType(fileType);
    };

    const clearFilter = () => {
        setFileTypeFilter('');
        setSelectedFileType('');
    };

    const handleDropdownOpen = () => {
        if (dropdownRef.current) {
            const dropdownContent = dropdownRef.current.querySelector('.dropdown-content');
            const contentWidth = dropdownContent.scrollWidth;
            const buttonWidth = dropdownRef.current.querySelector('.dropdown-button').offsetWidth;
            const maxWidth = Math.max(contentWidth, buttonWidth);
            setMaxDropdownWidth(`${maxWidth}px`);
        }
    };

    const toggleSortOption = () => {
        const newSortOption = sortOption === 'asc' ? 'desc' : 'asc';
        setSortOptionLocal(newSortOption);
        setSortOption(newSortOption); // Pass value to parent component
    };

    const handleColorSelect = (e, color) => {
        e.preventDefault();
        setSelectedColor(color);
    };
    

    const createNewLabel = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            await axios.post('/api/createLabel', { name: newLabelName, color: selectedColor });
            setSuccessCreatingAlertVisible(true);
            setTimeout(() => {
                setSuccessCreatingAlertVisible(false);
            }, 2000);
            setNewLabelName('');
            setSelectedColor('');
        } catch (error) {
            console.error('Error creating label:', error);
            setErrorCreatingAlertVisible(true);
            setTimeout(() => {
                setErrorCreatingAlertVisible(false);
            }, 2000);
        }
    };

    const [selectedLabels, setSelectedLabels] = useState([]);

    const handleLabelFilter = (label) => {
        // Toggle label selection
        const updatedLabels = selectedLabels.includes(label)
            ? selectedLabels.filter((l) => l !== label)
            : [...selectedLabels, label];
        setSelectedLabels(updatedLabels);
    };

    // Modify fetchFiles function to include label filter criteria
    const fetchFiles = async () => {
        try {
            const response = await axios.get('/api/getFiles', {
                params: {
                    labels: selectedLabels.join(','), // Pass selected labels as a comma-separated string
                },
            });
            setFiles(response.data);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    };

    

    return (
        <div className="flex justify-between items-center relative z-10 mr-2 ">
            <div className='dropdown dropdown-start'>
                <div className="text-sm breadcrumbs ml-4">
            <ul className='text-lg'>
                <li> 
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Home
                </a>
                </li> 
                <li>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4  mr-1 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Documents
                </a>
                </li> 
            </ul>
            </div>
            </div>

            <div className='w-1/3'>
                {errorCreatingAlertVisible && (
                    <div role="alert" className="flex items-center bg-red-500 text-white py-2 px-4 rounded">
                        <FaExclamationCircle className="mr-2" />
                        <span className='text-center'>Error creating label. Please try again.</span>
                    </div>
                )}
                {successCreatingAlertVisible && (
                    <div role="alert" className="flex items-center bg-green-500 text-white py-2 px-4 rounded">
                        <FaCheckCircle className="mr-2" />
                        <span className='text-center'>Label created successfully!</span>
                    </div>
                )}
            </div>

            <div className="flex">
                <div className="dropdown dropdown-end mr-2" ref={dropdownRef}>
                    <div tabIndex="0" className={`m-1 flex px-4 py-2 border-[1px] rounded-lg items-center dropdown-button ${isDarkMode ? 'border-gray-200' : 'border-gray-900'}`} onClick={handleDropdownOpen}>
                        {selectedFileType ? (
                            <>
                                <span className="mr-2">{selectedFileType}</span>
                                <button className="text-gray-500 hover:text-gray-700" onClick={clearFilter}>&times;</button>
                            </>
                        ) : (
                            <>File type <HiOutlineChevronDown className="ml-1" /></>
                        )}
                    </div>                    
                    <ul tabIndex="0" className={`${isDarkMode ? 'bg-base-200' : 'bg-gray-100'} p-2 shadow menu dropdown-content rounded-box w-max absolute z-20`} style={{ width: maxDropdownWidth }}>
                        <li><button onClick={() => handleFileTypeFilter('.docx')}>.docx</button></li>
                        <li><button onClick={() => handleFileTypeFilter('.pdf')}>.pdf</button></li>
                        <li><button onClick={() => handleFileTypeFilter('.xlsx')}>.xlsx</button></li>
                        <li><button onClick={clearFilter}>Show All</button></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end mr-2">
                    <button
                        className={`m-1 flex px-4 py-2 border-[1px] rounded-lg items-center ${isDarkMode ? 'border-gray-200' : 'border-gray-900'}`}
                        onClick={toggleSortOption}
                    >
                        By date 
                        {sortOption === 'asc' ? <IoArrowUp className="ml-1" /> : <IoArrowDown className="ml-1" />}
                    </button>
                </div>
                <div className="dropdown dropdown-end mr-2" ref={dropdownRef}>
                    <div tabIndex="0" className={`m-1 flex px-4 py-2 border-[1px] rounded-lg items-center dropdown-button ${isDarkMode ? 'border-gray-200' : 'border-gray-900'}`} onClick={handleDropdownOpen}>
                        By label <HiOutlineChevronDown className="ml-1" />
                    </div>
                    <ul tabIndex="0" className={`${isDarkMode ? 'bg-base-200' : 'bg-gray-100'} p-2 shadow menu dropdown-content rounded-box w-max absolute z-20`} style={{ width: maxDropdownWidth }}>
                        {labels.map((label) => (
                            <li key={label.id}>
                                <button onClick={() => handleLabelFilter(label.name)} className={`flex items-center ${selectedLabels.includes(label.name) ? 'text-blue-500 font-bold' : ''}`}>
                                    <span className={`h-4 w-4 rounded-full bg-${label.color} mr-2 flex-shrink-0`}></span>
                                    <span>{label.name}</span>
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => document.getElementById('popup-new-label').showModal()}
                                className="font-bold pl-2 items-center flex flex-row rounded-full duration-200"
                            >
                                + new
                            </button>
                        </li>

                    </ul>
                      {/* Modal for delete confirmation */}
                      <dialog id="popup-new-label" className="modal">
                        <div className="modal-box max-h-48 flex flex-col justify-end text-gray-100">
                                <h2 className='py-4 text-2xl'>Create New Label</h2>
                                <form className='w-full flex flex-col'>
                                    <p className='text-sm'> Name:</p>
                                    <input className='pl-2 py-2 mb-4' required type="text" placeholder='Label name' value={newLabelName} onChange={(e) => setNewLabelName(e.target.value)} />

                                    <p className='text-sm'> Color:</p>

                                    <div className='py-2 flex'>
                                        <button onClick={(e) => handleColorSelect(e, 'red-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-red-500 inline-block rounded-full"></span>
                                        </button>
                                        <button onClick={(e) => handleColorSelect(e, 'green-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-green-500 inline-block rounded-full"></span>
                                        </button>
                                        <button onClick={(e) => handleColorSelect(e, 'blue-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-blue-500 inline-block rounded-full"></span>
                                        </button>
                                        <button onClick={(e) => handleColorSelect(e, 'yellow-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-yellow-500 inline-block rounded-full"></span>
                                        </button>
                                        <button onClick={(e) => handleColorSelect(e, 'purple-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-purple-500 inline-block rounded-full"></span>
                                        </button>
                                        <button onClick={(e) => handleColorSelect(e, 'gray-300')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-gray-300 inline-block rounded-full"></span>
                                        </button>
                                        <button onClick={(e) => handleColorSelect(e, 'pink-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-pink-500 inline-block rounded-full"></span>
                                        </button>

                                        <button onClick={(e) => handleColorSelect(e, 'lime-400')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-lime-400 inline-block rounded-full"></span>
                                        </button>

                                        <button onClick={(e) => handleColorSelect(e, 'orange-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-orange-500 inline-block rounded-full"></span>
                                        </button>

                                        <button onClick={(e) => handleColorSelect(e, 'cyan-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-cyan-500 inline-block rounded-full"></span>
                                        </button>

                                        <button onClick={(e) => handleColorSelect(e, 'rose-500')} className="flex items-center px-2 py-2 text-sm rounded-full hover:bg-gray-700 duration-200">
                                            <span className="w-4 h-4 bg-rose-500 inline-block rounded-full"></span>
                                        </button>



                                    </div>
                                    <button className="btn btn-primary mt-2" onClick={createNewLabel}>Create</button>
                                </form>
                              
                            <button onClick={() => document.getElementById('popup-new-label').close()} className="btn btn-bordered mt-2">Close</button>
                        </div>
                      </dialog>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;