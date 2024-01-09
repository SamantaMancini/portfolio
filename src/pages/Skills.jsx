import { useEffect } from "react";
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
          className="lg:text-[52px] text-[3.2rem] font-semibold leading-normal uppercase text-cyan-500"
        >
         Skills
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-around h-[25rem] overflow-y-auto lg:overflow-y-hidden lg:h-full">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center font-semibold text-red-600 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <FaHtml5 size={50} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-blue-700 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <FaCss3 size={50} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-yellow-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <DiJavascript size={50} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] sm:h-[7rem] sm:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <FaReact size={50} />
          </div>
        </div>
       </div>
    </section>
  );
};

export default Skills;
