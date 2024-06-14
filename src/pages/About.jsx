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
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <section className="px-4 lg:px-0">
      <Screen>
      <div className="text-center gap-5 flex flex-col justify-center items-center overflow-x-hidden">
        <div className="h-full flex flex-col justify-center items-center" data-aos="fade-right">
          <h2
            className="lg:text-[52px] text-[3rem] font-semibold leading-normal uppercase text-cyan-500 text-center"
          >
            About me
          </h2>
          <div className="text-left mobile-landscape lg:mx-10 px-4">
            <p
              className="text-white text-xs lg:text-base"
            >
              My creativity allows me to find innovative solutions to problems and create something from scratch.

              When I discovered the role of Front End developer, it was love at first sight. I studied through the Front End master at start2impact University and acquired coding skills such as Javascript, CSS, HTML, React.js.

              <br/>🔭 I’m working as Front-End Developer
              <br/>📚 I'm currently learning Python
              <br/>⚡ In my free time, I read, write on my blog and personal novel, play video games, and have a deep passion for Japanese culture.
            </p>
          </div>
          <div className="flex mt-5 gap-2">
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
