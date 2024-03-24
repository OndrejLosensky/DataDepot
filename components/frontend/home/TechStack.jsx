import React from 'react'
import InfiniteScroll from './InfiniteScroll';
import '../../../src/app/infiniteScroll.css'

const TechStack = () => {
  return (
    <div>
        <div className='flex flex-col mt-8 py-16 mb-32 bg-[#1e2228]'>
                <h2 className='text-center text-pink-500  pb-8'> Techstack used for this project</h2>
                <InfiniteScroll
                items={[
                    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Next.js',
                    'TailwindCSS', 'Node JS', 'API',
                ]}
                speed={90} 
                />
                <InfiniteScroll
                items={[
                    'react-icons', 'axios', 'sqlite','sqlite3', 'DaisyUI', 'fs', 'multiparty', 'react-scroll'
                ]}
                speed={60} 
                />
                <InfiniteScroll
                items={[
                    'SQlite', 'Firebase', 'Figma', 'Adobe Illustrator','Adobe Photoshop', 'VSCode'
                ]}
                speed={110} 
                />
            </div>
    </div>
  )
}

export default TechStack