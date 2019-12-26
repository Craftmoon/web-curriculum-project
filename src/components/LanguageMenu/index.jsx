import React from "react";
import brasilFlag from "../../assets/images/country-flags/brazil.svg";
import japanFlag from "../../assets/images/country-flags/japan.svg";
import unitedStatesFlag from "../../assets/images/country-flags/united-states.svg";

const LanguageMenu = ({ changeLanguage, menuIsVertical }) => {
  return (
    <div
      className={`language-menu ${
        menuIsVertical ? "" : "language-menu-padded"
      }`}
    >
      <img
        src={unitedStatesFlag}
        alt="united states flag"
        onClick={() => {
          changeLanguage("en");
        }}
      />
      <img
        src={brasilFlag}
        alt="brazil flag"
        onClick={() => {
          changeLanguage("pt");
        }}
      />
      <img
        src={japanFlag}
        alt="japan flag"
        onClick={() => {
          changeLanguage("jp");
        }}
      />
    </div>
  );
};

export default LanguageMenu;
