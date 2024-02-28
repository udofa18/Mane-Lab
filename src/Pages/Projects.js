import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import project from "../Data/Projects.js";

export default function Projects() {

  
  return (
    <>
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

 <div className="">    
 <div className="" style={{width:"100%"}}>
        {project.map((project) => (
          <div key={project.id} className=" projectTitle flex p-5 gap-5 ">
            <img src={project.img} width={300} className="projectDiv sm:w-40 sm:h-36"></img>
            <span className="projectDiv2 justify-between">
              <h2 className="text-2xl">{project.name}</h2>
              <p>{project.description.split(' ').slice(0, 20).join(' ')}...</p>
              <NavLink to={`/projectdetails/${project.id}`}>
              <Button style={{ backgroundColor: "#A8E4F9" }} className="buildCTA">View More</Button>
            </NavLink></span>
          </div>
        ))}
      </div> 

      </div>
    </>
  );
}
