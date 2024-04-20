// components/PasswordChart.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PasswordChart = () => {
    const [passwordData, setPasswordData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/pass-chart');
                setPasswordData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-8">Passwords Added By Day</h1>
            <div className="mb-8">
                <table className="w-full text-center">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-xl">Date</th>
                            <th className="px-4 py-2 text-xl">Number of Passwords</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passwordData.map((data, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2">{data.date}</td>
                                <td className="px-4 py-2">{data.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PasswordChart;
