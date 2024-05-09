import React from "react";

const SnippetCard = ({ text, code, onDelete, date }) => {
    return (
        <div className="bg-gray-700 p-4 mt-2 rounded-md shadow-md">
            <div className="flex justify-between h-1/4 items-center mb-2">
               <div className="flex flex-row items-center space-x-2">
                    <h3 className="text-xl text-gray-200 font-semibold">{text}</h3>
                    <p className="text-gray-400 font-light"> {date} </p>
               </div>
                <button onClick={onDelete} className="text-red-500 hover:text-red-600 duration-300">
                    Delete
                </button>
            </div>
            <pre className="bg-gray-900 h-3/4 p-2 rounded-md">
                <code>{code}</code>
            </pre>
          
        </div>
    );
};

export default SnippetCard;
