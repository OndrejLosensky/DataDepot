import React, { useState, useRef, useEffect } from 'react';

const SearchInput = ({ placeholder, setSearchQuery }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setIsClicked(false);
            }
        };

        const handleKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                setIsClicked(true);
                inputRef.current.focus();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleInputClick = () => {
        setIsClicked(true);
    };

    // Function to set search query
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        setSearchQuery(e.target.value);
    };

    // Function to clear search input
    const clearSearch = () => {
        setSearchValue('');
        setSearchQuery('');
    };

    return (
        <div className="relative">
            <label className={`input relative input-bordered h-10 flex items-center gap-2 transition-width duration-300 ${isClicked ? 'w-[450px]' : 'w-[300px]'}`} ref={inputRef}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70">
                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
                <input
                    type="text"
                    className="grow"
                    placeholder={placeholder}
                    onClick={handleInputClick}
                    onChange={handleSearch}
                    value={searchValue}
                />
                <kbd className="kbd kbd-sm ">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
            </label>
            {searchValue && (
                <button onClick={clearSearch} className="absolute right-0 translate-x-10 top-0 bottom-0 flex items-center px-2 text-gray-400 hover:text-gray-200 duration-300 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M3.293 4.293a1 1 0 0 1 1.414 1.414L10 10.414l5.293-5.293a1 1 0 1 1 1.414 1.414L11.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 12 3.293 6.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default SearchInput;
