import { useEffect } from "react";
import { FaReact, FaNodeJs} from "react-icons/fa";
import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import {SiExpress, SiPostgresql, SiTypescript, SiTailwindcss } from "react-icons/si";
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
          className="lg:text-[52px] text-3xl font-semibold leading-normal uppercase text-cyan-500"
        >
        Web Skills
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-around max-h-96 overflow-y-auto lg:overflow-y-hidden lg:max-h-full py-4">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <FaReact size={30} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-purple-800 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <BiLogoRedux size={30} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-cyan-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiTailwindcss size={30} />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-green-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <FaNodeJs size={30} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-blue-700 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiTypescript size={30} />
          
          </div>
          <div
            className="flex items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiExpress size={30} />
          
          </div>
          <div
            className="flex items-center justify-center font-semibold text-green-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <BiLogoMongodb size={30} />
          
          </div>
          <div
            className="flex items-center justify-center font-semibold text-blue-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiPostgresql size={30}/>
          
          </div>
        </div>
       </div>
    </section>
  );
};

export default Skills;
