import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <a href="/home">
        {" "}
        <img
          src={require("../images/manelogo.png")}
          alt="mane-logo"
          className="headerLogo"
        />
      </a>

      <div className="headerLinks">
        <a href="/home" className="hearderTxt">
          Home
        </a>
        <a href="/about" className="hearderTxt">
          About
        </a>
        <a href="/projects" className="hearderTxt">
          Projects
        </a>
        <a href="joinus" className="hearderTxt">
          Join Our Team
        </a>
      </div>

      <a href="/message">
        <Button className="buildCTA">Build Your Projects</Button>
      </a>
    </div>
  );
}
