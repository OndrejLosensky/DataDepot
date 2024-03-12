import React from 'react';

const SectionTitle = ({ name }) => {
  return (
    <div className="flex items-center justify-center pb-12">
      <div className="border-[0.5px] border-gray-500 w-[500px]"></div>
      <div className="w-auto mx-12">
        <p className="text-md font-bold text-center text-gray-300  hover:text-gray-50 duration-300 border border-blue-500 rounded-full py-1 px-4">
          {name}
        </p>
      </div>
      <div className="border-[0.5px] border-b-gray-500 w-[500px]"></div>
    </div>
  );
};

export default SectionTitle;
