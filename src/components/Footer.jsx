import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { SectionWrapper } from "../hoc";
import { favicon } from "../assets";
const Footer = () => {
  return (
    <div className="h-[240px] flex flex-col gap-6 items-center justify-center hover:bg-slate-800 delay-100 rounded-lg scroll-smooth shadow-card">
      <img src={favicon} alt="" />
      <h1 className="text-center text-xl w-full">
        Living, learning, & leveling up
        <br />
        <span>one day at a time.</span>
      </h1>
      <div className="social-media flex justify-center items-center gap-4 flex-wrap text-4xl">
        <a
          href="mailto:ravianand291@gmail.com"
          className="cursor-pointer rounded-full shadow-lg bg-black p-2 text-white hover:bg-white hover:text-black"
        >
          <CiMail />
        </a>
        <a
          href="https://www.linkedin.com/in/ravi-anand-a03173130/"
          className="cursor-pointer rounded-full shadow-lg bg-black p-2 text-white hover:bg-white hover:text-black"
        >
          <CiLinkedin />
        </a>
        <a
          href="https://github.com/ravi-anand04"
          className="cursor-pointer rounded-full shadow-lg bg-black p-2 text-white hover:bg-white hover:text-black"
        >
          <FaGithub />
        </a>
        <a
          href="https://stackoverflow.com/users/7061258/eccentric291"
          className="cursor-pointer rounded-full shadow-lg bg-black p-2 text-white hover:bg-white hover:text-black"
        >
          <FaStackOverflow />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
