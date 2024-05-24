import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandPinterest } from 'react-icons/tb';
import { SlSocialTwitter } from "react-icons/sl";

const Sidebar = () => {
    const {pathname} = useLocation();
    const subpage = pathname.split('/')?.[1]

    function ActiveNav(){
        let classes = "hover:text-[#7D8C3B]";

        if(classes === subpage){
            classes += "text-[#7D8C3B]";
        }
        else{
            classes+= "text-white"
        }
        return classes
    }

  return (
    <div className="flex flex-col justify-between h-[100vh] bg-black text-white px-12 text-xl font-semibold">
      <div className="flex items-center flex-col">
        <img src="logo.png" alt="Logo" className="w-[6rem] rounded-full" />
        <h2>Solange~D~Ihirwe</h2>
      </div>
      <ul className="flex flex-col gap-6 items-center">
        <li className="hover:text-[#7D8C3B]">
          <NavLink className={ActiveNav('')} to={'/'}>Home</NavLink>
        </li>
        <li className="hover:text-[#7D8C3B]">
          <NavLink className={ActiveNav('aboutme')} to='/aboutme'>About Me</NavLink>
        </li>
        <li className="hover:text-[#7D8C3B]">
          <NavLink className={ActiveNav('services')} to='/services'>Services</NavLink>
        </li>
        <li className="hover:text-[#7D8C3B]">
          <NavLink className={ActiveNav('resume')} to='/resume'>Resume</NavLink>
        </li>
        <li className="hover:text-[#7D8C3B]">
          <NavLink className={ActiveNav('portifolio')} to='/portifolio'>Portifolio</NavLink>
        </li>
        <li className="hover:text-[#7D8C3B]">
          <NavLink className={ActiveNav('contact')} to='/contact'>Contact</NavLink>
        </li>
      </ul>
      <div>
        <FaInstagram />
        <FaFacebookF />
        <SlSocialTwitter />
        <TbBrandPinterest />
        <FaLinkedinIn />
      </div>
    </div>
  );
}

export default Sidebar
