import React, { useState, useRef, useEffect } from 'react';

const SearchInput = ({ placeholder }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [searchItems, setSearchItems] = useState([]);
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

    // Function to simulate searching (replace it with actual search functionality)
    const search = (query) => {
        // Simulated search results
        const results = [
            { id: 1, name: 'Result 1' },
            { id: 2, name: 'Result 2' },
            { id: 3, name: 'Result 3' },
        ];
        setSearchItems(results);
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
                    onChange={(e) => search(e.target.value)}
                />
                <kbd className="kbd kbd-sm ">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
            </label>
        </div>
    );
};

export default SearchInput;
