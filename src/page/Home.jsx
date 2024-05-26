import React from 'react'
import Sidebar from '../components/Sidebar'
import LandingPage from './LandingPage'
import Aboutme from './About-me'
import Services from './Services'
import Resume from './Resume'
import Portifolio from './Portifolio'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="font-poppins flex w-full text-white">
      <Sidebar />
      <div className="w-full bg-myBackground bg-cover h-[100vh] pl-32 ">
        <LandingPage />
        <Aboutme />
        <Services/>
        <Resume/>
        <Portifolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default Home
