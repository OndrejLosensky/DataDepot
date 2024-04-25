import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes, FaEdit, FaTrash, FaApple, FaCopy, FaPlus } from 'react-icons/fa';
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Passwords = ({ folder, onClose, onEditFolder, showAlert }) => {
  const [deleted, setDeleted] = useState(false);
  const [showAddPasswordInput, setShowAddPasswordInput] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [app, setApp] = useState('');
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    setPasswords(folder.passwords);
  }, [folder]);

  const calculatePasswordStrength = (password) => {
    // Just a dummy function to calculate password strength
    const length = password.length;
    if (length < 3) return "Super weak";
    if (length < 6) return "Weak";
    if (length < 10) return "Medium";
    return "Strong";
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showAlert('success', 'Password copied to clipboard!');
  };

  const renderStrengthIndicator = (strength) => {
    let color1 = "gray-600";
    let color2 = "gray-600";
    let color3 = "gray-600";
    let color4 = "gray-600";

    if (strength === "Strong") {
      color1 = color2 = color3 = color4 = "green-500";
    } else if (strength === "Medium") {
      color1 = color2 = color3 = "yellow-500";
    } else if(strength === "Weak") {
      color1 = color2 = "orange-500";
    } else {
      color1 = "red-500";
    }

    return (
      <div className="flex mt-1">
        <div className={`w-10 h-1 mr-1 rounded-full bg-${color1}`}></div>
        <div className={`w-10 h-1 mr-1 rounded-full bg-${color2}`}></div>
        <div className={`w-10 h-1 mr-1 rounded-full bg-${color3}`}></div>
        <div className={`w-10 h-1 rounded-full bg-${color4}`}></div>
      </div>
    );
  };

  const deleteFolder = async (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this folder?')
    if(shouldDelete) {
      try {
        await axios.delete(`/api/deleteFolder?id=${id}`);
        setDeleted(true);
        onClose();
        showAlert('success', 'Folder deleted successfully.');
      } catch (error) {
        console.error('Failed to delete folder:', error.message);
        showAlert('error', 'Failed to delete folder.');
      }

      if (deleted) {
        return null;
      }
    };
  }

  const handleAddPasswordSubmit = async () => {
    try {
        const response = await axios.post('/api/newPassword', {
            folderId: folder.id,
            username: username,
            password: password,
            app: app,
        });

        if (response.data.success) {
            console.log("Password added successfully!");
            setUsername('');
            setPassword('');
            setApp('');
            showAlert('success', 'Password added successfully!');
            // Fetch updated passwords
            const updatedPasswordsResponse = await axios.get(`/api/getPasswordsForFolder?folderId=${folder.id}`);
            if (updatedPasswordsResponse.data.success) {
              setPasswords(updatedPasswordsResponse.data.passwords);
            }
            setShowAddPasswordInput(false); 
        } else {
            console.error('Failed to add password:', response.data.error);
            showAlert('error', 'Failed to add password.');
        }
    } catch (error) {
        console.error('Failed to add password:', error.message);
        showAlert('error', 'Failed to add password.');
    }
};


  return (
    <div className="p-6 w-full h-full bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-lg">
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center space-x-4'>
          <h1 className='text-3xl text-gray-100 font-bold'>Passwords for {folder.name} <span className='text-gray-300 font-thin'>({passwords.length})</span></h1>
          <button onClick={() => setShowAddPasswordInput(true)} className='bg-purple-500 px-4 py-2 rounded-md shadow-lg text-gray-200 flex flex-row items-center'> <FaPlus className='mr-2'/> Add Password </button>
        </div>
        <div className="flex items-center">
          <button onClick={onEditFolder} className="text-gray-400 w-6 h-6 hover:text-gray-200 duration-300 mr-2">
            <FaEdit />
          </button>
          <button onClick={() => deleteFolder(folder.id)} className="text-gray-400 w-6 h-6 hover:text-red-500 duration-300">
            <FaTrash />
          </button>
          <button onClick={onClose} className="text-gray-400 duration-300 hover:text-gray-200 w-6 h-6 ml-2">
            <FaTimes />
          </button>
        </div>
      </div>
      <p className="text-gray-300 mt-4">{folder.description}</p>
      
      {/* Add Password Form */}
      {showAddPasswordInput && (
        <div className="bg-gray-800 rounded-md p-4 mt-6">
          <h2 className="text-gray-300 mb-2">Add New Password</h2>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-300">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="password" className="text-gray-300">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="app" className="text-gray-300">App:</label>
            <input type="text" id="app" value={app} onChange={(e) => setApp(e.target.value)} className="input" />
          </div>
          <button onClick={handleAddPasswordSubmit} className="bg-green-500 px-4 py-2 mt-4 rounded-md shadow-lg text-gray-200">Submit</button>
        </div>
      )}

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
        {passwords.map(password => (
          <div key={password.id} className="bg-gray-800 rounded-md space-x-4 p-4 mb-4 flex justify-between items-center">
            <p className="text-gray-300 flex-1 flex py-2 flex-row items-center">
              <FaApple className='mr-2'/>
              {password.app}
            </p>
            <p className="text-gray-300 flex-1 py-2">{password.username}</p>
            <p className="text-gray-300 flex-1 py-2">
              <button onClick={() => copyToClipboard(password.password)} className="mr-2 text-white hover:text-gray-200">
                <FaCopy />
              </button>
              {password.password}
            </p>
            <div className="text-gray-300 flex-1 py-1">
              {calculatePasswordStrength(password.password)}
              {renderStrengthIndicator(calculatePasswordStrength(password.password))}
            </div>
            <div className="flex items-center py-2">
              <button className="text-white hover:text-purple-400 duration-300 mr-2">
                <FaEdit />
              </button>
              <button className="text-white hover:text-red-400 duration-300">
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
