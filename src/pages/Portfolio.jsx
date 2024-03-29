import { useEffect, useState } from "react";
import Aos from "aos";
import Screen from "../components/Screen";
import Pagination from "../components/Pagination";
import project1 from "../assets/images/project-2.jpg";
import project2 from "../assets/images/project-3.jpg";
import project3 from "../assets/images/project-5.png";
import project4 from "../assets/images/project-6.jpg";
import project5 from "../assets/images/project-7.png";

const Project = () => {
  useEffect(() => {
    Aos.init({ 
    easing: "ease-out-quart",
    delay: 0,
    duration: 750, });
  }, []);

  let filtered;
  const projects = [
    {
      image: project1,
      link: "https://hobbitcounter.netlify.app",
    },
    {
      image: project2,
      link: "https://bookresearch.netlify.app/",
    },
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

  const [filteredProjects, setFilteredProjects] = useState(projects)
  const handleClick = (button) => {
     if (button === "Javascript") {
      filtered = projects.filter((project) =>{
        return project.link.includes("https://hobbitcounter.netlify.app") || project.link.includes("https://bookresearch.netlify.app/")
      })
      setFilteredProjects(filtered)
    } else if (button === "React") {
      filtered = projects.filter((project) =>{
        return project.link.includes("https://borcelleyogastudio.netlify.app/") || project.link.includes("https://climatechangealert.netlify.app") || project.link.includes("https://to-do-appbyme.netlify.app/")
      })
      setFilteredProjects(filtered)
    } else  {
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
      </div>
      </Screen>
    </section>
  );
};

export default Project;
