import React, { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';
import axios from 'axios';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import PercentageCount from "./PercentageCount";

const PasswordGraph = () => {
    const passwordsChartRef = useRef(null);
    const passwordsChartInstance = useRef(null);
    const [totalCountPasswords, setTotalCountPasswords] = useState(0);
    const [passwordData, setPasswordData] = useState([]);
    const [prevCount, setPrevCount] = useState(0);
    const [percentChange, setPercentChange] = useState(0);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const fetchTotalPasswords = async () => {
        try {
            const response = await axios.get('/api/totalPasswords');
            const currentCount = response.data.totalCount;
            setTotalCountPasswords(currentCount);
            const change = currentCount - prevCount;
            const percent = prevCount !== 0 ? (change / prevCount) * 100 : 100;
            setPercentChange(percent);
            setPrevCount(currentCount);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchPasswordData = async () => {
        try {
            const response = await axios.get('/api/passwords');
            setPasswordData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTotalPasswords();
        fetchPasswordData();
    }, []);

    useEffect(() => {
        // Fetch data from the API
        const updateChart = () => {
            if (!passwordData) return;

            const labels = passwordData.map(row => row.creation_date);
            const data = passwordData.map(row => row.count);

            if (passwordsChartInstance.current) {
                passwordsChartInstance.current.data.labels = labels;
                passwordsChartInstance.current.data.datasets[0].data = data;

                // Set the minimum value of the Y-axis scale to zero
                passwordsChartInstance.current.options.scales.y.min = 0;

                passwordsChartInstance.current.update();
            }
        };

        // Create passwords chart
        if (passwordsChartRef && passwordsChartRef.current) {
            if (passwordsChartInstance.current) {
                passwordsChartInstance.current.destroy();
            }
            passwordsChartInstance.current = new Chart(passwordsChartRef.current, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Passwords',
                        data: [],
                        fill: {
                            target: 'origin',
                            above: 'rgba(30, 197, 92, 0.2)',
                        },
                        borderColor: '#22c55d',
                        tension: 0.3,
                    }]
                },
                options: {
                    scales: {
                        x: {
                            display: false // Hides x-axis labels
                        },
                        y: {
                            display: false // Hides y-axis labels
                        }
                    },
                    plugins: {
                        legend: {
                            display: false // Hides the legend
                        }
                    }
                }
            });

            updateChart();
        }

        return () => {
            // Cleanup on component unmount
            if (passwordsChartInstance.current) {
                passwordsChartInstance.current.destroy();
            }
        };

    }, [passwordData]);


    return (
        <div className='bg-[#20263d] w-1/4 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
            <div className='flex flex-col w-2/3'>
                <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Passwords</h1>
                <div className='pl-4 flex'>
                    <PercentageCount/>     
                </div>
            </div>
            <canvas className='p-8 w-1/3' ref={passwordsChartRef}></canvas>
            {/* 
            <div className="w-full h-full flex items-center justify-center flex-col ">
                <h1 className="text-gray-200 text-3xl text-center font-semibold pt-6">Password Data</h1>
                <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <table className="border-collapse border border-gray-600 text-gray-200 mt-4">
                        <thead>
                            <tr>
                                <th className="border border-gray-600 px-4 py-2">Date</th>
                                <th className="border border-gray-600 px-4 py-2">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwordData.map((row, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-600 px-4 py-2">{row.creation_date}</td>
                                    <td className="border border-gray-600 px-4 py-2">{row.count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            */}
        </div>
    );
}

export default PasswordGraph;
