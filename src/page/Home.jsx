import React from 'react'
import Sidebar from '../components/Sidebar'
import LandingPage from './LandingPage'
import Aboutme from './About-me'
import Services from './Services'
import Resume from './Resume'

const Home = () => {
  return (
    <div className="font-poppins flex w-full text-white">
      <Sidebar />
      <div className="w-full bg-myBackground bg-cover h-[100vh] pl-32 ">
        <LandingPage />
        <Aboutme />
        <Services/>
        <Resume/>
      </div>
    </div>
  );
}

export default Home
