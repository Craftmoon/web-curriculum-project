import React, { Component } from "react";
import MenuItem from "../MenuItem";

class Menu extends Component {
  constructor({ sections }) {
    super();
    this.sections = sections;
    this.state = {
      activeMenuItem: { ...sections }
    };
  }

  handleScroll() {
    const curPos = window.scrollY;
    let curSection = null;

    for (var key in this.sections) {
      if (curPos + 1 > this.sections[key]) {
        curSection = key;
      }
    }

    if (this.state.activeMenuItem[curSection] !== "active") {
      const newMenuState = { ...this.props.section };
      newMenuState[curSection] = "active";
      this.setState({ activeMenuItem: newMenuState });
    }
  }

  getAnchorPoints() {
    const curScroll = window.scrollY;
    for (var key in this.sections) {
      this.sections[key] =
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

    if (viewPortHeight > bottom - this.sections.experience) {
      this.sections.experience = bottom - viewPortHeight - 50;
    }
    this.handleScroll();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));

    /* When window resizes, get new scroll-depth positions of anchors */

    window.addEventListener("resize", this.getAnchorPoints.bind(this));

    this.getAnchorPoints();
  }

  render() {
    const menuItems = [];
    for (var key in this.sections) {
      menuItems.push(
        <MenuItem
          itemName={key}
          active={this.state.activeMenuItem[key]}
          key={key}
        />
      );
    }
    return (
      <div className="menu">
        <ul>{menuItems}</ul>
      </div>
    );
  }
}
export default Menu;
