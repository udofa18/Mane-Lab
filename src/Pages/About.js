import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";

export default function About() {
  return (
    <div className="">
      <Header />

      <div className="aboutHero">
        <h1>About Måne Labs</h1>

        <p className="aboutTxt">
          We are a technoogy company with distributed teams, with the aim of
          utilising product knowledge, marketing, engineering, and other
          software tools to proffer solutions in form of services to individuals
          and businesses. Our business goals are centered around the passion to
          serve individuals and businesses. We help them achieve their
          technological goals while building products that change the world.
        </p>
      </div>

      <img
        src={require("../images/aboutHero.png")}
        alt="heroImage"
        className="aboutImage"
      />

      <div className="mission">
        <h2>Our Mission</h2>
        <p className="aboutTxt">
          To become the leading agency catering to the technological needs of
          individuals and corporations globally.
        </p>
      </div>

      <div className="team">
        <h2 className="subHeadTxt">Our Team</h2>

        <div className="projects2">
          <div className="teamMember">
            <img src="" alt="" />
          </div>

          <div className="teamMember">
            <img src="" alt="" />
          </div>

          <div className="teamMember">
            <img src="" alt="" />
          </div>

          <div className="teamMember">
            <img src="" alt="" />
          </div>

          <div className="teamMember">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="mission">
        <h2 className="subHeadTxt2">Our Partners</h2>
        <p className="partnersTxt">Become a Partner</p>
      </div>

      <div className="team">
        <h2 className="subHeadTxt"> Let's get to work</h2>
        <a href="/message" className="aboutCTA">
          <Button className="buildCTA">Build Your Projects</Button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
