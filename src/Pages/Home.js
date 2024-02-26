import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { HashLink as Link } from "react-router-hash-link";
// import {fa-folder} from "@fontawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="heroSection">
        <div className="leftCol">
          <div className="pageHeader">
            <h1>Let's Build Together</h1>
          </div>

          <div className="heroProducts">
            <div className="serviceDiv">Product Design</div>
            <div className="serviceDiv">React JS</div>
            <div className="serviceDiv">React Native</div>
            <div className="serviceDiv">Python</div>
            <div className="serviceDiv">Ruby</div>
            <div className="serviceDiv">Java</div>
            <div className="serviceDiv">Webflow</div>
          </div>
        </div>

        <div className="rightCol">
          <img
            src={require("../images/homeHero.png")}
            alt="heroImage"
            className="heroImage"
          />
        </div>
      </div>

      <div id="projects" className="section2">
        <div className="sectionDiv">
          <h2 className="subHeadTxt">Projects</h2>
        </div>

        <div className="projects">
          <img src={require("../images/project1.png")} alt="" />
          <img src={require("../images/project2.png")} alt="" />
          <img src={require("../images/project3.png")} alt="" />
        </div>

        <div className="viewDiv">
          <Link to="/projects">
            <Button className="viewBtn">View more</Button>
          </Link>
        </div>
      </div>

      <div className="section3">
        <div>
          <h2 className="subHeadTxt2">Our Services</h2>
        </div>

        <div className="projects2">
          <div className="services">
            <FontAwesomeIcon
              icon="fa-regular fa-folder"
              className="serviceIcons"
            />

            <p className="servicesTxt">Product Consulting</p>
          </div>

          <div className="services">
            <FontAwesomeIcon
              icon="fa-solid fa-display"
              className="serviceIcons"
            />
            <p className="servicesTxt">Web Services</p>
          </div>

          <div className="services">
            <FontAwesomeIcon
              icon="fa-solid fa-mobile-screen-button"
              className="serviceIcons"
            />
            <p className="servicesTxt">App Development</p>
          </div>

          <div className="services">
            <FontAwesomeIcon
              icon="fa-solid fa-pen-nib"
              className="serviceIcons"
            />
            <p className="servicesTxt">UI/UX Design</p>
          </div>

          <div className="services">
            <FontAwesomeIcon
              icon="fa-solid fa-database"
              className="serviceIcons"
            />

            <p className="servicesTxt">CMS Solutions</p>
          </div>

          <div className="services">
            <FontAwesomeIcon icon="fa-solid fa-code" className="serviceIcons" />
            <p className="servicesTxt">No-code Development</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
