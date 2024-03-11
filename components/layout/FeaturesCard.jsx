import React from 'react';

const FeaturesCard = ({ heading, description, smallDescription, gradientFrom, gradientTo }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
  };

  return (
    <div className="w-[400px] flex flex-col h-auto bg-white rounded-xl shadow-md p-6 m-4" style={cardStyle}>
      <h2 className="text-3xl font-bold mb-2">{heading}</h2>
      <h4 className="text-lg font-semibold text-gray-700 mb-2">{description}</h4>
      <p className="text-base text-gray-600">{smallDescription}</p>
    </div>
  );
};

const cardData = [
  {
    heading: 'First Card',
    description: 'Description for the first card',
    smallDescription: 'Small description for the first card',
    gradientFrom: '#FFD700', // Gold
    gradientTo: '#FF6347',   // Tomato
  },
  {
    heading: 'Second Card',
    description: 'Description for the second card',
    smallDescription: 'Small description for the second card',
    gradientFrom: '#7FFFD4', // Aquamarine
    gradientTo: '#20B2AA',   // LightSeaGreen
  },
  {
    heading: 'Third Card',
    description: 'Description for the third card',
    smallDescription: 'Small description for the third card',
    gradientFrom: '#00FFFF', // Cyan
    gradientTo: '#4682B4',   // SteelBlue
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
