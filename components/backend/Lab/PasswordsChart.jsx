// components/PasswordChart.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const PasswordChart = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/pass-chart');
                const passwordsAdded = response.data;
                const chartData = {
                    labels: passwordsAdded.map(item => item.date),
                    datasets: [
                        {
                            label: 'Passwords Added',
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                            hoverBorderColor: 'rgba(75,192,192,1)',
                            data: passwordsAdded.map(item => item.count),
                        },
                    ],
                };
                setData(chartData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-8">Passwords Added Last Week</h1>
            <div className="mb-8">
                <Bar
                    data={data}
                    options={{
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default PasswordChart;
