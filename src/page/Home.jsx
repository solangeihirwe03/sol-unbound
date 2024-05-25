import React from 'react'
import Sidebar from '../components/Sidebar'
import LandingPage from './LandingPage'
import Aboutme from './About-me'

const Home = () => {
  return (
    <div className='font-montSerrat flex w-full text-white'>
      <Sidebar/>
      <div className="w-full bg-background bg-cover h-[100vh]">
        <LandingPage/>
        <Aboutme/>
      </div>
    </div>
  )
}

export default Home
