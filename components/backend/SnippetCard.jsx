import React from "react";

const SnippetCard = ({ text, code, onDelete }) => {
    return (
        <div className="bg-gray-700 p-4 mt-2 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{text}</h3>
                <button onClick={onDelete} className="text-red-500 hover:text-red-600 duration-300">
                    Delete
                </button>
            </div>
            <pre className="bg-gray-900 p-2 rounded-md">
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default SnippetCard;
