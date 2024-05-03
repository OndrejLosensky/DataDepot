import React, { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';
import axios from 'axios';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";

const PasswordGraph = () => {
    const passwordsChartRef = useRef(null);
    const passwordsChartInstance = useRef(null);
    const [totalCountPasswords, setTotalCountPasswords] = useState(0);

    const fetchTotalPasswords = async () => {
        try {
            const response = await axios.get('/api/totalPasswords');
            setTotalCountPasswords(response.data.totalCount);
        } catch (error) {
            console.error(error);
        }
      };
    
        useEffect(() => {
            fetchTotalPasswords();
        }, []);
  


    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('/api/passwords');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                updateChart(data);
            } catch (error) {
                console.error(error);
            }
        };

        const updateChart = (passwordData) => {
            const labels = Object.keys(passwordData);
            const data = Object.values(passwordData);

            if (passwordsChartInstance.current) {
                passwordsChartInstance.current.data.labels = labels;
                passwordsChartInstance.current.data.datasets[0].data = data;
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

            fetchData();
        }

        return () => {
            // Cleanup on component unmount
            if (passwordsChartInstance.current) {
                passwordsChartInstance.current.destroy();
            }
        };

    }, []);

    return (
        <div className='bg-[#20263d] w-1/3 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'> 
        <div className='flex flex-col w-1/2'>
            <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Passwords stored</h1>
            <div className='flex flex-row items-end'>
                <p className='text-4xl pt-2 ml-4 font-mono font-bold text-purple-500'>{totalCountPasswords}</p>
                <p className='text-sm text-green-500 mb-1 ml-1 flex flex-row items-center'> <GoArrowUpRight className='mr-1'/>  +100% </p>
            </div>
        </div>
        <canvas className='p-6  w-1/2' ref={passwordsChartRef}></canvas>
    </div>
    );
}

export default PasswordGraph;
