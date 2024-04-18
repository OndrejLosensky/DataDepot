// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "Apple",
              "NASDAQ:AAPL|1D|CZK"
            ],
            [
              "Nvidia",
              "NASDAQ:NVDA|1D|CZK"
            ],
            [
              "Microsoft",
              "NASDAQ:MSFT|1D|CZK"
            ],
            [
              "BTC",
              "CRYPTO:BTCUSD|1D|CZK"
            ],
            [
              "ETH",
              "BITSTAMP:ETHUSD|1D|CZK"
            ],
            [
              "Tesla",
              "NASDAQ:TSLA|1D|CZK"
            ],
            [
              "Google",
              "NASDAQ:GOOGL|1D|CZK"
            ]
          ],
          "chartOnly": false,
          "width": 1200,
          "height": 700,
          "locale": "en",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className='w-full h-full'>
      <div className="tradingview-widget-containers" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
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
}

export default memo(TradingViewWidget);