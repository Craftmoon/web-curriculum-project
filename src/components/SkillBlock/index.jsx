import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import SkillDropdown from "./SkillDropdown";

const SkillBlock = ({ t, level, skillName, children }) => {
  const tooltipPath = `skills.proficiency.${level}.title`;
  // const [isSkillBodyOpen, setIsSkillBodyOpen] = useState(false);
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
      {/* <SkillDropdown
        isSkillBodyOpen={isSkillBodyOpen}
        setIsSkillBodyOpen={setIsSkillBodyOpen}
      /> */}
    </div>
  );
};

export default SkillBlock;
