import { useEffect } from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { BiLogoGit, BiLogoRedux } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="/skills">
      <div className="flex flex-col items-center justify-center">
        <h2
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-500"
        >
          Hard Skills
        </h2>
        <div className="grid max-[375px]:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around gap-10">
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-red-600 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noreferrer"
            >
              <FaHtml5 size={80} />
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="text-[26px] flex items-center justify-center font-semibold text-blue-700 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <a
              href="https://www.w3schools.com/css/default.asp"
              target="_blank"
              rel="noreferrer"
            >
              <FaCss3 size={80} />
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-purple-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsBootstrapFill size={80} />
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="text-[26px] flex items-center justify-center font-semibold text-yellow-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <a href="https://javascript.info/" target="_blank" rel="noreferrer">
              <DiJavascript size={80} />
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-purple-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noreferrer">
              <BiLogoRedux size={80} />
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="text-[26px] flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <FaReact size={80} />
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-red-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow mb-20"
          >
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <BiLogoGit size={80} />
            </a>
          </div>
        </div>
        <h2
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-500"
        >
          Soft Skills
        </h2>
        <div className="grid max-[375px]:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around gap-10">
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-pink-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl">Creativity</p>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-red-600 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl text-center">Problem solving</p>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-blue-600 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl text-center">Precision</p>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-green-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl text-center">Attention to detail</p>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-orange-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl text-center">Proactive</p>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-purple-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl text-center">Critical thinking</p>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-yellow-400 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl text-center">Teamwork</p>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl text-center">Listening</p>
          </div>
          <div
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center font-semibold text-orange-300 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-cyan-800 b_glow"
          >
            <p className="lg:text-2xl text-center">Empathetic</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
