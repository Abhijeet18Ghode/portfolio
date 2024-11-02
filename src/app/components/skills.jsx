import React from 'react'
import {FaHtml5,FaCss3Alt } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPhp } from 'react-icons/si';

const skills = () => {
  return (
    <div name="skills" className='w-full flex flex-col items-center h-[100vh] justify-center  p-5 gap-10  '>
      <div className='flex flex-col gap-5 items-center'>
      <h1 className='text-slate-100 text-opacity-50 bg-gray-800 p-2 rounded-sm'>Skills</h1>
      <h1 className='flex flex-col text-3xl text-[#f48d33] font-bold phone:text-xl'>The Skills and technologies <span>I am really good at : </span></h1>
      </div>
      <div className='w-1/2 flex items-center justify-center flex-wrap gap-10 phone:w-full '>
        <h1 className='text-sm flex flex-col items-center gap-2'><FaHtml5 className='text-5xl text-red-500'/>HTML5</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><FaCss3Alt  className='text-5xl text-blue-500'/>CSS3</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><RiTailwindCssFill className="text-5xl text-blue-500"/>TailwindCSS</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><IoLogoJavascript className='text-5xl text-yellow-400'/>Javascript</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><GrReactjs className='text-5xl text-blue-600'/>ReactJS</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><RiNextjsFill className='text-5xl'/>NextJS</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><FaNodeJs className='text-5xl text-green-500'/>NodeJS</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><DiJavascript1 className='text-5xl text-yellow-400'/>ExpressJS</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><SiMongodb className='text-5xl text-green-400'/>MongoDB</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><FaGitAlt className='text-5xl text-red-600'/>Git</h1>
        <h1 className='text-sm flex flex-col items-center gap-2'><SiPhp className='text-5xl text-indigo-600'/>PHP</h1>
      </div>
    </div>
  )
}

export default skills