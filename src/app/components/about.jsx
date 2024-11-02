import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-[75vh] flex p-5 items-center justify-evenly gap-10 phone:flex-col-reverse"
    >
      {/* Profile Picture and Social Links */}
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/profile.png"
          alt="Profile picture of Abhijeet Ghode"
          width={250}
          height={250}
          className="bg-[#ffa97b] bg-opacity-25 backdrop-blur-sm rounded-full phone:w-2/4"
        />
        <div className="bg-[#f48d33] bg-opacity-15 backdrop-blur-lg border-y border-[#f48d33] w-60 text-center p-2 flex flex-col items-center gap-3 -translate-y-14 rounded-lg phone:w-32 phone:text-xs phone:-translate-y-10">
          <h1>Abhijeet Ghode</h1>
          <div className="flex items-center gap-5 text-xl">
            <Link
              href="https://www.linkedin.com/in/abhijeet-ghode"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="text-blue-500 hover:-translate-y-1 transition-all ease-in-out duration-150"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/abhijeet-ghode"
              target="_blank"
              aria-label="GitHub Profile"
              className="text-black hover:-translate-y-1 transition-all ease-in-out duration-150"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.instagram.com/abhijeet-ghode"
              target="_blank"
              aria-label="Instagram Profile"
              className="text-pink-500 hover:-translate-y-1 transition-all ease-in-out duration-150"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* About Me Content */}
      <div className="w-1/2 flex flex-col items-start gap-5 phone:w-full phone:items-center">
        <h1 className="text-slate-100 text-opacity-50 bg-gray-800 p-2 rounded-sm">
          About Me
        </h1>
        <h1 className="text-3xl font-bold phone:text-xl">
          Why <span className="text-[#f48d33]">Hire</span> Me?
        </h1>
        <p className="text-start phone:text-center phone:text-sm leading-relaxed">
          Hello! I&apos;m Abhijeet, a Bachelor of Engineering in Computer Science graduate, passionate about building impactful and user-centric digital experiences. I specialize in Web Development using technologies like Next.js and the MERN Stack, and I also work on Mobile and Desktop Application Development.
          <br /><br />
          With experience across multiple platforms, I enjoy taking ideas from concept to completion, creating applications that are both functional and visually engaging. Whether it&apos;s developing scalable web applications, intuitive mobile apps, or efficient desktop software, I&apos;m always excited to tackle new challenges and refine my skills.
          <br /><br />
          Explore my projects below, and feel free to reach out if you&apos;re interested in collaborating or just want to connect!
        </p>
      </div>
    </div>
  );
};

export default About;
