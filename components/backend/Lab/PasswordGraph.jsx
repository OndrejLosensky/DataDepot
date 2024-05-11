import React, { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';
import axios from 'axios';
import { HiMiniArrowTrendingUp, HiMiniArrowTrendingDown } from "react-icons/hi2";
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
    const [fillColor, setFillColor] = useState('rgba(30, 197, 92, 0.2)');

    const updatePercentage = (percentage) => {
        setPercentChange(percentage);
        setFillColor(parseFloat(percentage) < 0 ? 'rgba(255, 99, 132, 0.2)' : 'rgba(30, 197, 92, 0.2)');
    };

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

                // Change chart color based on percentage change
                if (percentChange < 0) {
                    passwordsChartInstance.current.data.datasets[0].borderColor = 'rgba(255, 99, 132, 1)';
                } else {
                    passwordsChartInstance.current.data.datasets[0].borderColor = '#22c55d';
                }

                // Update fill color
                passwordsChartInstance.current.data.datasets[0].fill = {
                    target: 'origin',
                    above: fillColor,
                };

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
                            above: fillColor,
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

    }, [passwordData, percentChange, fillColor]);

    return (
        <div className='bg-[#20263d] h-full rounded-lg flex flex-row shadow-lg border border-gray-500'>
            <div className='flex flex-col w-2/3'>
                <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Passwords</h1>
                <div className='flex pl-4'>
                    <PercentageCount onUpdatePercentage={updatePercentage} />
                </div>
            </div>
            <canvas className='p-8 w-1/3' ref={passwordsChartRef}></canvas>
        </div>
    );
}

export default PasswordGraph;
