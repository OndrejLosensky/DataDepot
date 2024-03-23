import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link'

const Pricing = () => {
  return (
    <div className='max-w-screen min-h-screen'>
        <h1 className='text-center py-4'> Pricing page</h1>
        <a><Link className='btn btn-ghost absolute top-0 left-0 ml-4 mt-4' href="/"><FaArrowLeftLong/>Back</Link></a>
    </div>
  )
}

export default Pricing;