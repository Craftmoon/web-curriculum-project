import React from "react";

const Button = ({ url, children }) => {
  const modifyChildren = child => {
    const className = "icon-button";

    const props = {
      className
    };

    return React.cloneElement(child, props);
  };

  return (
    <button
      className="button profile-button"
      onClick={() => {
        window.open(url);
      }}
    >
      <span className="icon">
        {React.Children.map(children, child => modifyChildren(child))}
      </span>
    </button>
  );
};

export default Button;
