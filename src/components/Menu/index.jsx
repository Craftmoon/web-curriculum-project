import React, { useState, useEffect } from "react";
import MenuItem from "../MenuItem";
import ProfileImage from "../ProfileImage";
import useWindowDimensions from "../../state/hooks/useWindowDimensions";
import { MdMenu } from "react-icons/md";

const Menu = ({ sections }) => {
  const [activeMenuItem, setactiveMenuItem] = useState([{ ...sections }]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = () => {
    const curPos = window.scrollY;
    let curSection = null;

    for (var key in sections) {
      if (curPos + 1 > sections[key]) {
        curSection = key;
      }
    }

    if (activeMenuItem[curSection] !== "active") {
      const newMenuState = { ...sections };
      newMenuState[curSection] = "active";
      setactiveMenuItem({ ...newMenuState });
    }
  };

  const getAnchorPoints = () => {
    const curScroll = window.scrollY;

    for (var key in sections) {
      sections[key] =
        document.getElementById(key).getBoundingClientRect().top + curScroll;
    }

    /* Get the pixel height of the viewport */

    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    /* Get the pixel-depth of the bottom of the page */

    const bottom = document.body.offsetHeight;

    /* If max-scroll is less than the pixel-depth of Section 3, then adjust the pixel-depth of Section 3 to be 50px higher than max scroll depth ... allowing it to be an active destination */

    if (viewPortHeight > bottom - sections.experience) {
      sections.experience = bottom - viewPortHeight - 50;
    }

    handleScroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    /* When window resizes, get new scroll-depth positions of anchors */

    window.addEventListener("resize", getAnchorPoints);

    getAnchorPoints();
  }, []);

  const handleMenuDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { width } = useWindowDimensions();
  const menuIsVertical = width >= 800 ? true : false;
  const menuItems = [];

  /* Build the menu items array */
  for (var key in sections) {
    menuItems.push(
      <MenuItem
        key={key}
        itemName={key}
        active={activeMenuItem[key]}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    );
  }

  return (
    <div
      className={`
      ${menuIsVertical ? "menu-vertical" : "menu-horizontal"} 
      ${isDropdownOpen ? " menu-horizontal-open" : ""}
      `}
    >
      {menuIsVertical ? (
        <React.Fragment>
          <ProfileImage />
          {menuItems}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="header">
            <div className="name-label">Vitor A. Silva</div>
            <MdMenu
              size={30}
              onClick={() => {
                handleMenuDropdown();
              }}
              className="dropdown-menu-button"
            />
          </div>
          {isDropdownOpen ? menuItems : false}
        </React.Fragment>
      )}
    </div>
  );
};
export default Menu;
