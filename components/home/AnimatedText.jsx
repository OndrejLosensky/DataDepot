import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';

const AnimatedText = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();

  return (
    <div className='min-h-screen max-w-screen flex flex-col justify-center items-center gap-y-4'>
      <motion.p
        className='text-5xl'
        style={{ 
          color: scrollYProgress.to([0, 1], ['#747fff', 'transparent']),
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          transition: 'color 0.5s' // Adjust transition duration as needed
        }}
      >
        This text is animated on scroll
      </motion.p>
      <motion.p
        className='text-5xl'
        style={{ 
          color: scrollYProgress.to([0, 1], ['#747fff', 'transparent']),
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          transition: 'color 0.5s' // Adjust transition duration as needed
        }}
      >
        This is another line
      </motion.p>
    </div>
  );
};

export default AnimatedText;
