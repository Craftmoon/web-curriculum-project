import React from "react";
import TimelinePost from "../../components/TimelinePost";

const Education = ({ t }) => {
  return (
    <section className="section">
      <h1 className="title page-title">{t("education.menuLabel")}</h1>
      <h2 className="subtitle">{t("education.subtitle1")}</h2>
      <div className="container">
        <div className="timeline-container">
          <TimelinePost
            timeRange={t("education.college.timeRange")}
            company={t("education.college.institutionName")}
            role={t("education.college.course")}
            location={t("education.college.location")}
            description={t("education.college.description")}
          />
          <div className="timeline-startpoint"></div>
        </div>
      </div>
      <h2 className="subtitle">{t("education.subtitle2")}</h2>
      <div className="container">
        <div className="timeline-container">
          <TimelinePost
            timeRange={t("education.exchangeProgram.timeRange")}
            company={t("education.exchangeProgram.institutionName")}
            role={t("education.exchangeProgram.course")}
            location={t("education.exchangeProgram.location")}
            description={t("education.exchangeProgram.description")}
          />
          <div className="timeline-startpoint"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
