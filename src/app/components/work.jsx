import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const work = () => {
  const projects = [{
    id : 1,
    title : "ToDo App",
    desc : "The TODO application is a task management tool designed to help users organize their tasks efficiently. This project will be developed using React JS, allowing users to create, update, delete, and mark tasks as completed, providing an intuitive and responsive user interface.",
    liveLink : "https://doit-sameer.netlify.app/",
    gitLink : "https://github.com/VISAM2529/TODO",
    projectImg:"https://img.freepik.com/free-vector/people-making-list-illustration_53876-43029.jpg?t=st=1713951899~exp=1713955499~hmac=f31b6a4f86b2d2bb6f7ff5afee683f505ca169ef325dfcc42cedaa95c33e7464&w=740",
    skills : ["NextJs"]
  },
  {
    id : 2,
    title : "Weather Now",
    desc : "The Weather Now application is a web-based tool that provides users with current weather information for a specific location. This project will be built using React JS, leveraging APIs to fetch real-time weather data and display it in an intuitive and user-friendly interface.",
    liveLink : "https://weather-now-sg.netlify.app/",
    gitLink : "https://github.com/VISAM2529/Weather-Now",
    projectImg:"https://img.freepik.com/free-vector/online-weather-forecast-smartphone-screen-isometric-composition-with-female-character-presenter-blue-background-3d-vector-illustration_1284-69840.jpg?t=st=1713951968~exp=1713955568~hmac=8729cb8538e06e8373528eb0a4b91408ae69cbd9c206d8e96696a7c87eb91298&w=740",
    skills : ["React"]
  },
  {
    id : 3,
    title : "E-commerce Application",
    desc : "E-commerce Application is a comprehensive online shopping platform designed to provide users with a seamless shopping experience. This project utilizes the Nextjs, MongoDB for the database.",
    liveLink : "https://khatal-ecart.vercel.app/",
    gitLink : "https://github.com/VISAM2529/MERN-ECART",
    skills : ["React","ExpressJS","NodeJS","MongoDB"],
    projectImg:"https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34864.jpg?t=st=1713952068~exp=1713955668~hmac=1ddac614ba19696c87972af9526eb6ec75d46cc52861f80481888762c5b91a44&w=740",
  },
  // {
  //   id : 4,
  //   title : "Project Management Tool",
  //   desc : "MERN Project Manager is a robust and scalable web application built using the MERN stack (MongoDB, Express.js, ReactJS, Node.js), designed to simplify and streamline the project management workflow for teams and organizations.",
  //   liveLink : "https://project-managementt-tool.netlify.app/",
  //   gitLink : "https://github.com/VISAM2529/Project_Management_Tool",
  //   projectImg:"https://img.freepik.com/free-vector/augmented-reality-background-isometric-style_23-2147801130.jpg?t=st=1713952135~exp=1713955735~hmac=eecb477d77d73223bd5b90803a8808ec75992eacfb2107ea67ad9989ed5e1965&w=740",
  //   skills : ["React","ExpressJS","NodeJS","MongoDB"]
  // },
  // {
  //   id : 5,
  //   title : "ChatSphere",
  //   desc : "Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with Socket.IO integration. Implemented user authentication, message storage, and real-time messaging features, allowing users to engage in seamless conversations.",
  //   liveLink : "https://chatsphere-sg.netlify.app/",
  //   gitLink : "https://github.com/VISAM2529/ChatSphere",
  //   projectImg:"https://img.freepik.com/free-vector/isometric-phone-with-chat-concept_23-2148284552.jpg?t=st=1713952169~exp=1713955769~hmac=f0cbbcf9f5fc0331c4d93f49ead20366c337e9b3c514768dcbeaf7ab155d69b6&w=740",
  //   skills : ["React","ExpressJS","NodeJS","MongoDB"]
  // },
 
  ]
  return (
    <div name="work" className='flex flex-col items-center gap-10 w-full h-[200vh] phone:h-fit phone:p-5 '>
      <div className='flex flex-col items-center gap-2'>
      <h1 className='text-slate-100 text-opacity-50 bg-gray-800 p-2 rounded-sm'>Work</h1>
      <h1 className='text-3xl text-[#f48d33] font-bold phone:text-xl'>Things I&apos;ve built so far</h1>
      </div>
      <div className='w-full h-4/5 flex items-center flex-wrap gap-10  justify-center phone:flex-col'>
        {
          projects.map((project)=>{
            return<div key={project.id} className='w-1/4 h-2/5  shadow-2xl rounded-2xl flex flex-col items-start justify-between border-x border-y-2 border-gray-800 phone:w-full'>
              <Image src={project.projectImg} className='w-full h-1/2 object-cover rounded-tl-2xl rounded-tr-2xl    '/>
              <div className='w-full h-full flex flex-col items-start justify-evenly'>
              <h1 className='text-lg p-3'>{project.title}</h1>
              <p className='text-xs p-2'>{project.desc}</p>
              <div className='flex items-center justify-between pl-5 pr-5 pt-3 pb-3 text-sm w-full'>
              <Link href={project.liveLink} className='bg-[#f48d33] w-20 text-center rounded-sm p-1'>Live</Link>
              <Link href={project.gitLink} className='underline'>Github</Link>
              </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default work
