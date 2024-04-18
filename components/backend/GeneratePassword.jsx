import Link from 'next/link'
import React from 'react'

const GeneratePassword = () => {
  return (
    <div className='w-full h-full '>
      <h2 className='text-3xl text-gray-200 font-semibold mt-4'> Generate secure password with AI algorithms</h2>
      <p className='w-1/2'> Create an password that suits you the best and is also really secure. All of the password are hashed and we do not directly store inside our storage </p>
    </div>
  )
}

export default GeneratePassword