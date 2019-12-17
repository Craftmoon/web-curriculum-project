import React, { Component } from "react";

class MenuItem extends Component {
  constructor(props) {
    super();
    this.anchorTarget = null;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  componentDidMount() {
    this.anchorTarget = document.getElementById(this.props.itemName);
  }

  render() {
    const { itemName, active } = this.props;
    return (
      <li>
        <a
          href={"#" + itemName}
          onClick={this.handleClick}
          aria-label={"Scroll to " + itemName}
          className={active ? "active" : "inactive"}
        >
          {itemName}
        </a>
      </li>
    );
  }
}

export default MenuItem;
