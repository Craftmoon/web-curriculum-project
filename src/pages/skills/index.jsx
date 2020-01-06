import React, { useState } from "react";
import SkillBlock from "../../components/SkillBlock";
import { DiScrum } from "react-icons/di";
import BulmaLogo from "../../assets/images/logos/bulma-logo.png";
import TsLogo from "../../assets/images/logos/ts-logo.png";
import TechSkillExplanation from "../../components/SkillBlock/TechSkillExplanation";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaAngular,
  FaDatabase,
  FaInfoCircle
} from "react-icons/fa";

const Skills = ({ t }) => {
  const [isTechSkillInfoOpen, setIsTechSkillInfoOpen] = useState(false);

  return (
    <section className="section">
      <div className="title page-title">{t("skills.menuLabel")}</div>
      <h2 className="subtitle">
        {t("skills.subtitle1")}
        <span
          className="icon is-small info-icon has-tooltip-info"
          data-tooltip={t("skills.proficiency.explanation")}
        >
          <FaInfoCircle
            onClick={() => {
              setIsTechSkillInfoOpen(!isTechSkillInfoOpen);
            }}
          />
        </span>
        <TechSkillExplanation isTechSkillInfoOpen={isTechSkillInfoOpen} t={t} />
      </h2>
      <div className="container">
        <div className="skills-container">
          <div className="columns">
            <div className="column">
              <SkillBlock t={t} level={3} skillName="React">
                <FaReact className="skill-icon react" />
              </SkillBlock>
            </div>
            <div className="column">
              <SkillBlock t={t} level={3} skillName="Javascript">
                <FaJs className="js skill-icon" />
              </SkillBlock>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <SkillBlock t={t} level={3} skillName="HTML">
                <FaHtml5 className="html skill-icon" />
              </SkillBlock>
            </div>
            <div className="column">
              <SkillBlock t={t} level={3} skillName="CSS/SCSS">
                <FaCss3Alt className="css skill-icon" />
              </SkillBlock>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <SkillBlock t={t} level={3} skillName="Git">
                <FaGitAlt className="git skill-icon" />
              </SkillBlock>
            </div>
            <div className="column">
              <SkillBlock t={t} level={3} skillName="Bootstrap">
                <FaBootstrap className="bootstrap skill-icon" />
              </SkillBlock>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <SkillBlock t={t} level={3} skillName="Bulma">
                <img src={BulmaLogo} className="bulma skill-icon" />
              </SkillBlock>
            </div>
            <div className="column">
              <SkillBlock t={t} level={3} skillName="Scrum">
                <DiScrum className="scrum skill-icon" />
              </SkillBlock>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <SkillBlock t={t} level={2} skillName="SQL">
                <FaDatabase className="sql skill-icon" />
              </SkillBlock>
            </div>
            <div className="column">
              <SkillBlock t={t} level={2} skillName="Angular">
                <FaAngular className="angular skill-icon" />
              </SkillBlock>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <SkillBlock t={t} level={1} skillName="NodeJS">
                <FaNodeJs className="nodejs skill-icon" />
              </SkillBlock>
            </div>
            <div className="column">
              <SkillBlock t={t} level={1} skillName="Typescript">
                <img src={TsLogo} className="ts skill-icon" />
              </SkillBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
