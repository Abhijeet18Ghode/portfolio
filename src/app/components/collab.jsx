"use client";
import React from 'react';

const Collab = () => {
  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:ghodeabhijeet18@gmail.com';
  };

  return (
    <div className='w-full h-[50vh] flex items-center justify-center'>
      <div className='flex items-center justify-evenly bg-[#31363F] h-1/2 rounded-lg w-3/4 p-3 phone:w-full phone:flex-col phone:h-full'>
        <h1 className='text-2xl font-bold'>Start a Project</h1>
        <p className='flex flex-col items-center text-sm phone:justify-center phone:text-center'>
          Interseted in working together? We should queue up 
          <span> a time to chat. I&apos;ll buy the tea.</span>
        </p>
        <button onClick={handleEmailButtonClick} className='bg-[#f48d33] pl-5 pr-5 pt-2 pb-2 rounded-md w-fit'>
          Let&apos;s do this
        </button>
      </div>
    </div>
  );
}

export default Collab;
