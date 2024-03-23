import React, { useEffect, useRef } from 'react';

const InfiniteScroll = ({ items, speed }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollContent = scrollContainer.querySelector('.scroll');
    const contentWidth = scrollContent.scrollWidth;

    const time = contentWidth / speed;
    scrollContent.style.setProperty('--time', `${time}s`);
  }, [items, speed]);

  return (
    <div className="flex justify-center items-center">
      <div className="relative mx-auto overflow-hidden" ref={scrollRef}>
        <div className="scroll">
          <div>
            {items.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div>
            {/* Duplicated content for seamless loop */}
            {items.map((item, index) => (
              <span key={index + items.length}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
