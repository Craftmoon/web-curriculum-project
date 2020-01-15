import React from "react";
import { FaAngleDown } from "react-icons/fa";

const SkillDropdown = ({ isSkillBodyOpen, setIsSkillBodyOpen }) => {
  const dropdownToggle = (
    <div
      className="content dropdown-toggle"
      onClick={() => {
        setIsSkillBodyOpen(!isSkillBodyOpen);
      }}
    >
      <span className="icon is-small ">
        <FaAngleDown className="dropdown-icon" />
      </span>
    </div>
  );

  if (isSkillBodyOpen) {
    return (
      <React.Fragment>
        <div>open</div>
        {dropdownToggle}
      </React.Fragment>
    );
  } else {
    return { ...dropdownToggle };
  }
};

export default SkillDropdown;
