import React, {useState} from 'react'
import ControlPanel from './ControlPanel'
import List from './List';
const Files = () => {
  const [fileTypeFilter, setFileTypeFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  return (
    <div>
      <ControlPanel
         fileTypeFilter={fileTypeFilter} 
         setFileTypeFilter={setFileTypeFilter} 
         sortOption={sortOption} 
         setSortOption={setSortOption} 
      />
      <div className='border-b mb-8 border-gray-500 mx-4 mt-2'> </div>
      <List/>
    </div>
  )
}

export default Files