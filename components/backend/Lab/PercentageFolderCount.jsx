import React, { useEffect, useState } from 'react';
import { CgArrowTopRight, CgArrowBottomLeft } from "react-icons/cg";

const PercentageFolderCount = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/growth2');
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

  console.log(data); // Check if data is fetched correctly
  console.log(error); // Check if there are any errors

  return (
    <div className='mt-2'>
      {data && (
        <div className='flex flex-row items-end space-x-2'>
          <h2 className='text-4xl text-purple-500 font-bold'> {data.totalCount}</h2>
          <div className={parseFloat(calculatePercentage(data.todayCount, data.yesterdayCount)) < 0 ? "text-red-500" : "text-green-500"}>
            {parseFloat(calculatePercentage(data.todayCount, data.yesterdayCount)) < 0 ? (
              <CgArrowBottomLeft className="inline-block mr-1" />
            ) : (
              <CgArrowTopRight className="inline-block mr-1" />
            )}
            {calculatePercentage(data.todayCount, data.yesterdayCount)}%
          </div>
        </div>
      )}
      {error && (
        <div>Error: {error}</div>
      )}
    </div>
  );
};

export default PercentageFolderCount;
