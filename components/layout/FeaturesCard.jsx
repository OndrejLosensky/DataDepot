import React from 'react';

const FeaturesCard = ({ heading, description, smallDescription, gradientFrom, gradientTo }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
  };

  return (
    <div className="relative w-[400px] flex flex-col h-auto bg-white text-gray-900 rounded-xl shadow-md p-3 m-4" style={cardStyle}>
      {/* Indicator Badge */}
      <div className='w-14 text-center ml-1 px-2 py-1 rounded-full bg-primary text-white text-xs font-semibold tracking-wide'>
        New
      </div>
      
      {/* Card Content */}
      <h2 className="text-3xl font-bold my-2 mx-2">{heading}</h2>
      <h4 className="text-lg text-gray-800 mx-2 pb-2 font-regular">{description}</h4>
      <p className="text-base">{smallDescription}</p>
    </div>
  );
  
};

const cardData = [
  {
    heading: 'Drag & drop',
    description: 'Smoothly implement drag and drop feature so you can quickly re-order the files by your needs.',
    smallDescription: '',
    gradientFrom: '#eeff00',
    gradientTo: '#ffa400',  
  },  
  {
    heading: 'Labeling system',
    description: 'Create custom label for the file cards, filter them by names, change the tags, group them.',
    smallDescription: '',
    gradientFrom: '#13ecc8',
    gradientTo: '#2eafd1',
  },
  {
    heading: 'Multiple file types',
    description: 'DataDepot supports files such as PDF, DOCX, XLSX and more',
    smallDescription: '',
    gradientFrom: '#72c33c',
    gradientTo: '#4699b9', 
  },
];

const FeaturesCardsContainer = () => {
  return (
        <div className="flex flex-row gap-x-8 pt-24 justify-center">
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
