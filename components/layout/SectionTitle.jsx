import React from 'react';

const SectionTitle = ({ name }) => {
  return (
    <div className="w-32 mx-auto pb-2">
      <p className="text-md font-bold text-center text-gray-100 border border-blue-500 rounded-full py-1 px-4">
        {name}
      </p>
    </div>
  );
};

export default SectionTitle;
