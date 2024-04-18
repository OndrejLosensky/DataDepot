import React, {useState} from 'react'
import GetStarted from './Lab/GetStarted';
import BtcPrice from './Lab/BtcPrice';
import StocksAPI from './Lab/StocksAPI';
import TradingViewWidget from './Lab/TradingViewWidget';

const Lab = () => {
    const [activeComponent, setActiveComponent] = useState('getStarted'); // Default active component

    const handleComponentClick = (component) => {
        setActiveComponent(component);
      };

    return (
        <div className='w-full h-full flex flex-row justify-center items-center space-x-4'>
            <div className='w-[13%] h-full border-r border-gray-400 flex flex-col items-center'>
                    <h2 className='p-2 text-2xl font-semibold text-center text-gray-200 my-4'> Components </h2>
                    <div className='space-y-3 flex flex-col'>
                        <button className={`px-8 py-2 justify-center rounded-md text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer duration-300 ${activeComponent === 'getStarted' ? 'underline underline-offset-8 text-purple-50' : ''}`} onClick={() => handleComponentClick('getStarted')}> Get Started </button>
                        <button className={`px-8 py-2 justify-center rounded-md text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer duration-300 ${activeComponent === 'tradingView' ? 'underline underline-offset-8 text-purple-50' : ''}`} onClick={() => handleComponentClick('tradingView')}> TradingView </button>
                        <button className={`px-8 py-2 justify-center rounded-md text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer duration-300 ${activeComponent === 'btcPrice' ? 'underline underline-offset-8 text-purple-50' : ''}`} onClick={() => handleComponentClick('btcPrice')}> BTC Price </button>
                        <button className={`px-8 py-2 justify-center rounded-md text-[#DFDFDF] flex flex-row items-center gap-2 text-md font-semibold cursor-pointer duration-300 ${activeComponent === 'stocksApi' ? 'underline underline-offset-8 text-purple-50' : ''}`} onClick={() => handleComponentClick('stocksApi')}> StocksAPI </button>
                    </div>
            </div>
            <div className='w-[90%] h-full flex justify-center items-center'>
                {activeComponent === 'getStarted' && <GetStarted />}
                {activeComponent === 'btcPrice' && <BtcPrice />}
                {activeComponent === 'stocksApi' && <StocksAPI/>}
                {activeComponent === 'tradingView' && <TradingViewWidget/>}
            </div>
        </div>
    )
}

export default Lab