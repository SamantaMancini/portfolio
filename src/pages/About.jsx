import { useEffect } from "react";
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
            className="lg:text-[52px] text-3xl font-semibold leading-normal uppercase text-cyan-500 text-center"
          >
            About me
          </h2>
          <div className="text-left mobile-landscape lg:mx-10 p-2">
            <p
              className="text-white text-xs lg:text-base"
            >
              I have always had a strong passion for programming and everything related to it, which is why I have decided to deepen my knowledge more and more. Despite being a game developer with a couple of years of experience with Unreal Engine, I now wanted to take an important new step for my profession, which is to study Godot Engine.

              I mainly use C++ and Blueprint, Python and Godot script as programming languages, however, following other branches of the sector, I have chosen to focus my study on front-end knowledge with HTML5, CSS3, JavaScript and React.js framework, while for the back-end Node.js with notions of MongoDB.

              Although I know that this path has no end, I am motivated to continue constantly every day.

              <br/>🔭 I’m working as Front-End Developer
              <br/>📚 I'm currently learning Python
              <br/>⚡ In my free time, I read, write on my blog and personal novel, play video games, and have a deep passion for Japanese culture.
            </p>
          </div>
        </div>
      </div>
      </Screen>
    </section>
  );
};

export default About;
