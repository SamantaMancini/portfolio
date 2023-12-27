import cv from "../assets/CV Samanta.pdf";

const About = () => {
  return (
    <section id="/about" className="overflow-x-hidden">
      <div className="lg:px-56 lg:py-5 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between items-center">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center ">
          <h2
            data-aos="fade-left"
            className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-500"
          >
            About me
          </h2>
          <div className="max-[576px]:whitespace-wrap max-[576px]:px-10 max-[992px]:px-10 text-left mobile-landscape">
            <p
              data-aos="fade-left"
              className="max-[576px]:text-sm max-[576px]:leading-6"
            >
              I am a girl with a passion for the creativity and the coding. My
              creativity allows me to find innovative solutions to problems and
              create something from scratch. I am proactive in taking initiative
              and anticipating project needs. My attention to detail and
              precision ensure that my work is always of the highest quality. I
              am able to work independently, but I also appreciate teamwork and
              collaboration with colleagues and stakeholders. I am an attentive
              listener, able to fully understand the needs of customers and team
              members. After my experience in Game Design, I discovered the role
              of UI/UX Design, which fascinated me. I have decided to study the
              Front-End Master at start2impact University with the goal of
              combining my creativity and passion for coding to create
              innovative and visually appealing user experiences. I built 5
              practical projects reviewed by field experts, acquiring vertical
              skills such as HTML, CSS, JavaScript, and React. I finished the
              Master Front end developer and I am also acquiring skills in
              Python and Typescript. I am always looking for new challenges as a
              Front-End developer, eager to create innovative user experiences.
            </p>
          </div>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a href={cv} download>
                  <button className="neno-button shadow-xl hover:shadow-cyan-800/50 border-2  hover:text-cyan-500 hover:bg-slate-900 border-cyan-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
