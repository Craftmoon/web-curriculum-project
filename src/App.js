import React from "react";
import Menu from "./components/Menu";
import { useTranslation } from "react-i18next";
import Profile from "./pages/profile";

function App() {
  const sections = {
    profile: null,
    intro: null,
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
        <div id="profile" className="block">
          <Profile t={t} />
        </div>
        <div id="intro" className="block">
          {t("intro.menuLabel")}
        </div>
        <div id="experience" className="block">
          {t("experience.menuLabel")}
        </div>
        <div id="education" className="block">
          {t("education.menuLabel")}
        </div>
        <div id="skills" className="block">
          {t("skills.menuLabel")}
        </div>
      </div>
    </div>
  );
}

export default App;
