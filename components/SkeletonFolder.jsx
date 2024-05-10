import React from 'react'

export default function SkeletonFolder() {
  return (
    <div className="bg-gray-700 h-32 rounded-md p-2 animate-pulse">
      <div className="mb-2 w-full h-10 bg-gray-600 rounded-lg"></div>
      <div className="h-6 w-5/6 bg-gray-600 rounded-lg mb-2"></div>
      <div className="h-6 w-24 bg-purple-500 opacity-50 rounded-lg"></div>
    </div>
  )
}
