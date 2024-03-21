import React from 'react';

const FeaturesCard = ({ heading, description, smallDescription, gradientFrom, gradientTo }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
  };

  return (
    <div className="relative w-[400px] flex flex-col h-auto bg-white text-gray-800 rounded-xl shadow-md p-6 m-4" style={cardStyle}>
      {/* Indicator Badge */}
      <div className='absolute top-2 right-2 px-2 py-1 rounded-full bg-primary text-white text-xs font-semibold tracking-wide'>
        New
      </div>
      
      {/* Card Content */}
      <h2 className="text-3xl font-bold mb-2">{heading}</h2>
      <h4 className="text-lg font-semibold mb-2">{description}</h4>
      <p className="text-base">{smallDescription}</p>
    </div>
  );
  
};

const cardData = [
  {
    heading: 'First Card',
    description: 'Description for the first card',
    smallDescription: 'Small description for the first card',
    gradientFrom: '#FFD700',
    gradientTo: '#FF6347',  
  },
  {
    heading: 'Second Card',
    description: 'Description for the second card',
    smallDescription: 'Small description for the second card',
    gradientFrom: '#7FFFD4',
    gradientTo: '#20B2AA',
  },
  {
    heading: 'Third Card',
    description: 'Description for the third card',
    smallDescription: 'Small description for the third card',
    gradientFrom: '#00FFFF',
    gradientTo: '#4682B4', 
  },
];

const FeaturesCardsContainer = () => {
  return (
        <div className="flex flex-row gap-x-8 py-24 justify-center">
        {cardData.map((card, index) => (
            <FeaturesCard
            key={index}
            heading={card.heading}
            description={card.description}
            smallDescription={card.smallDescription}
            gradientFrom={card.gradientFrom}
            gradientTo={card.gradientTo}
            />
        ))}
        </div>
  );
};

export default FeaturesCardsContainer;
