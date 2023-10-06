import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaMoon, FaSun } from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";


const Navbar = ({ handleSwitch, contextTheme }) => {
  const [click, setClick] = useState(false);
  const handleClick = () =>  setClick(!click);
  const content = <>
  <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-10 text-white">
      <ul className="text-center text-xl p-20 z-10">
          <Link spy={true} smooth={true} to="/home">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="/about">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
          </Link>
          <Link spy={true} smooth={true} to="/projects">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
          </Link>
          <Link spy={true} smooth={true} to="/skills">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Skills</li>
          </Link>
          <Link spy={true} smooth={true} to="/contact">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
          </Link>
      </ul>
  </div>
</>

return (
  <nav className="sticky top-0 z-10">
      <div className="h-10vh flex justify-between z-50 lg:py-5 px-20 py-4 border-b border-slate-800">
          <div className="flex items-center flex-1 gap-5">
              <span className="text-3xl font-bold text-cyan-500">MISAKI</span>
              <button onClick={handleSwitch}>{contextTheme === "Light" ? <FaSun size={20} /> : <FaMoon size={20} />}</button>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
              <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px] z-1">
          <Link spy={true} smooth={true} to="/home">
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-cyan-600 hover:border-cyan-600 cursor-pointer">
                Home</li>
          </Link>
          <Link spy={true} smooth={true} to="/about">
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-cyan-600 hover:border-cyan-600 cursor-pointer">
                About</li>
          </Link>
          <Link spy={true} smooth={true} to="/projects">
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-cyan-600 hover:border-cyan-600 cursor-pointer">
                Projects</li>
          </Link>
          <Link spy={true} smooth={true} to="/skills">
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-cyan-600 hover:border-cyan-600 cursor-pointer">
                Skills</li>
          </Link>
          <Link spy={true} smooth={true} to="/contact">
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-cyan-600 hover:border-cyan-600 cursor-pointer">
                Contact</li>
          </Link>
      </ul>
              </div>
          </div>
          <div>
              {click && content}
          </div>

          <button className="block sm:hidden transition" onClick={handleClick}>
              {click ? <FaTimes size={30} /> : <CiMenuFries size={30} />}
          </button>

      </div>
  </nav>
);
};

export default Navbar;