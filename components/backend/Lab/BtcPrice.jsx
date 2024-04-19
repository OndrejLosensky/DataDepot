import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import axios from 'axios';
import Papa from 'papaparse';
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";

Chart.register(...registerables);

const BitcoinPriceChart = () => {
  const [btcData, setBtcData] = useState([]);
  const chartInstance = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (btcData.length > 0) {
      plotChart();
    }
  }, [btcData]);

  const fetchData = async () => {
    try {
      // Load CSV file
      const csvFilePath = '/btc_prices.csv';
      const response = await axios.get(csvFilePath);
      const parsedData = Papa.parse(response.data, { header: true }).data;
      setBtcData(parsedData);
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
    }
  };

  const plotChart = () => {
    const ctx = document.getElementById('btcChart').getContext('2d');
  
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
  
    const formattedData = btcData.map(item => ({
      x: new Date(parseInt(item.Timestamp)),
      y: parseFloat(item['Price (USD)']),
    }));
  
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'BTC Prices',
            data: formattedData,
            fill: {
              target: 'origin',
              above: 'rgba(75, 192, 192, 0.2)', // Color for the area above the line
            },
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Price (USD)',
            },
          },
        },
      },
    });
  };
  

  return (
    <div className="w-full m-4">
      <h2 className="text-2xl text-gray-200 font-bold mb-2">BTC Price Chart</h2>
      <p className='text-gray-300 font-light mb-8'> Beautifull Chart by using Chart.js. It displays BTC price for the last 30 days which is loaded from CSV file.</p>
      <canvas id="btcChart"></canvas>
      <div className="flex space-x-2 mt-16 justify-center items-center">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-purple-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
          >
            <MdOutlineKeyboardArrowLeft className="mr-2 h-5 w-5" />
            Prev
          </button>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-purple-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Next
            <MdOutlineKeyboardArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
    </div>
  );
};

export default BitcoinPriceChart;
