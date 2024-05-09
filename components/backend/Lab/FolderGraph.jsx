import React, { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';
import axios from 'axios';
import PercentageFolderCount from "./PercentageFolderCount";

const FolderGraph = () => {
    const passwordsChartRef = useRef(null);
    const passwordsChartInstance = useRef(null);
    const [totalCountFolders, setTotalCountFolders] = useState(0);
    const [folderData, setFolderData] = useState([]);
    const [prevCount, setPrevCount] = useState(0);
    const [percentChange, setPercentChange] = useState(0);
    const [fillColor, setFillColor] = useState('rgba(30, 197, 92, 0.2)');
    const [borderColor, setBorderColor] = useState('#22c55d');

    const updatePercentage = (percentage) => {
        setPercentChange(percentage);
        setFillColor(parseFloat(percentage) < 0 ? 'rgba(255, 99, 132, 0.2)' : 'rgba(30, 197, 92, 0.2)');
        setBorderColor(parseFloat(percentage) < 0 ? '#FF6384' : '#22c55d');
    };

    useEffect(() => {
        const fetchTotalFolders = async () => {
            try {
                const response = await axios.get('/api/totalFolders');
                const currentCount = response.data.totalCount;
                const change = currentCount - prevCount;
                const percent = prevCount !== 0 ? (change / prevCount) * 100 : 100;
                setPercentChange(percent);
                setPrevCount(currentCount);
                setTotalCountFolders(currentCount);
            } catch (error) {
                console.error(error);
            }
        };
        const fetchFolderData = async () => {
            try {
                const response = await axios.get('/api/folders-v2');
                setFolderData(response.data);
            } catch (error) {
                console.error("Error fetching folder data:", error);
            }
        };

        fetchTotalFolders();
        fetchFolderData();
    }, []);

    useEffect(() => {
        if (!folderData || folderData.length === 0) return;

        const updateChart = () => {
            const labels = folderData.map(row => row.date_created);
            const data = folderData.map(row => row.count);

            if (passwordsChartInstance.current) {
                passwordsChartInstance.current.data.labels = labels;
                passwordsChartInstance.current.data.datasets[0].data = data;

                passwordsChartInstance.current.options.scales.y.min = 0;

                // Update fill color and border color based on percentage change
                passwordsChartInstance.current.data.datasets[0].fill = {
                    target: 'origin',
                    above: fillColor,
                };
                passwordsChartInstance.current.data.datasets[0].borderColor = borderColor;

                passwordsChartInstance.current.update();
            }
        };

        if (passwordsChartRef.current) {
            if (passwordsChartInstance.current) {
                passwordsChartInstance.current.destroy();
            }
            passwordsChartInstance.current = new Chart(passwordsChartRef.current, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Folders',
                        data: [],
                        fill: {
                            target: 'origin',
                            above: fillColor,
                        },
                        borderColor: borderColor,
                        tension: 0.3,
                    }]
                },
                options: {
                    scales: {
                        x: {
                            display: false
                        },
                        y: {
                            display: false
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            updateChart();
        }

    }, [folderData, fillColor, borderColor]);

    return (
        <div className='bg-[#20263d] w-1/4 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'>
            <div className='flex flex-col w-2/3'>
                <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Folders</h1>
                <div className='flex pl-4'>
                    <PercentageFolderCount onUpdatePercentage={updatePercentage} />
                </div>
            </div>
            <canvas className='p-8 w-1/3' ref={passwordsChartRef}></canvas>
        </div>
    );
}

export default FolderGraph;
