import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes, FaEdit, FaTrash, FaApple, FaCopy, FaPlus, FaCheck } from 'react-icons/fa';
import PasswordIcons from './upload/PasswordIcons';
import { RiLockLine } from 'react-icons/ri';
import Image from 'next/image';
import { TbLockAccessOff } from "react-icons/tb";

const Passwords = ({ folder, onClose, onEditFolder, showAlert }) => {
  const [deleted, setDeleted] = useState(false);
  const [showAddPasswordInput, setShowAddPasswordInput] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [app, setApp] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [showIcons, setShowIcons] = useState(true);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedIcons, setSelectedIcons] = useState({});

  const [editedName, setEditedName] = useState(folder.name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSaveName = async () => {
    try {
      const response = await axios.post('/api/changeFolderName', {
        folderId: folder.id,
        newName: editedName
      });

      if (response.data.success) {
        showAlert('success', 'Name of the folder changed');
        setIsNameEditing(false);
      } else {
        showAlert('error', response.data.error || 'Failed to update folder name');
      }
    } catch (error) {
      console.error('Failed to update folder name:', error.message);
      showAlert('error', 'Failed to update folder name');
    }
  };

  const handleIconSelect = (icon, passwordId) => {
    setSelectedIcons({ ...selectedIcons, [passwordId]: icon });
    setOpenDropdown(false);
  };

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

  const [copiedPasswords, setCopiedPasswords] = useState({});

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
    setCopiedPasswords((prevCopiedPasswords) => ({
      ...prevCopiedPasswords,
      [password]: true,
    }));
    setTimeout(() => {
      setCopiedPasswords((prevCopiedPasswords) => ({
        ...prevCopiedPasswords,
        [password]: false,
      }));
    }, 2000); // Reset copied state after 2 seconds
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

  const handleClose = () => {
    setShowIcons(false);
  };

  const handleAddPasswordSubmit = async () => {
    try {
      const response = await axios.post('/api/newPassword', {
        folderId: folder.id,
        username: username,
        password: password,
        app: app,
      });

      if (!password || !app) {
        showAlert('error', 'Please fill out both password and app fields.');
        return;
      }

      if (response.data.success) {
        console.log("Password added successfully!");
        setUsername('');
        setPassword('');
        setApp('');
        showAlert('success', 'Password added successfully!');
        // Fetch updated passwords
        fetchPasswords();
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

  const fetchPasswords = async () => {
    try {
      const updatedPasswordsResponse = await axios.get(`/api/getPasswordsForFolder?folderId=${folder.id}`);
      if (updatedPasswordsResponse.data.success) {
        setPasswords(updatedPasswordsResponse.data.passwords);
      }
    } catch (error) {
      console.error('Failed to fetch passwords:', error.message);
      showAlert('error', 'Failed to fetch passwords.');
    }
  };

  const handleDeleteSinglePassword = async (passwordId, folderId) => {
    try {
      const response = await axios.post('/api/deletePassword', {
        passwordId: passwordId,
        folderId: folderId
      });

      if (response.status === 200) {
        showAlert('success', 'Successfully deleted the password');
        // Fetch updated passwords
        fetchPasswords();
      } else {
        showAlert('error', 'Failed to delete the selected password');
      }
    } catch (error) {
      showAlert('error', 'Failed to delete the selected password');
    }
  };

  return (
    <div className="p-6 w-full h-full bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-lg">
       <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center space-x-4'>
          <Image alt='static icon' width={48} height={24} src="/google.png" className='mr-2'/>
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="text-3xl text-gray-100 font-bold bg-transparent border-b border-gray-100 focus:outline-none"
            />
          ) : (
            <h1 className='text-3xl text-gray-100 font-bold'>{editedName} <span className='text-gray-300 font-thin'>({passwords.length})</span></h1>
          )}
          {isEditing ? (
            <button onClick={handleSaveName} className='bg-green-500 px-4 py-2 rounded-md shadow-lg text-gray-200'>Save</button>
          ) : (
            <button onClick={handleEditName} className='text-gray-400 w-6 h-6 hover:text-gray-200 duration-300'>
              <FaEdit />
            </button>
          )}
                    <button onClick={() => setShowAddPasswordInput(!showAddPasswordInput)} className='bg-purple-500 px-4 py-2 rounded-md shadow-lg text-gray-200 flex flex-row items-center'> <FaPlus className='mr-2'/> Add Password </button>

        </div>
        <div className="flex items-center">
          <button onClick={() => deleteFolder(folder.id)} className="text-gray-400 w-6 h-6 hover:text-red-500 duration-300">
            <FaTrash />
          </button>
          <button onClick={onClose} className="text-gray-400 duration-300 hover:text-gray-200 w-6 h-6 ml-2">
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

      {/* Add Password Form */}
      {showAddPasswordInput && (
        <div className="bg-gray-800 rounded-md space-x-4 mb-3 flex flex-row w-full items-center justify-between p-4 mt-3">
          <div className="flex flex-col w-1/5  border rounded-md border-gray-400">
            <input placeholder='app' type="text" id="app" value={app} autoFocus onChange={(e) => setApp(e.target.value)} className="py-2 px-3 flex bg-transparent" />
          </div>
          <div className="flex  border w-1/5 rounded-md border-gray-400 ">
            <input placeholder='username' type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="py-2 px-3 flex flex-1 bg-transparent " />
          </div>
          <div className="flex flex-col w-1/5 border rounded-md border-gray-400">
            <input placeholder='password' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="py-2 px-3 flex flex-1 bg-transparent" />
          </div>
          <div className=''>
              {calculatePasswordStrength(password)}
              {renderStrengthIndicator(calculatePasswordStrength(password))}
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <button onClick={handleAddPasswordSubmit} className="bg-purple-500 px-4 py-2 rounded-md shadow-lg text-gray-200">Submit</button>
            <button onClick={() => setShowAddPasswordInput(!showAddPasswordInput)} className='bg-red-500 text-gray-200 px-2 py-2 rounded-md shadow-lg'> Cancel </button>
          </div>
        </div>
      )}
  {/* Display passwords for the selected folder */}
<div className="">
  {passwords.length === 0 ? ( 
    <div className="text-gray-300 py-4 items-center flex w-full h-full justify-center mt-72 text-3xl font-thin"> <TbLockAccessOff className='mr-2  w-12 h-12 text-gray-400'/> No passwords</div>
  ) : (
    passwords.map((password) => (
      <div key={password.id} className="bg-gray-800 rounded-md w-full space-x-4 p-4 mb-3 flex justify-between items-center relative">

        {openDropdown === password.id && (
          <div className='absolute top-0 left-0 z-10'>
            <PasswordIcons
              onClose={() => setOpenDropdown(null)}
              onSelectIcon={(icon) => handleIconSelect(icon, password.id)}
              selectedIcon={selectedIcons[password.id]}
            />
          </div>
        )}

        <div className="flex items-center">
          <button
            className="text-gray-300 w-6 h-6 flex items-center justify-center hover:text-gray-100 duration-300"
            onClick={() => setOpenDropdown(openDropdown === password.id ? null : password.id)}
          >
            {selectedIcons[password.id] || <RiLockLine className="mr-2 cursor-pointer flex items-center justify-center text-gray-300 hover:text-gray-100 duration-300 w-5 h-5" />}
          </button>
        </div>

        <p className="text-gray-300 flex-1 py-2">{password.username}</p>
        <p className="text-gray-300 flex-1 py-2">
          <button onClick={() => copyToClipboard(password.password)} className="mr-2 text-white hover:text-gray-200">
            {copiedPasswords[password.password] ? <FaCheck className='text-green-500 w-3 h-3'  /> : <FaCopy className='' />}
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
          <button
            className="text-white hover:text-red-400 duration-300"
            onClick={() => handleDeleteSinglePassword(password.id, folder.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    ))
  )}
</div>


    </div>
  );
};

export default Passwords;
