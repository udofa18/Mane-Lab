import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";

export default function JoinUs() {
  return (
    <>
      <div className="aboutHero">
        <h1>Join Our Team</h1>
        <p className="aboutTxt">
          We are a growing company and we need talents like you.
        </p>
      </div>
      <div className="heroSection">
        <div className="joinDiv ">
          <img
            src={require("../images/joinUs.png")}
            alt=""
            className="joinImg"
          />
        </div>
        <form className="form">
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="formInput"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="formInput"
          />
          <input
            type="skills"
            name="skills"
            id="skills"
            placeholder="Skills"
            required
            className="formInput"
          />
          <input
            type="experience"
            name="experience"
            id="experience"
            placeholder="Years of Experience"
            required
            className="formInput"
          />
          <textarea
            type="coverLetter"
            name="coverLetter"
            placeholder="Cover Letter"
            id="coverLetter"
            required
            className="formInput"
          />

          <Button className="formBtn">Submit</Button>
        </form>
      </div>
    </>
  );
}
