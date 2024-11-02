"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "../assets/main.json";

const Main = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents mismatches by avoiding SSR

  return (
    <div
      name="main"
      className="w-full h-screen flex items-center justify-evenly phone:flex-col phone:h-[105vh]"
    >
      <h1 className="flex flex-col items-start gap-1 text-2xl phone:text-sm phone:items-center">
        Hi, I&apos;m{" "}
        <span className="text-4xl text-[#f48d33] font-bold phone:text-xl">
          Abhijeet Ghode,
        </span>
        <span className="flex items-center gap-1 text-lg text-slate-100 text-opacity-50 phone:text-xs">
          A passionate{" "}
          <span className="flex items-center text-[#f48d33] gap-1 font-bold">
            <FaLessThan />
            Full Stack Developer
            <span className="flex items-center">
              <RxSlash />
              <FaGreaterThan />
            </span>
          </span>{" "}
          with 3 years
        </span>
        <span className="text-slate-100 text-lg text-opacity-50 phone:text-xs">
          of experience creating user-friendly web applications, Mobile applications & Desktop applications
        </span>
      </h1>
      <div className="w-1/2 phone:w-full">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Main;
