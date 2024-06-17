import { useEffect } from "react";
import { BiLogoCPlusPlus, BiLogoBlender, BiLogoPython } from "react-icons/bi";
import { SiAdobephotoshop, SiUnrealengine, SiGodotengine } from "react-icons/si";
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
         Game skills
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-around h-[25rem] overflow-y-auto lg:overflow-y-hidden lg:h-full py-4">
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-yellow-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <BiLogoPython size={30} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-blue-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <BiLogoCPlusPlus size={30} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-orange-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <BiLogoBlender size={30} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-blue-600 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiAdobephotoshop size={30} />
          
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiUnrealengine size={30} />
          
          </div>
          <div
            className="flex items-center justify-center font-semibold text-blue-500 rounded-ss-3xl rounded-br-3xl h-[5rem] w-[7rem] 2xl:h-[7rem] 2xl:w-[9rem] border-2 border-[#ff19f3] hologram"
          >
              <SiGodotengine size={30} />
          
          </div>
        </div>
       </div>
    </section>
  );
};

export default Skills;
