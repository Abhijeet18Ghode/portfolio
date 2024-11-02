"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const FAQItem = ({ question, answer ,period,link}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full '>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between bg-transparent border-x border-y border-gray-800 p-7 rounded-lg   '
      >
        <h1 className='phone:flex-col phone:items-start phone:gap-2'>{question} : <span className='text-slate-100 text-opacity-50'>{period}</span></h1>
        {isOpen ? <IoRemoveSharp className='text-2xl text-[#f48d33]'/> : <IoAddSharp className='text-2xl text-[#f48d33]'/>}
      </button>
      {isOpen && (
        <div className='p-5 bg-transparent rounded-lg mt-2 border-y border-x border-gray-800 flex flex-col items-start gap-3 '>
          <h1>{answer}</h1>
          <Link href={link} className='text-blue-700'>{link}</Link>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "Full Stack Developer @LumaSpace",period:"June 2024 - present", answer: "Skilled in leading technology teams and driving innovation. Proficient in Next.js for developing robust and scalable web applications. Demonstrated expertise in managing full-stack development, optimizing performance, and ensuring seamless user experiences." ,link : "https://luma-space.vercel.app/"},
    { question: "Web Developer Inter @CodSoft", period : "Dec 2023 - Jan 2024",answer: "Developed and enhanced web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Gained hands-on experience in full-stack development, including designing RESTful APIs, creating dynamic frontend interfaces, and ensuring efficient database management. Demonstrated ability to collaborate effectively within a development team and deliver high-quality software solutions" ,link:"https://www.codsoft.in/"},
    ];

  return (
    <div name="exp" className='w-full h-screen flex flex-col gap-14 items-center justify-center phone:gap-5'>
      <div className='flex flex-col items-center gap-3 w-full p-10 phone:p-5'>
        <h1 className='text-slate-100 text-opacity-50 bg-gray-800 rounded-sm p-2'>Experience</h1>
        <h1 className='text-3xl text-[#f48d33] font-bold flex flex-col items-start phone:items-center phone:text-xl'>Here is a quick summary of <span>my most recent experiences</span></h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1  gap-10 w-3/4 phone:text-xs phone:gap-10 phone:w-full'>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} period = {faq.period} link={faq.link}/>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
