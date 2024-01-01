import { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import Loading from "./components/Loading.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const { loading, setLoading } = Loading();
  const [showHologram, setShowHologram] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setShowHologram(true)
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
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <div className="h-screen bg-slate-900">
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero setShowHologran={setShowHologram} showHologram={showHologram} />} />
            <Route path="/about" element={<About setShow={setShowHologram} show={showHologram} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
