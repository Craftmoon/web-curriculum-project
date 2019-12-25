import React from "react";

const LanguageMenu = ({ changeLanguage }) => {
  return (
    <div>
      <button
        onClick={() => {
          changeLanguage("en");
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          changeLanguage("pt");
        }}
      >
        PT
      </button>
      <button
        onClick={() => {
          changeLanguage("jp");
        }}
      >
        JP
      </button>
    </div>
  );
};

export default LanguageMenu;
