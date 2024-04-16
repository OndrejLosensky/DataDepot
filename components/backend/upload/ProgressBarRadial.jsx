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
  const roundedProgress = Math.round(progress);

  let progressBarColor = 'text-green-500';

  if (progress >= 90) {
    progressBarColor = 'text-red-500'; 
  } else if (progress >= 70) {
    progressBarColor = 'text-orange-500';
  }

  return (
    <div className="mb-3 mx-auto p-1 bg-[#484848] hover:scale-[1.35] cursor-pointer duration-300 rounded-full">
        <div className={`radial-progress text-[10px] ${progressBarColor}`} style={{"--value":progress, "--size": "2.7rem",}} role="progressbar"> {roundedProgress}%</div>
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