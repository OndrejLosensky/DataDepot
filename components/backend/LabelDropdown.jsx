import React from 'react';
import { IoFlagOutline } from "react-icons/io5";

const LabelDropdown = ({ labels, fileId, handleLabelChange }) => {
  const handleChange = (event) => {
    handleLabelChange(event, fileId); // Pass event and fileId to the parent component
  };

  return (
    <div className="">
      <select
        className="border border-gray-300 rounded px-2 py-1 w-full  mr-10 "
        onChange={handleChange} 
      >
        <option className="" value=""> <IoFlagOutline className='w-3 h-3'/> Select label</option>
        {labels.map((label) => (
          <option key={label.id} value={label.name}>
            {label.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabelDropdown;