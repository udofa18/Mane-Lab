import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left-footer">
        <div>
          <img
            src={require("../images/manelogo.png")}
            alt="mane-logo"
            className="headerLogo"
          />
        </div>
        <div>
          <p className="leftFooterTxt">
            We are a SAAS company out to meet various needs for individuals and
            firms. Our offering range from product and identity design to web
            and mobile app development, hosting and related services.
          </p>
        </div>
      </div>
      <div className="right-footer">
        <p className="rightFooterTxt">Let's work together.</p>
        <p className="rightFooterTxt">
          Shoot us an{" "}
          <a href="" className="rightFooterLink">
            email
          </a>{" "}
          and we will respond as soon as possible.
        </p>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faTwitter} className="footerIcons" />
          <FontAwesomeIcon icon={faLinkedin} className="footerIcons" />
        </div>
      </div>
    </div>
  );
}
