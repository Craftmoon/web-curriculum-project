import React from "react";

const TimelinePost = ({ timeRange, company, role, location, description }) => {
  return (
    <div className="experience-item">
      <div className="dot"></div>
      <div className="columns timeline-post">
        <div className="column is-one-quarter">
          <div className="time-range">{timeRange}</div>
          <div className="company-name">{company}</div>
          <div className="role">{role}</div>
          <div className="location">{location}</div>
        </div>
        <div className="column description">{description}</div>
      </div>
    </div>
  );
};

export default TimelinePost;
