import { NavLink, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandPinterest } from 'react-icons/tb';
import { SlSocialTwitter } from "react-icons/sl";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';

const Sidebar = () => {

    const [open, setOpen] = useState(false)

    const showNavbar = ()=>{
        return setOpen(true)
    }
    const { pathname } = useLocation();
    let subpage = pathname.split("/")?.[1];

  return (
    <div className="flex flex-col justify-between h-[100vh] bg-black px-12 text-xl font-semibold fixed z-10">
      <div className="md:flex items-center flex-col py-3 hidden">
        <img src="logo.png" alt="Logo" className="w-[6rem] rounded-full" />
        <h2>Solange~D~Ihirwe</h2>
      </div>
      <ul className="hidden md:flex flex-col gap-6 items-center">
        <li
          className={`hover:text-[#7D8C3B] ${
            subpage === "" ? "text-[#7D8C3B]" : "text-white"
          }`}
        >
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li
          className={`hover:text-[#7D8C3B] ${
            subpage === "aboutme" ? "text-[#7D8C3B]" : "text-white"
          }`}
        >
          <NavLink to="/aboutme">About Me</NavLink>
        </li>
        <li
          className={`hover:text-[#7D8C3B] ${
            subpage === "services" ? "text-[#7D8C3B]" : "text-white"
          }`}
        >
          <NavLink to="/services">Services</NavLink>
        </li>
        <li
          className={`hover:text-[#7D8C3B] ${
            subpage === "resume" ? "text-[#7D8C3B]" : "text-white"
          }`}
        >
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li
          className={`hover:text-[#7D8C3B] ${
            subpage === "portifolio" ? "text-[#7D8C3B]" : "text-white"
          }`}
        >
          <NavLink to="/portifolio">Portifolio</NavLink>
        </li>
        <li
          className={`hover:text-[#7D8C3B] ${
            subpage === "contact" ? "text-[#7D8C3B]" : "text-white"
          }`}
        >
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="md:hidden bg-black">
        <IoMenuSharp fontSize={30} className='right-9 top-6 absolute'/>
        <ul className="absolute right-9 top-12 flex flex-col gap-5 items-center bg-black p-4">
          <li
            className={`hover:text-[#7D8C3B] ${
              subpage === "" ? "text-[#7D8C3B]" : "text-white"
            }`}
          >
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            className={`hover:text-[#7D8C3B] ${
              subpage === "aboutme" ? "text-[#7D8C3B]" : "text-white"
            }`}
          >
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
          <li
            className={`hover:text-[#7D8C3B] ${
              subpage === "services" ? "text-[#7D8C3B]" : "text-white"
            }`}
          >
            <NavLink to="/services">Services</NavLink>
          </li>
          <li
            className={`hover:text-[#7D8C3B] ${
              subpage === "resume" ? "text-[#7D8C3B]" : "text-white"
            }`}
          >
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li
            className={`hover:text-[#7D8C3B] ${
              subpage === "portifolio" ? "text-[#7D8C3B]" : "text-white"
            }`}
          >
            <NavLink to="/portifolio">Portifolio</NavLink>
          </li>
          <li
            className={`hover:text-[#7D8C3B] ${
              subpage === "contact" ? "text-[#7D8C3B]" : "text-white"
            }`}
          >
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex gap-2 text-gray-300 py-6 absolute right-20 md:relative">
        <FaInstagram fontSize={24} />
        <FaFacebookF fontSize={24} />
        <SlSocialTwitter fontSize={24} />
        <TbBrandPinterest fontSize={24} />
        <FaLinkedinIn fontSize={24} />
      </div>
    </div>
  );
}

export default Sidebar
