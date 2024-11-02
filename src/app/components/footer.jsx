"use client";
import React, { useRef } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { Link } from "react-scroll";

const Footer = () => {
  const form = useRef();
  const user_name = useRef();
  const user_email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q5viuop', 'template_p9ag6zj', form.current, 'LrQd_pm1tk5bnQQVy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    user_name.current.value = "";
    user_email.current.value = "";
    message.current.value = "";
    toast.success("Sent");
  };

  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:ghodeabhijeet18@gmail.com';
  };

  return (
    <div name="footer" className='w-full bg-[#31363F] h-auto px-10 py-10 rounded-lg flex flex-col gap-10 phone:px-3'>
      <Toaster />
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl text-white font-extrabold phone:text-xl'>Let&apos;s Connect there</h1>
        <button onClick={handleEmailButtonClick} className='flex gap-1 items-center justify-center text-sm text-white bg-[#f48d33] w-fit pl-5 pr-5 pt-2 pb-2 rounded-full phone:text-xs'>Hire Me<GoArrowUpRight /></button>
      </div>
      <hr className='w-full' />
      <div className='w-full flex gap-10 justify-between phone:flex-col phone:items-center'>
        <div className='w-2/4 flex flex-col items-start gap-5 phone:items-center phone:w-full'>
          <h1 className='text-white text-2xl phone:text-sm'>Abhijeet</h1>
          <p className='text-slate-100 text-opacity-50 phone:text-xs phone:text-center'>Hello, I&apos;m Abhijeet Ghode born in Akola and brought up in Pune. Completed my 12'th at MIT junior college kothrud and currently pursuing Bachelor Of Engineering (Computer) from Pune University.</p>
          <div className='text-slate-100 text-opacity-50 flex items-center gap-5 text-2xl'>
            <a href='https://www.linkedin.com/in/sameer-gaikwad-61a618226/' className='hover:text-blue-500  hover:-translate-y-1 transition-all ease-in-out duration-300'><FaLinkedin /></a>
            <a href='https://github.com/VISAM2529' className='hover:text-black hover:-translate-y-1 transition-all ease-in-out duration-300'><FaGithub /></a>
            <a href='https://www.instagram.com/sameergaikwad_29/?next=%2F' className='hover:text-pink-500 hover:-translate-y-1 transition-all ease-in-out duration-300'><FaInstagram /></a>
          </div>
        </div>
        <div className='flex items-start gap-5 phone:items-start phone:justify-between phone:w-full'>
          <div className='w-1/4 flex flex-col gap-3 phone:items-start phone:w-full'>
            <h1 className='text-[#f48d33] font-bold phone:text-sm'>Navigation</h1>
            <div className='flex flex-col gap-1 text-slate-100 text-opacity-50 phone:text-xs phone:items-start'>
              <Link to='main' smooth={true} className='cursor-pointer'>Home</Link>
              <Link to='about' smooth={true} className='cursor-pointer'>About</Link>
              <Link to='skills' smooth={true} className='cursor-pointer'>Skills</Link>
              <Link to='work' smooth={true} className='cursor-pointer'>Work</Link>
              <Link to='exp' smooth={true} className='cursor-pointer'>Experience</Link>
            </div>
          </div>
          <div className='w-full flex flex-col gap-3 phone:items-end phone:w-full '>
            <h1 className='text-[#f48d33] font-bold phone:text-sm'>Contacts</h1>
            <div className='flex flex-col gap-1 text-slate-100 text-opacity-50 phone:items-end phone:text-xs'>
              <h1>+91-9881012691</h1>
              <h1>ghodeabhijeet18@gmail.com</h1>
             
            </div>
          </div>
        </div>
        <div className='w-2/4 flex flex-col gap-5 phone:w-full'>
          <h1 className='text-[#f48d33] font-bold phone:text-sm'>Share Your Ideas</h1>
          <form ref={form} className='flex flex-col gap-2 phone:text-xs'>
            <input name='user_name' ref={user_name} placeholder='Your Name' type='text' className='px-3 py-2 rounded-3xl outline-none bg-transparent border-x border-y border-[#f48d33]' />
            <input name='user_email' ref={user_email} placeholder='Your Mail' type='email' className='px-3 py-2 rounded-3xl outline-none bg-transparent border-x border-y border-[#f48d33]' />
            <input name='message' ref={message} placeholder='Your Msg' type='text' className='px-3 py-2 rounded-3xl outline-none bg-transparent border-x border-y border-[#f48d33]' />
            <button onClick={sendEmail} className='w-full bg-[#f48d33] rounded-3xl py-2 text-white'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
