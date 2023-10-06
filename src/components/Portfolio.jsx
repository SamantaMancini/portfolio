import { useEffect } from "react";
import Aos from "aos";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      image: "../assets/images/project-2.jpg",
      link: "https://hobbitcounter.netlify.app",
    },
    {
      image: "../assets/images/project-3.jpg",
      link: "https://bookresearch.netlify.app/",
    },
    {
      image: "../assets/images/project-5.png",
      link: "https://borcelleyogastudio.netlify.app/",
    },
    {
      image: "../assets/images/project-6.jpg",
      link: "https://climatechangealert.netlify.app",
    },
  ];

  return (
    <section
      id="/projects"
      className="p-20 flex flex-col items-center justify-center overflow-x-hidden"
    >
      <h2
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-500"
      >
        Projects
      </h2>
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
