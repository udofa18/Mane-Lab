import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";

export default function Projects() {
  return (
    <>
      <Header />
      <div className="heroSection">
        <div className="leftCol">
          <div className="pageHeader">
            <h1>Projects</h1>
          </div>
          <p className="aboutTxt">We have created some magic in the past.</p>
        </div>

        <div className="rightCol">
          <img
            src={require("../images/projectHero.png")}
            alt="heroImage"
            className="heroImage"
          />
        </div>
      </div>
      <div className="projectTitle">
        <div className="projectDiv">
          <img
            src={require("../images/project1.png")}
            alt=""
            className="projectImg"
          />
        </div>
        <div className="projectDiv2">
          <h2>Project Title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          {/* <a href="/projectdetails">
            <Button className="buildCTA">View more</Button>
          </a> */}
        </div>
      </div>
      <div className="projectTitle">
        <div className="projectDiv">
          <img
            src={require("../images/project2.png")}
            alt=""
            className="projectImg"
          />
        </div>
        <div className="projectDiv2">
          <h2>Project Title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          {/* <a href="/projectdetails">
            <Button className="buildCTA">View more</Button>
          </a> */}
        </div>
      </div>
      <div className="projectTitle">
        <div className="projectDiv">
          <img
            src={require("../images/project3.png")}
            alt=""
            className="projectImg"
          />
        </div>
        <div className="projectDiv2">
          <h2>Project Title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          {/* <a href="/projectdetails">
            <Button className="buildCTA">View more</Button>
          </a> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
