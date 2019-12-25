import React from "react";
import Menu from "./components/Menu";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./components/LanguageMenu";

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
    console.log("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="app">
      <Menu sections={sections} />
      <div className="page-content">
        <LanguageMenu changeLanguage={changeLanguage} />

        <div id="profile" className="block">
          {t("profile.menuLabel")}
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
