import React from 'react';

const SectionTitle = ({ name }) => {
  return (
    <div className="flex items-center justify-center pb-12">
      <div className="border-[0.7px] border-gray-500 w-[500px]"></div>
      <div className="w-auto mx-12">
        <p className="text-md font-bold text-center text-gray-400  hover:text-gray-50 duration-300 border border-[#ba4ef0] rounded-full py-1 px-4">
          {name}
        </p>
      </div>
      <div className="border-[0.7px] border-gray-500 w-[500px]"></div>
    </div>
  );
};

export default SectionTitle;
