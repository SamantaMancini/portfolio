import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import hero from "../assets/images/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <section id="/home">
      <div className="lg:px-56 px-0 lg:py-40 py-20 text-center gap-1 lg:text-start flex lg:flex-row flex-col-reverse justify-start lg:gap-20 items-center">
        <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase text-cyan-500">
            Hello! I am Samy
          </h1>
          <h2 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold">
            Junior Front End Developer
          </h2>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div data-aos="fade-up" className="flex space-x-2">
                <a
                  href="https://www.linkedin.com/in/samantamancini/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 hover:text-cyan-500 rounded-full glow p-2"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/SamantaMancini"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 hover:text-cyan-500 rounded-full glow p-2"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="mailto:s.mancini93@hotmail.it"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 hover:text-cyan-500 rounded-full glow p-2"
                >
                  <FaEnvelope size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-up"
          src={hero}
          alt="me"
          width={250}
          height={250}
          className="rounded-full border-2 p-1 border-cyan-600 img_glow max-[576px]:w-1/2 h-200"
        />
      </div>
    </section>
  );
};

export default Hero;
