import React from 'react';
import QA from './QA';

const WhyChoose = () => {
  return (
    <div className='w-2/3 mx-auto my-64'>
      <p className='text-center text-xl text-[#a554f1] drop-shadow-glow2 pb-2 pt-12'>Q & A</p>
      <h2 className='text-4xl font-semibold text-center text-gray-200 mt-2 pb-4'>Frequently Asked Questions</h2>
      <QA
        question="What is DataDepot?"
        answer="DataDepot is an efficient documents/files storing app that allows users to securely store and organize their files and documents in one centralized location."
      />
      <QA
        question="What does the free plan include?"
        answer="The free plan of DataDepot includes basic features for storing and organizing files. Users can upload, manage, and access a limited amount of files for free."
      />
      <QA
        question="What features are included in the Pro plan?"
        answer="The Pro plan of DataDepot includes advanced features such as unlimited file storage, enhanced security measures, priority support, and additional customization options."
      />
      <QA
        question="What types of files does DataDepot support?"
        answer="DataDepot supports a wide range of file types, including documents, images, videos, audio files, and more. Users can upload and store various file formats with ease."
      />
      <QA
        question="Is my data secure with DataDepot?"
        answer="Yes, DataDepot prioritizes the security and privacy of user data. We employ industry-standard encryption protocols and security measures to ensure that your files and documents are protected at all times."
      />
    </div>
  );
};

export default WhyChoose;
