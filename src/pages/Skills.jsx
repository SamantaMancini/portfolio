import { useEffect } from "react";
import Screen from "../components/Screen";
import { FaHtml5, FaCss3, FaReact, FaAngular } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";

import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({ 
    easing: "ease-out-quart",
    delay: 0,
    duration: 750, });
  }, []);
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h2
          data-aos="fade-right"
          className="text-[52px] font-semibold leading-normal uppercase text-cyan-500"
        >
         Skills
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5 justify-around h-[30rem] overflow-y-auto lg:overflow-y-hidden lg:h-full">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center font-semibold text-red-600 rounded-ss-3xl rounded-br-3xl h-[7rem] w-[9rem] border-2 border-[#ff19f3] b_glow bg-slate-900"
          >
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noreferrer"
            >
              <FaHtml5 size={50} />
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-blue-700 rounded-ss-3xl rounded-br-3xl h-[7rem] w-[9rem] border-2 border-[#ff19f3] b_glow"
          >
            <a
              href="https://www.w3schools.com/css/default.asp"
              target="_blank"
              rel="noreferrer"
            >
              <FaCss3 size={50} />
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-yellow-500 rounded-ss-3xl rounded-br-3xl h-[7rem] w-[9rem] border-2 border-[#ff19f3] b_glow"
          >
            <a href="https://javascript.info/" target="_blank" rel="noreferrer">
              <DiJavascript size={50} />
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-[7rem] w-[9rem] border-2 border-[#ff19f3] b_glow"
          >
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <FaReact size={50} />
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center justify-center font-semibold text-blue-700 rounded-ss-3xl rounded-br-3xl h-[7rem] w-[9rem] border-2 border-[#ff19f3] b_glow"
          >
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              <BiLogoTypescript size={50} />
            </a>
          </div>
          <div
            className="flex items-center justify-center font-semibold text-red-600 rounded-ss-3xl rounded-br-3xl h-[7rem] w-[9rem] border-2 border-[#ff19f3] b_glow"
          >
            <a href="https://angular.io" target="_blank" rel="noreferrer">
              <FaAngular size={50} />
            </a>
          </div>
        </div>
       </div>
    </section>
  );
};

export default Skills;
