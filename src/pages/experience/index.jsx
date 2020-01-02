import React from "react";
import TimelinePost from "../../components/TimelinePost";

const Experience = ({ t }) => {
  return (
    <section className="section">
      <h1 className="title">{t("experience.menuLabel")}</h1>
      <div className="container">
        <div className="timeline-container">
          <TimelinePost
            timeRange={t("experience.experiences.job1.timeRange")}
            company={t("experience.experiences.job1.company")}
            role={t("experience.experiences.job1.role")}
            location={t("experience.experiences.job1.location")}
            description={t("experience.experiences.job1.description")}
          />
          <TimelinePost
            timeRange={t("experience.experiences.job2.timeRange")}
            company={t("experience.experiences.job2.company")}
            role={t("experience.experiences.job2.role")}
            location={t("experience.experiences.job2.location")}
            description={t("experience.experiences.job2.description")}
          />
          <TimelinePost
            timeRange={t("experience.experiences.job3.timeRange")}
            company={t("experience.experiences.job3.company")}
            role={t("experience.experiences.job3.role")}
            location={t("experience.experiences.job3.location")}
            description={t("experience.experiences.job3.description")}
          />
          <TimelinePost
            timeRange={t("experience.experiences.job4.timeRange")}
            company={t("experience.experiences.job4.company")}
            role={t("experience.experiences.job4.role")}
            location={t("experience.experiences.job4.location")}
            description={t("experience.experiences.job4.description")}
          />
          <div className="timeline-startpoint"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
