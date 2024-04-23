import React from 'react';
import Image from 'next/image';

const Profile = () => {

  return (
    <div>
        <>
          <div className="w-3 h-3 rounded-full absolute top-0 right-0 bg-green-500"></div>
          <Image
            alt='profile picture'
            src={"/profile_pictures/1.jpeg"}
            width={40}
            height={40}
            className='rounded-full border border-gray-400 ml-4 cursor-pointer'
          />
        </>
    </div>
  );
};

export default Profile;
