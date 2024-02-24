import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";

export default function Message() {
  return (
    <>
      <Header />
      <div className="aboutHero">
        <h1 className="messageH1">Let’s help you realize that dream.</h1>
        <p className="aboutTxt">
          Send a message and we’ll reach out to you shortly.{" "}
        </p>
      </div>
      <div className="heroSection">
        <div className="joinDiv">
          <img
            src={require("../images/message.png")}
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
            type="requirement"
            name="requirement"
            id="requirement"
            placeholder="What do you wish to do?"
            required
            className="formInput"
          />

          <textarea
            type="moreDetails"
            name="moreDetails"
            placeholder="More details"
            id="moreDetails"
            required
            className="formInput"
          />

          <Button className="formBtn">Submit</Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
