import React from "react";
import Menu from "./components/Menu";

function App() {
  const sections = {
    profile: null,
    intro: null,
    experience: null,
    education: null,
    skills: null
  };

  return (
    <div className="app">
      <Menu sections={sections} />
      <div className="page-content">
        <div id="profile" className="block">
          PROFILE
        </div>
        <div id="intro" className="block">
          INTRO
        </div>
        <div id="experience" className="block">
          EXPERIENCE
        </div>
        <div id="education" className="block">
          EDUCATION
        </div>
        <div id="skills" className="block">
          SKILLS
        </div>
      </div>
    </div>
  );
}

export default App;
