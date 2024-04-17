// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

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
          "width": 750,
          "height": 500,
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
    <div className="tradingview-widget-containers" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);