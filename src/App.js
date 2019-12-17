import React from "react";
import { Container } from "reactstrap";
import "./App.css";
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
    <div className="App">
      <Menu sections={sections} />

      <Container id="profile" fluid={true} className="first-block block">
        Primeiro bloco
      </Container>
      <Container id="intro" fluid={true} className="second-block block">
        Segundo bloco
      </Container>
      <Container id="experience" fluid={true} className="third-block block">
        Terceiro bloco
      </Container>
      <Container id="education" fluid={true} className="fourth-block block">
        Quarto bloco
      </Container>
      <Container id="skills" fluid={true} className="fifth-block block">
        Quinto bloco
      </Container>
    </div>
  );
}

export default App;
