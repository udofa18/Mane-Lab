import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="header">
      <Link to="/home">
        {" "}
        <img
          src={require("../images/manelogo.png")}
          alt="mane-logo"
          className="headerLogo"
        />
      </Link>

      <div className="headerLinks">
        <Link to="/home" className="hearderTxt">
          Home
        </Link>
        <Link to="/about" className="hearderTxt">
          About
        </Link>
        {/* <Link to="#projects" className="hearderTxt">
          Projects
        </Link> */}
        <Link to="/joinus" className="hearderTxt">
          Join Our Team
        </Link>
      </div>

      <Link to="/message">
        <Button className="buildCTA">Build Your Projects</Button>
      </Link>
    </div>
  );
}
