import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SkillBlock = ({ level, skillName, children }) => {
  const { t } = useTranslation();

  let proficiencyLevel = [];

  const returnStar = (filledStar, number) => {
    return (
      <span className="icon has-text-warning" key={`star${number}`}>
        {filledStar ? <FaStar /> : <FaRegStar />}
      </span>
    );
  };

  for (let i = 1; i <= 5; i++) {
    proficiencyLevel.push(returnStar(level >= i, i));
  }

  const tooltipPath = `skills.proficiency.${level}.title`;

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <span className="icon is-large has-text-warning ">
                {children}
              </span>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-5 is-capitalized">{skillName}</p>
            <div
              className="proficiency-level has-tooltip-info"
              data-tooltip={t(tooltipPath)}
            >
              {proficiencyLevel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBlock;
