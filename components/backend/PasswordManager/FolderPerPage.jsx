import React, { useState } from 'react';

const FolderPerPageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(5);

  const options = [4, 8, 12, 16];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // close the dropdown after selecting an option
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-gray-700 px-4 py-2 text-sm font-medium text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
        >
          Folders per page {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 7.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute h-full right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionChange(option)}
                className={`${
                  option === selectedOption ? 'bg-gray-700 text-gray-200' : 'text-gray-200'
                } block px-4 py-2 text-sm text-left w-full`}
                role="menuitem"
                tabIndex="-1"
                id={`option-${option}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderPerPageDropdown;
