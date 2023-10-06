import { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useThemeContext } from "../src/context/useThemeContext.jsx";
import Loading from "./components/Loading.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  const { loading, setLoading } = Loading();

  // Handler for the switch change event
  const handleSwitch = () => {
    // Change the theme in the context
    setContextTheme((contextTheme) =>
      contextTheme === "Light" ? "Dark" : "Light",
    );
  };

  const themeClasses =
    contextTheme === "Dark"
      ? "bg-slate-900 text-white"
      : "bg-white text-gray-800";

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
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <div className={themeClasses}>
          <Navbar handleSwitch={handleSwitch} contextTheme={contextTheme} />
          <Hero />
          <About />
          <Education />
          <Portfolio />
          <Skills />
          <Contacts />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
