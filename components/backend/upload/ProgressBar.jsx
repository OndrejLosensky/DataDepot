import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgressBar = () => {
  const [databaseSize, setDatabaseSize] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/total-size');
        setDatabaseSize(response.data.totalSize || 0);
      } catch (error) {
        console.error('Error fetching database size:', error);
      }
    };

    fetchData(); 

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);


  

  const maxDatabaseSize = 50 * 1024 * 1024;
  const progress = (databaseSize / maxDatabaseSize) * 100;

  let progressBarColor = 'bg-green-500';

  if (progress >= 90) {
    progressBarColor = 'bg-red-500'; 
  } else if (progress >= 70) {
    progressBarColor = 'bg-orange-500';
  }

  return (
    <div className="mt-2 mx-6 mb-8 py-2">
      <div className={`progress-container h-3 rounded-full shadow-lg overflow-hidden bg-gray-200`}>
        <div
          className={`progress-bar h-full transition-all duration-500 ${progressBarColor}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <h2 className="text-xs font-thin pt-1 text-center text-gray-100 "><span className={`font-semibold text-gray-50`}>{formatBytes(databaseSize)} </span>used from <span className={`font-semibold text-gray-50`}>{formatBytes(maxDatabaseSize)}</span></h2>
    </div>
  );
};

// Function to format bytes into a human-readable format (KB, MB, GB, etc.)
const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export default ProgressBar;