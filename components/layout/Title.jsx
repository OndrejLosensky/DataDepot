import React from 'react'

const Title = ({headingText}) => {
  return (
    <div className='text-center font-bold text-3xl text-gray-300 hover:text-gray-50 duration-200'>
        <h1>{headingText}</h1>
    </div>
  )
}

export default Title