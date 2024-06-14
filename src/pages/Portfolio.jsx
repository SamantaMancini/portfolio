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

 
  const projects = [
    {
      image: project3,
      link: "https://borcelleyogastudio.netlify.app/",
    },
    {
      image: project4,
      link: "https://climatechangealert.netlify.app",
    },
    {
      image: project5,
      link: "https://to-do-appbyme.netlify.app/",
    }
  ];

  const games = [
    {
      image: project1,
      link: "https://mtgmisaki.itch.io/rayxim-dreams",
    },
    {
      image: project2,
      link: "https://dandygames.itch.io/welcome-to-rich-art",
    },
    {
      image: project6,
      link: "https://dandygames.itch.io/please-sell-this-house",
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [filteredGames, setFilteredGames] = useState(games)
  const handleClick = (button) => {
     if (button === "Web Apps") {
      setFilteredProjects(projects)
      setFilteredGames([])
  } else if (button === "Games") {
    setFilteredGames(games)
    setFilteredProjects([])
  } else {
    setFilteredGames(games)
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
        {filteredProjects?.map((project, index) => (
          <div key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="rounded-lg hover:bg-[#ff19f3] transition-colors duration-300">
                <img
                  src={project.image}
                  alt="title"
                  className="rounded-2xl border-2 p-1 hover:bg-[#ff19f3] h-[10rem]"
                />
              </button>
            </a>
          </div>
        ))}
        {filteredGames?.map((game, index) => (
          <div key={index}>
            <a href={game.link} target="_blank" rel="noopener noreferrer">
              <button className="rounded-lg hover:bg-[#ff19f3] transition-colors duration-300">
                <img
                  src={game.image}
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
