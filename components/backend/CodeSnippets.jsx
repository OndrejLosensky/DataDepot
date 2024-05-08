import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import Profile from "./Profile";
import SnippetCard from "./SnippetCard";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const CodeSnippets = ({ isUserActive }) => {
    const [snippets, setSnippets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [snippetsPerPage] = useState(9);
    const [modalOpen, setModalOpen] = useState(false);
    const [snippetText, setSnippetText] = useState("");
    const [code, setCode] = useState("");
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({ type, message });
        setTimeout(() => {
          setAlert(null);
        }, 3000); // Hide the alert after 3 seconds
      };

    useEffect(() => {
        fetchSnippets();
    }, []);

    const fetchSnippets = async () => {
        try {
            const response = await axios.get("/api/getSnippets");
            setSnippets(response.data);
        } catch (error) {
            console.error('Error fetching snippets:', error);
        }
    };

    const addSnippet = async () => {
        try {
            const response = await axios.post("/api/addSnippet", {
                text: snippetText,
                code: code,
            });

            if  (code || snippetText == 0) {
                showAlert("error", "You need to insert the code");
            }

            if (response.status === 200) {
                fetchSnippets();
                setModalOpen(false);
                setSnippetText("");
                setCode("");
                showAlert("success", "Snippet added successfully!");
            }
        } catch (error) {
            console.error('Error adding snippet:', error);
        }
    };

    const deleteSnippet = async (id) => {
        try {
            const response = await axios.delete("/api/deleteSnippet", {
                data: { id }
            });
            if (response.status === 200) {
                fetchSnippets();
            }
        } catch (error) {
            console.error('Error deleting snippet:', error);
        }
    };

    const indexOfLastSnippet = currentPage * snippetsPerPage;
    const indexOfFirstSnippet = indexOfLastSnippet - snippetsPerPage;
    const currentSnippets = snippets.slice(
        indexOfFirstSnippet,
        indexOfLastSnippet
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-full h-full flex flex-col space-y-8">
            {alert && (
                <div className={`absolute bottom-6  flex flex-row items-center right-4 bg-${alert.type === 'success' ? 'green' : 'red'}-500 text-white text-center py-4 px-10`}>
                {alert.type === 'success' ? <FaRegCircleCheck className='mr-2'/> : <IoCloseOutline className='mr-2'/>}
                {alert.message}
                </div>
            )}

            <div className="flex flex-row items-center justify-between h-[10%]">
                <div className="flex flex-row space-x-4">
                    <button
                        className="px-4 py-2 rounded-md bg-purple-500 text-gray-100"
                        onClick={() => setModalOpen(true)}
                    >
                        + Add
                    </button>
                    <SearchInput placeholder="Search for a snippet" />
                </div>
                <div className="flex flex-row relative">
                    <Profile isUserActive={isUserActive} />
                </div>
            </div>
            <div className="h-[80%] overflow-y-auto">
                <h2 className="text-xl font-sora font-semibold text-left text-gray-200 ">
                    {" "}
                    Coding Snippets{" "}
                    <span className="text-gray-300 font-thin">
                        ({snippets.length})
                    </span>
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    {currentSnippets.map((snippet) => (
                        <SnippetCard
                            key={snippet.id}
                            text={snippet.text}
                            code={snippet.code}
                            date={snippet.creation_date}
                            onDelete={() => deleteSnippet(snippet.id)}
                        />
                    ))}
                </div>
            </div>

            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50">
                    <div className="bg-gray-700 p-4  w-1/4 rounded-md shadow-md">
                        <h3 className="text-2xl text-gray-200 font-bold mb-4">Add Snippet</h3>
                        <div className="mb-4">
                            <label
                                htmlFor="snippetText"
                                className="block font-medium"
                            >
                                Snippet Text
                            </label>
                            <input
                                type="text"
                                id="snippetText"
                                value={snippetText}
                                onChange={(e) =>
                                    setSnippetText(e.target.value)
                                }
                                className="w-full py-2 pl-2  border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Type the name of the snippet"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="code"
                                className="block font-medium"
                            >
                                Code
                            </label>
                            <textarea
                                id="code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                rows="8"
                                placeholder="Insert the code here"
                                className="w-full pl-2 pt-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={addSnippet}
                                className="px-4 py-2 bg-purple-500 text-white rounded-md"
                            >
                                Add
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="h-[10%] flex items-end justify-center">
                {/* Pagination */}
                <nav className="inline-flex">
                    {Array.from(
                        { length: Math.ceil(snippets.length / snippetsPerPage) },
                        (_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={`px-3 py-1 mx-1 rounded-md bg-purple-500 text-gray-100 ${
                                    currentPage === i + 1
                                        ? "bg-purple-600"
                                        : ""
                                }`}
                            >
                                {i + 1}
                            </button>
                        )
                    )}
                </nav>
            </div>
        </div>
    );
};

export default CodeSnippets;
