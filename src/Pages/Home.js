import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export default function Home() {
  return (
    <div style={{width:"100%"}}>
      <div className="heroSection">
        <div className="leftCol">
          <div className="pageHeader">
            <h1 style={{color:"#0c3959"}}>Let's Build Together</h1>
          </div>

          <div className="heroProducts">
            <div className="serviceDiv">Product Design</div>
            <div className="serviceDiv">React JS</div>
            <div className="serviceDiv">React Native</div>
            <div className="serviceDiv">Python</div>
            <div className="serviceDiv">Ruby</div>
            <div className="serviceDiv">Java</div>
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

      <div className="section2">
        <div className="sectionDiv">
          <h2 className="subHeadTxt">Projects</h2>
        </div>

        <div className="projects">
          <img src={require("../images/project1.png")} alt="" />
          <img src={require("../images/project2.png")} alt="" />
          <img src={require("../images/project3.png")} alt="" />
        </div>

        <div className="viewDiv">
          <Button className="viewBtn">View more</Button>
        </div>
      </div>

      <div className="section3">
        <div>
          <h2 className="subHeadTxt2">Our Services</h2>
        </div>

        <div className="projects2">
          <div className="services">
            <img src="" alt="" />
            <p className="servicesTxt">Product Consulting</p>
          </div>

          <div className="services">
            <img src="" alt="" />
            <p className="servicesTxt">Web Development</p>
          </div>

          <div className="services">
            <img src="" alt="" />
            <p className="servicesTxt">App Development</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
