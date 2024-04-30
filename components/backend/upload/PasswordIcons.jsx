import { useState } from 'react';
import { RiLockLine, RiLockUnlockLine, RiKeyLine, RiLockPasswordLine, RiKey2Line, RiLock2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { MdPassword } from "react-icons/md";
import { SiGmail, SiMicrosoftoutlook} from "react-icons/si";
import { FaApple, FaGithub,FaMicrosoft  } from "react-icons/fa";

const PasswordIcons = ({ onClose, onSelectIcon, selectedIcon }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleIconClick = (icon) => {
    if (icon === selectedIcon) {
      onSelectIcon(null);
    } else {
      onSelectIcon(icon);
    }
  };

  const filteredIcons = [
    { icon: <RiLockLine />, label: 'Lock' },
    { icon: <RiLockUnlockLine />, label: 'Unlock' },
    { icon: <RiKeyLine />, label: 'Key' },
    { icon: <RiLockPasswordLine />, label: 'Lock Password' },
    { icon: <RiKey2Line />, label: 'Key 2' },
    { icon: <RiLock2Line />, label: 'Lock 2' },
    { icon: <MdPassword/>, label: 'Password' },
    { icon: <SiGmail/>, label: 'Gmail' },
    { icon: <SiMicrosoftoutlook/>, label: 'Outlook' },
    { icon: <FaApple/>, label: 'Apple' },
    { icon: <FaGithub/>, label: 'Github' },
    { icon: <FaMicrosoft/>, label: 'Microsoft' },
  ].filter(({ label }) => label.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md text-white">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search icons"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 w-3/4 bg-gray-700 border border-gray-400 rounded-md focus:outline-none text-white"
        />
        <button onClick={onClose} className="text-gray-300 hover:text-gray-100 duration-200 hover:bg-gray-600 rounded-full p-2 focus:outline-none">
          <AiOutlineClose className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {filteredIcons.map(({ icon, label }, index) => (
          <div
            key={index}
            onClick={() => handleIconClick(icon)}
            className={`flex justify-center cursor-pointer duration-300 border border-gray-600 ${
              selectedIcon === icon ? 'border-gray-200' : 'hover:border-gray-200'
            } items-center w-12 h-12 bg-gray-600 rounded-md`}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordIcons;
