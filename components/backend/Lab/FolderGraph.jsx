import React, { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';
import axios from 'axios';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import PercentageFolderCount from "./PercentageFolderCount";

const FolderGraph = () => {
    const passwordsChartRef = useRef(null);
    const passwordsChartInstance = useRef(null);
    const [totalCountFolders, setTotalCountFolders] = useState(0);
    const [folderData, setFolderData] = useState([]);
    const [prevCount, setPrevCount] = useState(0);
    const [percentChange, setPercentChange] = useState(0);

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
                console.log(response.data); // Log folder data to console
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
                            above: 'rgba(30, 197, 92, 0.2)',
                        },
                        borderColor: '#22c55d',
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

    }, [folderData]);

    return (
        <div className='bg-[#20263d] w-1/4 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'>
            <div className='flex flex-col w-2/3'>
                <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Folders</h1>
                <div className='flex pl-4'>
                   <PercentageFolderCount/>
                </div>
            </div>
            <canvas className='p-8 w-1/3' ref={passwordsChartRef}></canvas>
            {/* 
            <div className="w-full h-full flex items-center justify-center flex-col ">
                <h1 className="text-gray-200 text-3xl text-center font-semibold pt-6">Folder Data</h1>
                <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <table className="border-collapse border border-gray-600 text-gray-200 mt-4">
                        <thead>
                            <tr>
                                <th className="border border-gray-600 px-4 py-2">Date</th>
                                <th className="border border-gray-600 px-4 py-2">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {folderData.map((row, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-600 px-4 py-2">{row.date_created}</td>
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

export default FolderGraph;
