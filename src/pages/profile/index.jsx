import React from "react";
import { Trans } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../../components/Button";

const Profile = ({ t }) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body ">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-three-quarters">
              <div className="profile-title">
                <Trans i18nKey="profile.title">
                  VITOR <span className="surname">SILVA</span>
                </Trans>
              </div>
              <p className="subtitle">
                <span>{t("profile.subtitle")}</span>
              </p>
            </div>
            <div className="column">
              <Button url="https://github.com/Craftmoon">
                <FaGithub className="icon-button" />
              </Button>
              <Button url="https://www.linkedin.com/in/vitor-augusto-silva-8aa2b1135/">
                <FaLinkedin />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot profile-foot">
        <div className="container">
          <div className="columns ">
            <div className="column is-one-third has-text-centered">
              <div className="profile-info-title">{t("profile.location")}</div>
              <div className="profile-info">Anapolis, GO (BR)</div>
            </div>
            <div className="column is-one-third has-text-centered">
              <div className="profile-info-title">{t("profile.email")}</div>
              <div className="profile-info">v.augustosilva@gmail.com</div>
            </div>
            <div className="column is-one-third has-text-centered">
              <div className="profile-info-title">{t("profile.phone")}</div>
              <div className="profile-info">+55 62 982513622</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
