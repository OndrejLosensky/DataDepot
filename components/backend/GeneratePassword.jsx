import React, { useState } from 'react';
import { FaCopy, FaCheck } from "react-icons/fa";

const GeneratePassword = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeCapital, setIncludeCapital] = useState(true);
  const [includeSmall, setIncludeSmall] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);
  const [passwordHistory, setPasswordHistory] = useState([]);

  const generatePassword = () => {
    let characters = '';
    if (includeCapital) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeSmall) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_-+=<>?/{}[]';

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
    setPasswordHistory([...passwordHistory, newPassword]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };


  const calculateStrength = () => {
    let strength = 0;
    const lengthBonus = Math.min(password.length, 64) / 64;
  
    let characterTypes = 0;
    if (includeCapital) characterTypes++;
    if (includeSmall) characterTypes++;
    if (includeNumbers) characterTypes++;
    if (includeSymbols) characterTypes++;
  
    strength += lengthBonus * 25; // Max score for length
  
    if (characterTypes >= 3) {
      strength += 25; // Max score for complexity
    } else {
      strength += (characterTypes / 3) * 25; // Linear score for complexity
    }
  
    return Math.round(strength * 2);
  };
  
  const getStrengthColor = () => {
    const strength = calculateStrength();
    if (strength >= 85) return 'text-green-200 px-2 py-[1px] rounded-sm bg-green-600';
    if (strength >= 60) return 'text-yellow-200 px-2 py-[1px] rounded-sm bg-yellow-600';
    return 'text-red-200 px-2 py-[1px] rounded-sm bg-red-600';
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center space-y-8'>

      <div className='items-center flex flex-col'>
        <p className='text-purple-500 text-sm'> Secure password generator</p>
        <h2 className='text-3xl text-gray-200 font-semibold'> Generate secure password with AI algorithms</h2>
        <p className='w-2/3 text-center'> Create an password that suits you the best and is also really secure. All of the password are hashed and we do not directly store inside our storage </p>
      </div>

      <div className="w-[60%] z-20 bg-gray-700 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <div className="w-full flex flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Insert Password"
              className="input-field w-[85%] rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white px-4 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={`border w-[15%] flex flex-row items-center justify-center border-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300 text-white font-bold py-2 px-4 rounded-r-lg ${copied ? 'bg-green-500' : 'bg-blue-500'}`}
              onClick={copyToClipboard}
            >
              {copied ? <FaCheck className='mr-2'/> : <FaCopy className='mr-2'/>} {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="passwordLength" className="mr-2 mt-4 text-white">Password Length:</label>
          <input
            type="range"
            id="passwordLength"
            name="passwordLength"
            min="8"
            max="64"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="slider appearance-none mt-4 rounded-full w-4/5 h-2 bg-gray-300 outline-none"
          />
          <span className="text-white ml-2 mt-4">{passwordLength}</span>
        </div>
        <div className="flex items-center mb-4 mt-8 text-white">
          <input
            type="checkbox"
            id="includeCapital"
            checked={includeCapital}
            onChange={() => setIncludeCapital(!includeCapital)}
            className="mr-2"
          />
          <label htmlFor="includeCapital">Include Capital Letters</label>
        </div>
        <div className="flex items-center mb-4 text-white">
          <input
            type="checkbox"
            id="includeSmall"
            checked={includeSmall}
            onChange={() => setIncludeSmall(!includeSmall)}
            className="mr-2"
          />
          <label htmlFor="includeSmall">Include Small Letters</label>
        </div>
        <div className="flex items-center mb-4 text-white">
          <input
            type="checkbox"
            id="includeNumbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          <label htmlFor="includeNumbers">Include Numbers</label>
        </div>
        <div className="flex items-center mb-4 text-white">
          <input
            type="checkbox"
            id="includeSymbols"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
            className="mr-2"
          />
          <label htmlFor="includeSymbols">Include Special Symbols</label>
        </div>
        <p className='text-gray-200 font-light pt-4'> The heighest <span className='px-2 py-1 bg-gray-500 rounded-lg text-gray-200'>score</span> is <strong>100</strong>. It contains 64 characters, capital letters, numbers & special characters.  </p>
        <div className="text-white mb-4 mt-8">Password Strength: <span className={getStrengthColor()}>{calculateStrength()}</span></div>
        <button
          className="bg-purple-500 hover:bg-purple-600 mt-4 duration-300 text-white font-bold py-2 px-4 rounded"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>

      <div className="w-[10%]">
        <h3 className="text-xl text-white mb-2">Password History</h3>
        {/* 
        <ul className="text-white">
          {passwordHistory.map((pw, index) => (
            <li key={index}>{pw}</li>
          ))}
        </ul>
        */}
      </div>
    </div>
  );
};

export default GeneratePassword;
