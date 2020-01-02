import React from "react";
import Menu from "./components/Menu";
import { useTranslation } from "react-i18next";
import Intro from "./pages/intro";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Skills from "./pages/skills";
import About from "./pages/about";

function App() {
  const sections = {
    intro: null,
    about: null,
    experience: null,
    education: null,
    skills: null
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="app">
      <Menu sections={sections} changeLanguage={changeLanguage} />
      <div className="page-content">
        <div id="intro" className="block">
          <Intro t={t} />
        </div>
        <div id="about" className="block">
          <About t={t} />
        </div>
        <div id="experience" className="block">
          <Experience t={t} />
        </div>
        <div id="education" className="block">
          <Education t={t} />
        </div>
        <div id="skills" className="block">
          <Skills t={t} />
        </div>
      </div>
    </div>
  );
}

export default App;
