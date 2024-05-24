import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandPinterest } from 'react-icons/tb';
import { SlSocialTwitter } from "react-icons/sl";

const Sidebar = () => {
    const { pathname } = useLocation();
    let subpage = pathname.split("/")?.[1];

  return (
    <div className="flex flex-col justify-between h-[100vh] bg-black px-12 text-xl font-semibold">
      <div className="flex items-center flex-col py-3">
        <img src="logo.png" alt="Logo" className="w-[6rem] rounded-full" />
        <h2>Solange~D~Ihirwe</h2>
      </div>
      <ul className="flex flex-col gap-6 items-center">
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
      <div className="flex gap-2 text-gray-300 py-3">
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
