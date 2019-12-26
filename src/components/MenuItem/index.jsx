import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const MenuItem = ({ itemName, active, isDropdownOpen, setIsDropdownOpen }) => {
  let anchorTarget = null;
  const { t } = useTranslation();

  useEffect(() => {
    anchorTarget = document.getElementById(itemName);
  });

  const handleClick = e => {
    e.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="menu-item">
      <a
        href={"#" + itemName}
        onClick={handleClick}
        aria-label={"Scroll to " + itemName}
        className={active === "active" ? "active" : "inactive"}
      >
        {/* {itemName.toUpperCase()} */}
        {t(`${itemName}.menuLabel`)}
      </a>
    </div>
  );
};

export default MenuItem;
