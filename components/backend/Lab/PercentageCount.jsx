import React, { useEffect, useState } from 'react';
import { HiMiniArrowTrendingUp, HiMiniArrowTrendingDown} from "react-icons/hi2";

const PercentageCount = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/growth');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const calculatePercentage = (today, yesterday) => {
    if (yesterday === 0) return '100.00%';
    const growthPercentage = ((today - yesterday) / yesterday * 100).toFixed(2);
    return growthPercentage;
  };

  return (
    <div className='mt-4'>
      {data && (
        <div className='flex flex-col'>
            {/* 
          <div>
            <p>Total passwords: {data.totalCount}</p>
            <p>Passwords added yesterday: {data.yesterdayCount}</p>
            <p>Passwords added today: {data.todayCount}</p>
          </div>
          */}
          <h2 className='text-4xl text-purple-500 font-bold'> {data.totalCount}</h2>
          <div className={parseFloat(calculatePercentage(data.todayCount, data.yesterdayCount)) < 0 ? "text-red-500 text-sm" : "text-green-500 text-sm"}>
            {parseFloat(calculatePercentage(data.todayCount, data.yesterdayCount)) < 0 ? (
              <HiMiniArrowTrendingDown className="inline-block mr-1" />
            ) : (
              <HiMiniArrowTrendingUp className="inline-block  mr-1" />
            )}
            {calculatePercentage(data.todayCount, data.yesterdayCount)}% (+{data.todayCount})
          </div>
        </div>
      )}
    </div>
  );
};

export default PercentageCount;
