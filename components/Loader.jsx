// Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="loading loading-spinner-lg mr-3"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
