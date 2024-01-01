import cv from "../assets/CV Samanta.pdf";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";

const About = ({ show, setShow }) => {
  useEffect(() => {
    setShow(true);
    AOS.init({
      easing: "ease-out-quart",
      delay: 1200,
      duration: 750,
    });
  }, []);
  return (
    <section className="py-8">
      <CSSTransition in={show} timeout={500} classNames="fade" unmountOnExit>
      <div className="text-center gap-5 flex flex-col justify-center items-center overflow-x-hidden b_glow border-2 border-[#ff19f3] rounded-3xl mx-auto lg:w-[50rem] mt-5 hologram">
        <div className="h-full flex flex-col justify-center items-center" data-aos="fade-right">
          <h2
            className="text-[52px] font-semibold leading-normal uppercase text-cyan-500 text-center"
          >
            About me
          </h2>
          <div className="text-left mobile-landscape lg:mx-10">
            <p
              className="text-white"
            >
              
            </p>
          </div>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a href={cv} download>
                  <button className="neno-button shadow-xl hover:shadow-cyan-800/50 border-2  hover:text-[#ff19f3] hover:bg-slate-900 border-[#ff19f3] rounded-lg py-4 px-8 uppercase relative overflow-hidden text-white mb-4">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </CSSTransition>
    </section>
  );
};

export default About;
