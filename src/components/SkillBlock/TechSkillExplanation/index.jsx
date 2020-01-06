import React from "react";
import { FaStar } from "react-icons/fa";

const TechSkillExplanation = ({ isTechSkillInfoOpen, t }) => {
  let techSkillsText = [];

  const techSkillsPath = (level, part) => {
    return `skills.proficiency.${level}.${part}`;
  };

  const returnStars = quantity => {
    let stars = [];
    for (let i = 0; i < quantity; i++) {
      stars.push(
        <span key={`explanationStar${i}`} className="icon has-text-warning">
          <FaStar />
        </span>
      );
    }
    return stars;
  };

  for (let i = 1; i <= 5; i++) {
    techSkillsText.push(
      <div key={`level${i}`} className="explanation-item">
        <div className="title-6">
          {returnStars(i)}
          {t(techSkillsPath(i, "title"))}
        </div>
        <div className="text">{t(techSkillsPath(i, "description"))} </div>
      </div>
    );
  }

  if (isTechSkillInfoOpen)
    return (
      <article className="message tech-explanation-message">
        <div className="message-body tech-explanation">{techSkillsText}</div>
      </article>
    );
  else return null;
};

export default TechSkillExplanation;
