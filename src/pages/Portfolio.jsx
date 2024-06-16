import { useEffect, useState } from "react";
import Aos from "aos";
import Screen from "../components/Screen";
import Pagination from "../components/Pagination";
import project3 from "../assets/images/project-5.webp";
import project4 from "../assets/images/project-6.webp";
import project5 from "../assets/images/project-7.webp";
import project1 from "../assets/images/rayxim.webp";
import project2 from "../assets/images/museum.webp";
import project6 from "../assets/images/house.webp";

const Project = () => {
  useEffect(() => {
    Aos.init({ 
    easing: "ease-out-quart",
    delay: 0,
    duration: 750, });
  }, []);

 
  const projects = 
  [
    { 
      id: 1,
      image: project3,
      link: "https://borcelleyogastudio.netlify.app/",
      type: "web"
    },
    { 
      id: 2,
      image: project4,
      link: "https://borcelleyogastudio.netlify.app/",
      type: "web"
    },
    { 
      id: 3,
      image: project5,
      link: "https://borcelleyogastudio.netlify.app/",
      type: "web"
    },
    { 
      id: 4,
      image: project1,
      link: "https://mtgmisaki.itch.io/rayxim-dreams",
      type: "games"
    },
    { 
      id: 5,
      image: project2,
      link: "https://dandygames.itch.io/welcome-to-rich-art",
      type: "games"
    },
    { 
      id: 6,
      image: project6,
      link: "https://dandygames.itch.io/please-sell-this-house",
      type: "games"
    },
  ]

  const [filteredProjects, setFilteredProjects] = useState(projects)
  const handleClick = (button) => {
    if (button === "Web Apps") 
    {
        setFilteredProjects(projects.filter(project => project.type === "web"))
    } 
    else if (button === "Games") 
    {
      setFilteredProjects(projects.filter(project => project.type === "games"))
    } 
    else 
    {
      setFilteredProjects(projects)
    }
 }
  return (
    <section
      className="flex flex-col items-center justify-center overflow-x-hidden"
    >
      <div data-aos="fade-right" className="text-center">
      <h2
        className="text-[52px] font-semibold leading-normal uppercase text-cyan-500"
      >
        Projects
      </h2>
      <Pagination onClick={handleClick}/>
      </div>
      <Screen>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5 mt-5 lg:overflow-y-hidden overflow-y-auto lg:h-full h-[20rem] md:h-[40rem] px-4"
        data-aos="fade-left"
      >
        {filteredProjects?.map((filteredWeb, index) => (
          <div key={index}>
            <a href={filteredWeb.link} target="_blank" rel="noopener noreferrer">
              <button className="rounded-lg hover:bg-[#ff19f3] transition-colors duration-300">
                <img
                  src={filteredWeb.image}
                  alt="title"
                  className="rounded-2xl border-2 p-1 hover:bg-[#ff19f3] h-[10rem]"
                />
              </button>
            </a>
          </div>
        ))}
      </div>
      </Screen>
    </section>
  );
};

export default Project;
