import { useEffect } from "react";
import { FaHtml5, FaCss3, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { DiJavascript, DiPython } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Aos from "aos";

const Skills = () => {
  useEffect(()=> {
    Aos.init({duration: 1000});
}, [])
return (
  <section id="/skills">
   <div className="flex flex-col items-center justify-center">
    <h2 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-500">Skills</h2>
    <div className="grid max-[375px]:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around gap-10">
    <div data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-red-600 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
    <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer">
    <FaHtml5 size={80} /></a>
    </div>
    <div data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-blue-700 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
    <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer">
    <FaCss3 size={80} /></a>
    </div>
        <div data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-purple-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><BsBootstrapFill size={80} /></a>
        </div>
        <div data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-yellow-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
        <a href="https://javascript.info/" target="_blank" rel="noreferrer"><DiJavascript size={80} /></a>
        </div>
        <div data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-green-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
        <a href="https://nodejs.org/it" target="_blank" rel="noreferrer"><FaNodeJs size={80} /></a>
        </div>
        <div data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
        <a href="https://react.dev/" target="_blank" rel="noreferrer"><FaReact size={80} /></a>
        </div>
        <div data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub size={80} /></a>
        </div>
    </div>
    <h2 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal mt-20 uppercase text-cyan-500">Im learning</h2>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around gap-20">
    <div data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
    <a href="https://www.python.org/" target="_blank" rel="noreferrer"><DiPython size={80} /></a>
    </div>
    <div data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-blue-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow">
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><SiTypescript size={80} /></a>
        </div>
    </div>
   </div>
  </section>
);
  };
  
  export default Skills;
