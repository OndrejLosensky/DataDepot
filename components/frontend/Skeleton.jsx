// Skeleton.jsx
import React from 'react';

const Skeleton = () => {
  return (
    <div className="bg-gray-400 rounded-md shadow-md p-6 m-4 animate-pulse">
      <div className="h-4 bg-gray-500 w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-500 w-full mb-2"></div>
      <div className="h-4 bg-gray-500 w-full"></div>
    </div>
  );
};

export default Skeleton;
