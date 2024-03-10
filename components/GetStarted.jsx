import React from 'react'
import SectionTitle from './layout/SectionTitle'
import Title from './layout/Title'

const GetStarted = () => {
  return (
    <div className='min-h-screen max-w-screen bg-base-200'>
        <div className='pt-12'>
            <SectionTitle name="Get started"/>
            <Title headingText="Lets start with DataDepot"/>
        </div>
    </div>
  )
}

export default GetStarted