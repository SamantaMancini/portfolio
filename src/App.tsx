import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import Loading from "./components/Loading.js";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Portfolio.js";
import Webskills from "./pages/Webskills.js";
import Gameskills from "./pages/Gameskills.js";
import Footer from "./components/Footer.js";

const App = () => {
  const { loading, setLoading } = Loading();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    }, [setLoading]);

  return (
    <>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#46c8ef"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="h-screen img-cover">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/web-skills" element={<Webskills />} />
            <Route path="/game-skills" element={<Gameskills />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
