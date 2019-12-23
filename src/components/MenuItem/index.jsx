import React, { useEffect } from "react";
import { Col } from "reactstrap";

const MenuItem = ({ itemName, active, isDropdownOpen, setIsDropdownOpen }) => {
  let anchorTarget = null;

  useEffect(() => {
    anchorTarget = document.getElementById(itemName);
  });

  const handleClick = e => {
    e.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Col className="menu-item">
      <a
        href={"#" + itemName}
        onClick={handleClick}
        aria-label={"Scroll to " + itemName}
        className={active === "active" ? "active" : "inactive"}
      >
        {itemName.toUpperCase()}
      </a>
    </Col>
  );
};

export default MenuItem;
