// components/backend/Lab/PasswordsChart.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PasswordsFolder = () => {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/folders');
                setFolders(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            {folders.map(folder => (
                <div key={folder.id} className="mb-8 bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">{folder.name}</h2>
                    <p className="mb-2">{folder.description}</p>
                    <h3 className="text-lg font-semibold mb-2">Passwords:</h3>
                    <ul>
                        {folder.passwords.map(password => (
                            <li key={password.id} className="ml-2 mb-2 p-2 bg-gray-700 rounded-md shadow-md">
                                <p>Password: {password.password}</p>
                                <p>Email: {password.email}</p>
                                <p>Username: {password.username}</p>
                                <p>App: {password.app}</p>
                                <p>Creation Date: {password.creation_date}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PasswordsFolder;
