import React from "react";
import projects from "../Data/Projects.js";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ProjectDetails() {
  const {id}= useParams()
    
  const projectId = parseInt(id);

  const project = projects.find(project => project.id === projectId);
  

  return (
    <>

      <div className="toppad mission" style={{paddingBottom:"80px",padding:"5%"}}>
      {project ? (
        <>
          <h1 className='text-center py-5' >{project.name}</h1>
          <p>{project.description}</p>
          <img src={project.lead}  style={{width:"60%",padding:"20px 0 20px 0"}} className=' mobimg'></img>
          <Button style={{ backgroundColor: "#A8E4F9" }} className="buildCTA">Visit Site</Button>
          <p>{project.description2}</p>

          <h2 className='' style={{padding:"20px 0 20px 0"}}>Built With</h2>
          <p className='py-5 font-bold'>
            {project.framework}
          </p>
          <img src={project.img} className='mobimg'></img>

        </>
      ) : (
        <p>Project not found</p>
      )}
    
  
       
      </div>
    </>
  );
}
