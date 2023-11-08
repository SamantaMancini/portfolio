import { useEffect } from "react";
import Aos from "aos";
import project1 from "../assets/images/project-2.jpg";
import project2 from "../assets/images/project-3.jpg";
import project3 from "../assets/images/project-5.png";
import project4 from "../assets/images/project-6.jpg";
import project5 from "../assets/images/project-7.png";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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

  return (
    <section
      id="/projects"
      className="p-20 flex flex-col items-center justify-center overflow-x-hidden"
    >
      <h2
        data-aos="fade-right"
        className="text-[52px] font-semibold leading-normal uppercase text-cyan-500"
      >
        Projects
      </h2>
      <p data-aos="fade-right" className="text-center lg:text-2xl mb-20">
        Click the image for try the project
      </p>
      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5"
        data-aos="fade-left"
      >
        {projects?.map((project, index) => (
          <div key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="rounded-lg hover:bg-cyan-600 transition-colors duration-300">
                <img
                  src={project.image}
                  alt="title"
                  className="rounded-2xl border-2 p-1 border-cyan-600 img_glow"
                />
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
