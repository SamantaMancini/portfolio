import { useEffect } from "react";
import Aos from "aos";
import master from "../assets/Attestato Completamento Master.pdf";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="lg:px-56 lg:py-5 py-20 text-center lg:text-start flex lg:flex-row flex-col justify-between items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center overflow-x-hidden">
        <h2
          data-aos="fade-left"
          className="text-[52px] font-semibold mb-8 leading-normal text-cyan-500 uppercase"
        >
          Education
        </h2>
        <h3
          data-aos="fade-left"
          className="text-[30px] font-semibold mb-8 leading-normal text-cyan-500 uppercase"
        >
          Master in Front End Development
        </h3>
        <div className="max-[576px]:whitespace-wrap max-[576px]:px-10">
          <p
            data-aos="fade-left"
            className="max-[576px]:text-sm max-[992px]:px-1 mobile-landscape max-[576px]:leading-6"
          >
            At Start2Impact, I learned coding theory certified by written exams
            and independently built 5 practical projects, all of which were
            reviewed by field experts. This hands-on experience enhanced my
            skills in HTML5&CSS, Javascript, Node.js, React.js, Redux,
            Bootstrap.
          </p>
        </div>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href={master} download>
                <button className="neno-button shadow-xl hover:shadow-cyan-800/50 border-2  hover:text-cyan-500 hover:bg-slate-900 border-cyan-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                  Master Certificate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
