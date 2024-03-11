import React from 'react';

const SectionTitle = ({ name }) => {
  return (
    <div className="text-2xl text-center pb-2 uppercase w-48 mx-auto">
      <p className="">
        {name}
      </p>
    </div>
  );
};

export default SectionTitle;
