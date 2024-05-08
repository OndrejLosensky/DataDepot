import React, { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';
import axios from 'axios';
import PercentageSnippetCount from "./PercentageSnippetCount";

const SnippetGraph = () => {
    const snippetChartRef = useRef(null);
    const snippetChartInstance = useRef(null);
    const [totalCountSnippets, setTotalCountSnippets] = useState(0);
    const [snippetData, setSnippetData] = useState([]);
    const [prevCount, setPrevCount] = useState(0);
    const [percentChange, setPercentChange] = useState(0);

    useEffect(() => {
        const fetchTotalSnippets = async () => {
            try {
                const response = await axios.get('/api/allSnippets');
                const currentCount = response.data.totalCount;
                const change = currentCount - prevCount;
                const percent = prevCount !== 0 ? (change / prevCount) * 100 : 100;
                setPercentChange(percent);
                setPrevCount(currentCount);
                setTotalCountSnippets(currentCount);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchSnippetData = async () => {
            try {
                const response = await axios.get('/api/snippets-v2');
                console.log(response.data); // Log snippet data to console
                setSnippetData(response.data);
            } catch (error) {
                console.error("Error fetching snippet data:", error);
            }
        };

        fetchTotalSnippets();
        fetchSnippetData();
    }, []);

    useEffect(() => {
        if (!snippetData || snippetData.length === 0) return;

        const updateChart = () => {
            const labels = snippetData.map(row => row.creation_date);
            const data = snippetData.map(row => row.count);

            if (snippetChartInstance.current) {
                snippetChartInstance.current.data.labels = labels;
                snippetChartInstance.current.data.datasets[0].data = data;

                snippetChartInstance.current.options.scales.y.min = 0;

                snippetChartInstance.current.update();
            }
        };

        if (!snippetChartInstance.current) {
            snippetChartInstance.current = new Chart(snippetChartRef.current, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Snippets',
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
        }

        updateChart();

    }, [snippetData]);

    return (
        <div className='bg-[#20263d] w-1/4 h-full rounded-lg flex flex-row shadow-lg border border-gray-500'>
            <div className='flex flex-col w-2/3'>
                <h1 className='pl-4 pt-4 text-xl text-gray-200 font-semibold'> Snippets</h1>
                <div className='flex pl-4'>
                    <PercentageSnippetCount/>
                </div>
            </div>
            <canvas className='p-8 w-1/3' ref={snippetChartRef}></canvas>
        </div>
    );
}

export default SnippetGraph;
