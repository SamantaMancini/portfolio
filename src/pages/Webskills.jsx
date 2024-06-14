import { useEffect } from "react";
import { FaReact, FaNodeJs} from "react-icons/fa";
import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import {SiExpress, SiMysql, SiTypescript, SiTailwindcss } from "react-icons/si";
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
          className="lg:text-[52px] text-[3.2rem] font-semibold leading-normal uppercase text-cyan-500"
        >
        Web Skills
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-around h-[25rem] overflow-y-auto lg:overflow-y-hidden lg:h-full">
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <FaReact size={50} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-purple-800 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <BiLogoRedux size={50} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiTailwindcss size={50} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-green-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <FaNodeJs size={50} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-blue-700 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiTypescript size={50} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiExpress size={50} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-green-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <BiLogoMongodb size={50} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiMysql size={50} />
          
          </div>
        </div>
       </div>
    </section>
  );
};

export default Skills;
