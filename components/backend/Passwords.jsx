import React from 'react';

const Passwords = ({ folder, onClose }) => {
  return (
    <div className="p-4 w-full">
      <div className='flex flex-row w-[81%] px-6 absolute top-2 h-20 bg-slate-700 justify-between items-center rounded-2xl shadow-lg'>
        <h1 className='text-2xl text-gray-200 font-semibold'>Passwords for {folder.name}</h1>
        <button onClick={onClose} className="text-gray-300 hover:text-gray-200 transition duration-300 ease-in-out">Close</button>
      </div>
      {/* Display passwords for the selected folder */}
      <div className='mt-20'>
        {folder.passwords.map(password => (
          <div key={password.id} className="bg-gray-800 rounded-md p-4 mb-4">
            <p className="text-gray-300">Username: {password.username}</p>
            <p className="text-gray-300">Password: {password.password}</p>
            <p className="text-gray-300">App: {password.app}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Passwords;
