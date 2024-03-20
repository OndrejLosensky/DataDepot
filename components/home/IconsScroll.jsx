import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const IconsScroll = ({ speed }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollContent = scrollContainer.querySelector('.scroll');
    const contentWidth = scrollContent.scrollWidth;

    const time = contentWidth / speed;
    scrollContent.style.setProperty('--time', `${time}s`);
  }, [speed]);

  return (
    <div className="flex justify-center items-center">
      <div className="relative mx-auto overflow-hidden" ref={scrollRef}>
        <div className="scroll" style={{ animationDuration: `${20}s` }}>
          <div className='flex flex-row gap-x-4'>
            {[...Array(20)].map((_, index) => (
              <Image
                key={index}
                src={`/icons/${index % 14 + 1}.svg`}
                alt="Description of the image"
                width={64}
                height={64}
                className='max-w-screen max-h-screen'
              />
            ))}
            {[...Array(20)].map((_, index) => (
              <Image
                key={index + 20}
                src={`/icons/${index % 14 + 1}.svg`}
                alt="Description of the image"
                width={64}
                height={64}
                className='max-w-screen max-h-screen'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsScroll;
