import React, { useState } from "react";

const SnippetCard = ({ id, text, code, tag, date, onDelete, onEdit }) => {
    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleEditClick = () => {
        setEditModalOpen(true);
        onEdit(id, text, code, tag);
    };

    return (
        <div className="bg-gray-700 p-4 h-[300px] mt-2 rounded-md shadow-md">
            <div className="flex flex-col justify-between mb-2">
                <h3 className="text-lg text-gray-200 font-semibold">{text}</h3>

               <div className="flex flex-row items-center justify-between my-2 gap-x-4">
                  <div className="flex flex-row gap-x-4  items-center">
                    <p  className="px-2 py-1 rounded-md bg-green-200 text-green-600 shadow-md">{tag}</p>
                    <p className="text-gray-400 font-light"> {date} </p>
                  </div>
                    <div className="flex flex-row space-x-2">
                        <button onClick={handleEditClick} className="text-blue-500 hover:text-blue-600 duration-300">
                            Edit
                        </button>
                        <button onClick={() => onDelete(id)} className="text-red-500 hover:text-red-600 duration-300">
                            Delete
                        </button>
                    </div>
               </div>
            </div>
            <pre className="bg-gray-900 p-2 mb-4 rounded-md overflow-auto h-[185px]">
                <code className="text-gray-200">{code}</code>
            </pre>
            {/* Edit Modal */}
            {editModalOpen && (
                <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
                </div>
            )}
        </div>
    );
};

export default SnippetCard;
