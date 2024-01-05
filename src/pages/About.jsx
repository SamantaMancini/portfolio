import cv from "../assets/CV Samanta.pdf";
import { useEffect } from "react";
import Button from "../components/Button";
import Screen from "../components/Screen";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 1200,
      duration: 750,
    });
  }, []);
  return (
    <section>
      <Screen>
      <div className="text-center gap-5 flex flex-col justify-center items-center overflow-x-hidden">
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
                  <Button text={"Download CV"}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Screen>
    </section>
  );
};

export default About;
