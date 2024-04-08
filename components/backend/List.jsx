import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WordIcon from './icons/Word';
import PdfIcon from './icons/Pdf';
import ExcelIcon from './icons/Excel';
import { FaTrash, FaExclamationCircle, FaCheckCircle, FaPlus } from 'react-icons/fa';
import { CiFileOff } from "react-icons/ci";
import LabelDropdown from './LabelDropdown';
import { BsThreeDotsVertical } from "react-icons/bs";

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return bytes + ' bytes';
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + ' KB';
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
}

const FileList = ({ fileTypeFilter, sortOption }) => {
  const [files, setFiles] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorDeletingAlertVisible, setErrorDeletingAlertVisible] = useState(false);
  const [successDeletingAlertVisible, setSuccessDeletingAlertVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState({});
  const isDarkMode = useState(true);
  

  const fetchFiles = async () => {
    try {
      let url = '/api/getFiles';
      const params = new URLSearchParams();
      if (fileTypeFilter) {
        params.append('fileType', fileTypeFilter);
      }
      if (sortOption) {
        params.append('sortOption', sortOption);
      }
      // Add selected labels as query parameters
      Object.keys(selectedLabel).forEach((fileId) => {
        params.append('labelId', selectedLabel[fileId].id);
      });
      url += `?${params.toString()}`;
      const response = await axios.get(url);
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const fetchLabels = async () => {
    try {
      const response = await axios.get('/api/getLabels');
      setLabels(response.data);
    } catch (error) {
      console.error('Error fetching labels:', error);
    }
  };

  useEffect(() => {
    fetchFiles(); // Fetch files initially
    fetchLabels(); // Fetch labels initially
    const intervalId = setInterval(() => {
      fetchFiles();
      fetchLabels();
    }, 10000); // Auto-fetch every 10 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [fileTypeFilter, sortOption]); // Update dependency array

  const handleDelete = async (id) => {
    console.log('Deleting file with ID:', id);
    const deleteUrl = `/api/deleteFile?id=${id}`;
    try {
      await axios.delete(deleteUrl);
      // Display success alert
      setSuccessDeletingAlertVisible(true);
      fetchFiles();
      setTimeout(() => {
        setSuccessDeletingAlertVisible(false);
      }, 2000); // Hide after 2 seconds
    } catch (error) {
      console.error('Error deleting file:', error);
      setErrorDeletingAlertVisible(true);
      setTimeout(() => {
        setErrorDeletingAlertVisible(false);
      }, 2000); // Hide after 2 seconds
    } finally {
      // Close the dialog
      document.getElementById('popup-delete').close();
    }
  };


  const handleLabelAssignment = async (fileId, labelId) => {
    try {
      await axios.post('/api/assignLabel', { fileId, labelId });
      console.log('Label assigned successfully!');
      // Refresh files after assigning the label
      fetchFiles();
    } catch (error) {
      console.error('Error assigning label:', error);
    }
  };
  
  
  const handleLabelChange = async (event, fileId) => {
    const labelName = event.target.value;
    console.log("Selected label name:", labelName); // Check the selected label name
    const selectedFile = files.find(file => file.id === fileId);
    const selectedLabel = labels.find(label => label.name === labelName);
    console.log("Selected label:", selectedLabel); // Check the selected label object
    if (selectedLabel && selectedFile) {
      await handleLabelAssignment(selectedFile.id, selectedLabel.id);
      fetchFiles();
      setSelectedLabel(prevState => ({ ...prevState, [fileId]: selectedLabel })); // Update the selected label state
    }
  };

  useEffect(() => {
    // Load selected labels from local storage when component mounts
    const storedLabels = localStorage.getItem('selectedLabels');
    if (storedLabels) {
      setSelectedLabel(JSON.parse(storedLabels));
    }
  }, []);
  
  useEffect(() => {
    // Save selected labels to local storage when they change
    localStorage.setItem('selectedLabels', JSON.stringify(selectedLabel));
  }, [selectedLabel]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4">
      {/* Alerts for file deletion */}
      {errorDeletingAlertVisible && (
        <div role="alert" className="absolute top-0 left-0 w-full flex items-center bg-red-500 text-white py-2 px-4 rounded">
          <FaExclamationCircle className="mr-2" />
          <span className='text-center'>Error deleting file. Please try again.</span>
        </div>
      )}
      {successDeletingAlertVisible && (
        <div role="alert" className="absolute top-0 left-0 w-full flex items-center bg-green-500 text-white py-2 px-4 rounded">
          <FaCheckCircle className="mr-2" />
          <span className='text-center'>File deleted successfully!</span>
        </div>
      )}
      {/* Loading skeleton */}
      {loading ? (
        <>
          <div className="flex flex-col gap-4 w-full md:w-80">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-80">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-80">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </>
      ) : files.length === 0 ? (
        <div className="col-span-2 md:col-start-2 md:col-span-1 flex flex-col items-center justify-center pt-48">
          <CiFileOff className={`${isDarkMode ? 'text-gray-400':'text-gray-700'} text-6xl mb-4`} />
          <p className="text-gray-500 text-lg text-center">Oooops, no files were found. <br /> Upload some to get started.</p>
        </div>
      ) : (
        files.map((file, index) => (
          <div key={index} className={`rounded-lg shadow-md p-4 ${isDarkMode ? 'bg-[#262626] border-gray-500 border-[0.3px]' : 'bg-card-bg-light border-gray-800 border-[0.3px]'}`}>

            <div className='w-full flex justify-between items-center'>
                {/* File icons */}
                {file.name.endsWith('.docx') ? (
                  <WordIcon />
                ) : file.name.endsWith('.pdf') ? (
                  <PdfIcon />
                ) : file.name.endsWith('.xlsx') ? (
                  <ExcelIcon />
                ) : (null)}
                <div className="dropdown">
                  <div tabIndex={0} role="button">
                    <BsThreeDotsVertical className='w-5 h-5 hover:bg-gray-900 bg-transparent py-[3px] px-[3px] rounded-full duration-300'/>
                  </div>        
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <div className="flex items-center pt-2 pb-4 ml-2">
                        <button
                          onClick={() => document.getElementById('popup-delete').showModal()}
                          className="hover:text-red-700 text-red-400 font-bold items-center flex flex-row rounded-full duration-200 "
                        >
                          <FaTrash className='w-4 h-auto'/> <p className='ml-2'>Delete</p>
                        </button>
                        {/* Modal for delete confirmation */}
                        <dialog id="popup-delete" className="modal">
                          <div className="modal-box max-h-48 flex flex-col justify-end text-gray-100">
                            <h3 className="font-bold text-center text-xl">Are you sure you want to delete this file?</h3>
                            <p className="pb-12 pt-2 font-italic text-sm text-center">By deleting this, the file will be lost. This cant be undone!</p>
                            <button
                              onClick={() => handleDelete(file.id)}
                              className="bg-red-500 hover:bg-red-700  text-gray-50 font-bold py-2 px-4  rounded-md duration-200 "
                            > Delete </button>
                          </div>
                          <form method="dialog" className="modal-backdrop bg-black opacity-40">
                            <button>close</button>
                          </form>
                        </dialog>
                      </div>
                      {/* Label dropdown */}
                      <div className='ml-2 mr-2 pb-2'>
                        <LabelDropdown labels={labels} handleLabelChange={(event) => handleLabelChange(event, file.id)} />                        
                      </div>
                  </ul>
                </div>


            </div>
            <div className="flex items-center justify-between">
              <div>
                {/* File details */}
                <h3 className="font-semibold">{file.name}</h3>
                <p>Size: {formatFileSize(file.size)}</p>
                <p className='mb-2'>Date: {file.date}</p>
                {/* Display selected label */}
                {selectedLabel[file.id] && (
                  <label className={`px-2 py-1 text-gray-100 rounded-md bg-${selectedLabel[file.id].color}`}>
                    {selectedLabel[file.id].name}
                  </label>
                )}
                {!selectedLabel[file.id] && (
                  <label className='mt-12 px-2 py-1 rounded-md text-sm'></label> // Stays blank – looks better than small text saying no label 
                )}
              </div>
              {/* Dropdown icon */}              
             
              </div>
            {/* Preview and download buttons */}
            <div className="mt-12 flex justify-end">
              <button className={`text-sm border duration-300 rounded ${isDarkMode ? 'border-light-text hover:bg-light-text hover:text-dark-primary' : 'border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-200'} px-4 py-2`}>
                Preview
              </button>
              <button className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded ml-2">
                Download
              </button>
            </div>

            
          </div>

          
        ))
      )}
    </div>
  );
  
  
};

export default FileList;