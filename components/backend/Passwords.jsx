import React from 'react';
import { FaTimes, FaEdit, FaTrash, FaApple, FaCopy } from 'react-icons/fa';

const Passwords = ({ folder, onClose, onEditFolder, onDeleteFolder }) => {
  const calculatePasswordStrength = (password) => {
    // Just a dummy function to calculate password strength
    const length = password.length;
    if (length < 6) return "Weak";
    if (length < 10) return "Medium";
    return "Strong";
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Password copied to clipboard!');
  };

  const renderStrengthIndicator = (strength) => {
    let color1 = "gray-600";
    let color2 = "gray-600";
    let color3 = "gray-600";

    if (strength === "Strong") {
      color1 = color2 = color3 = "green-500";
    } else if (strength === "Medium") {
      color1 = color2 = "yellow-500";
    } else {
      color1 = "red-500";
    }

    return (
      <div className="flex mt-1">
        <div className={`w-10 h-1 mr-1 rounded-full bg-${color1}`}></div>
        <div className={`w-10 h-1 mr-1 rounded-full bg-${color2}`}></div>
        <div className={`w-10 h-1 rounded-full bg-${color3}`}></div>
      </div>
    );
  };

  return (
    <div className="p-6 w-full h-full bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-lg">
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center space-x-4'>
          <h1 className='text-3xl text-gray-100 font-bold'>Passwords for {folder.name} <span className='text-gray-300 font-thin'>({folder.passwords.length})</span></h1>
          <button className='bg-purple-500 px-4 py-2 rounded-md shadow-lg text-gray-200'> + Add Password </button>
        </div>
        <div className="flex items-center">
          <button onClick={onEditFolder} className="text-white hover:text-gray-200 mr-2">
            <FaEdit />
          </button>
          <button onClick={onDeleteFolder} className="text-white hover:text-gray-200">
            <FaTrash />
          </button>
          <button onClick={onClose} className="text-white hover:text-gray-200 ml-2">
            <FaTimes />
          </button>
        </div>
      </div>
      <p className="text-gray-300 mt-4">{folder.description}</p>
      
      {/* Header row */}
      <div className='bg-gray-700 rounded-md p-4 mb-4 mt-6'>
        <div className='flex flex-row justify-between'>
          <p className="text-gray-300 flex-1">App</p>
          <p className="text-gray-300 flex-1">Username</p>
          <p className="text-gray-300 flex-1">Password</p>
          <p className="text-gray-300 flex-1">Strength</p>
          <p className="text-gray-300">Actions</p>
        </div>
      </div>
      
      {/* Display passwords for the selected folder */}
      <div className=''>
        {folder.passwords.map(password => (
          <div key={password.id} className="bg-gray-800 rounded-md p-4 mb-4 flex justify-between items-center">
            <p className="text-gray-300 flex-1 flex flex-row items-center">
              <FaApple className='mr-2'/>
              {password.app}
            </p>
            <p className="text-gray-300 flex-1">{password.username}</p>
            <p className="text-gray-300 flex-1">
              {password.password}
              <button onClick={() => copyToClipboard(password.password)} className="ml-2 text-white hover:text-gray-200">
                <FaCopy />
              </button>
            </p>
            <div className="text-gray-300 flex-1">
              {calculatePasswordStrength(password.password)}
              {renderStrengthIndicator(calculatePasswordStrength(password.password))}
            </div>
            <div className="flex items-center">
              <button className="text-white hover:text-purple-400 duration-300 mr-2">
                <FaEdit />
              </button>
              <button className="text-white hover:text-purple-400 duration-300">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Passwords;
