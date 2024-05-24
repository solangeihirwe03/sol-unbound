import React from 'react'
import Sidebar from '../components/Sidebar'
import LandingPage from './LandingPage'

const Home = () => {
  return (
    <div className='font-montSerrat flex w-full text-white'>
      <Sidebar/>
      <div className='w-full'>
        <LandingPage/>
      </div>
    </div>
  )
}

export default Home
