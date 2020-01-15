import React from "react";
import { Trans } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../../components/Button";

const Intro = ({ t }) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body ">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-three-quarters">
              <div className="intro-title">
                <Trans i18nKey="intro.title">
                  VITOR <span className="surname">SILVA</span>
                </Trans>
              </div>
              <p className="subtitle">
                <span>{t("intro.subtitle")}</span>
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
      <div className="hero-foot intro-foot">
        <div className="container">
          <div className="columns ">
            <div className="column is-one-third has-text-centered">
              <div className="intro-info-title">{t("intro.location")}</div>
              <div className="intro-info">Anapolis, GO (BR)</div>
            </div>
            <div className="column is-one-third has-text-centered">
              <div className="intro-info-title">{t("intro.email")}</div>
              <div className="intro-info">v.augustosilva@gmail.com</div>
            </div>
            <div className="column is-one-third has-text-centered">
              <div className="intro-info-title">{t("intro.phone")}</div>
              <div className="intro-info">+55 62 982513622</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
