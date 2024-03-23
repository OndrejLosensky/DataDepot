import React from 'react'
import InfiniteScroll from './InfiniteScroll';
import '../../../src/app/infiniteScroll.css'

const TechStack = () => {
  return (
    <div>
        <div className='flex flex-col mt-8 py-16 mb-32 bg-[#1e2228]'>
                <InfiniteScroll
                items={[
                    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Figma',
                    'Photoshop', 'Premiere Pro', 'Figma', 'Angular', 'Node JS'
                ]}
                speed={90} 
                />
                <InfiniteScroll
                items={[
                    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Figma',
                    'Photoshop', 'Premiere Pro', 'Figma', 'Angular', 'Node JS'
                ]}
                speed={60} 
                />
                <InfiniteScroll
                items={[
                    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Figma',
                    'Photoshop', 'Premiere Pro', 'Figma', 'Angular', 'Node JS'
                ]}
                speed={110} 
                />
            </div>
    </div>
  )
}

export default TechStack