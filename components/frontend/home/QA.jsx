import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi'; // Assuming you have imported icons for plus and minus

const QA = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="border-b border-gray-500 cursor-pointer py-4" onClick={toggleAnswer}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-100">{question}</h2>
        <button
          className="text-gray-200 focus:outline-none"
          onClick={toggleAnswer}
        >
          {showAnswer ? <FiMinus  className='h-6 w-6'/> : <FiPlus className='h-6 w-6' />}
        </button>
      </div>
      <p
        className={`text-gray-300 mt-2 transition-opacity ${
          showAnswer ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maxHeight: showAnswer ? '100px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease',
        }}
      >
        {answer}
      </p>
    </div>
  );
};

export default QA;
