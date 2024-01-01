import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { TypeAnimation } from 'react-type-animation';
import hero from "../assets/images/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import '../index.css'

const Hero = ({ showHologram, setShowHologran}) => {

  useEffect(() => {
    setShowHologran(true)
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <section>
      <CSSTransition in={showHologram} timeout={500} classNames="fade" unmountOnExit>
      <div className="px-0 2xl:py-40 text-center gap-1 lg:text-start flex lg:flex-row flex-col-reverse justify-center lg:gap-[20%] items-center b_glow border-2 border-[#ff19f3] rounded-3xl mx-auto lg:w-[50rem] mt-5 hologram">
        <div className="lg:py-20 py-10 flex flex-col justify-center lg:items-start items-center z-10" data-aos="fade-right">
          <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase text-cyan-500">
            Hello! <br />I am Samy
          </h1>
          <h2 className="md:text-2xl text-xl md:leading-normal leading-5 font-bold text-white type">
          <TypeAnimation sequence={[
          "FRONT END DEVELOPER", 1000, 
          "PROBLEM SOLVER", 1000, 
          "CREATIVE", 1000, 
          "PRECISE", 1000, 
          "CURIOUS", 1000, 
          "VIDEOGAMES LOVER", 1000
          ]}
          speed={50}
          wrapper="span"
          repeat={Infinity}
          />
          </h2>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a
                  href="https://www.linkedin.com/in/samantamancini/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-500 hover:text-[#ff19f3] rounded-full glow p-2"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/SamantaMancini"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-500 hover:text-[#ff19f3] rounded-full glow p-2"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="mailto:s.mancini93@hotmail.it"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-500 hover:text-[#ff19f3] rounded-full glow p-2"
                >
                  <FaEnvelope size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-right"
          src={hero}
          alt="me"
          width={250}
          height={250}
          className="rounded-full border-2 p-1 border-cyan-600 img_glow max-[576px]:w-1/2 h-200px"
        />
      </div>
      </CSSTransition>
    </section>
  );
};

export default Hero;
