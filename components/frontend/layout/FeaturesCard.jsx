import React, {useState} from 'react';


const FeaturesCard = ({ heading, description, smallDescription, glow }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadowStyle = isHovered ? { boxShadow: `0 0 20px ${glow}` } : {};

  return (
    <div className="features-card w-[400px]"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={boxShadowStyle}>
        <div className='w-14 mb-2 text-center px-2 py-1 rounded-full bg-primary text-white text-xs font-semibold tracking-wide'>
          New
        </div>
        <h2 className='text-2xl text-gray-300 mb-4'>{heading}</h2>
        <p className="text-gray-400 ">{description}</p>
    </div>
  );
  
};

const cardData = [
  {
    heading: 'Drag & drop',
    description: 'Smoothly implement drag and drop feature so you can quickly re-order the files by your needs.',
    glow: '#fbbe11', 
  },  
  {
    heading: 'Labeling system',
    description: 'Create custom label for the file cards, filter them by names, change the tags, group them.',
    glow: '#119ffb',
  },
  {
    heading: 'Multiple file types',
    description: 'DataDepot supports files such as PDF, DOCX, XLSX and more',
    glow: '#f811fb',
  },
];

const FeaturesCardsContainer = () => {
  return (
        <div className="flex flex-row gap-x-10 pt-20 mx-6 justify-center">
        {cardData.map((card, index) => (
            <FeaturesCard
            key={index}
            heading={card.heading}
            description={card.description}
            glow={card.glow}
            />
        ))}
        </div>
  );
};

export default FeaturesCardsContainer;
