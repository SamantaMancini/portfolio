import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 left-0 right-0 transition z-20 bg-slate-900 text-cyan-500">
        <ul className="text-center text-xl p-20 z-10">
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="/">
            Home
          </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="/about">
            About
          </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="/projects">
            Portfolio
          </Link>
          </li>
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer">
          <Link to="/web-skills">
          Web skills
          </Link>
          </li>
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer">
          <Link to="/game-skills">
          Game skills
          </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="/contacts">
            Contacts
          </Link>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="z-10 text-cyan-500 hologram">
      <div className="h-10vh flex justify-between z-50 lg:py-5 px-5 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1 gap-5">
          <Link to="/">
          <span className="text-3xl font-bold text-cyan-500 logo cursor-pointer">MISAKI</span>
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] z-1">
            <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer">
              <Link to="/">Home</Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer">
              <Link to="/about">About</Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer">
              <Link to="/projects">Portfolio</Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer">
              <Link to="/web-skills">Web skills</Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer">
              <Link to="/game-skills">Game skills</Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer">
              <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
          <button className="block lg:hidden transition" onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <CiMenuFries size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
