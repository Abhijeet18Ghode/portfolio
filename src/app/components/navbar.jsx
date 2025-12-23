"use client";
import React from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { Link } from "react-scroll";
import { GoDownload } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center font-bold gap-2">
        <FaLessThan className="text-xl text-[#f48d33]" />
        <span className="text-xl flex items-center gap-1 phone:text-sm">
          <span className="text-[#fd6b36]">ABHI</span>
        </span>
        <span className="flex items-center">
          <RxSlash className="text-xl text-[#f48d33] phone:text-sm" />
          <FaGreaterThan className="text-xl text-[#f48d33] phone:text-sm" />
        </span>
      </div>
      <div className="flex items-center gap-10 text-sm font-bold phone:hidden">
        <Link to="main" smooth={true} className="cursor-pointer text-[#f48d33]" >Home</Link>
        <Link to="about" smooth={true} className="cursor-pointer">About me</Link>
        <Link to="skills" smooth={true} className="cursor-pointer">Skills</Link>
        <Link to="work" smooth={true} className="cursor-pointer">Work</Link>
        <Link to="exp" smooth={true} className="cursor-pointer">Experience</Link>
      </div>
      <div>
      <a
          href="/Abhijeet-Ghode-Resume.pdf"
          download="Abhijeet_Ghode_Resume.pdf"
          className="cursor-pointer bg-[#f48d33] pl-3 pr-3 pt-1 pb-1 rounded-md phone:text-xs flex items-center gap-1"
        >
          Resume <GoDownload className="text-xl"/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
