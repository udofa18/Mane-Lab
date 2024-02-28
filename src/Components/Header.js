import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";





export default function Header() {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);

  };
  



  return (
    <div className="header">
      <NavLink to="/home" style={{margin:"auto"}}>
        {" "}
        <img
          src={require("../images/manelogo.png")}
          alt="mane-logo"
          className="headerLogo"

        />
      </NavLink>


      <div className="headerLinks  mobilehidden">
        <NavLink to="/home" className="hearderTxt">
          Home
        </NavLink>
        <NavLink to="/about" className="hearderTxt">
          About
        </NavLink>
        <NavLink to="/projects" className="hearderTxt">
          Projects
        </NavLink>
        <NavLink to="/joinus" className="hearderTxt">
          Join Our Team
        </NavLink>
      </div>

      <NavLink to="/message" className="mobilehidden" style={{margin:"auto"}}>
        <Button className="buildCTA">Build Your Projects</Button>
      </NavLink>
      <div class="hidden block" style={{margin:"auto"}}>
      <div class={`hamburger-menu ${isActive ? "active   " : " "}`} onClick={toggleMenu}>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>

</div>
<div>

</div>

<div className="hidden block "  style={{position:"absolute", top:"50px", width:"100%",   transition: "transform 0.4s, opacity 0.4s",}}>
{isActive? (
<div className="  mobileheaderLinks" style={{height:"50rem"}}>
        <NavLink to="/home" className="hearderTxt" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className="hearderTxt" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/projects" className="hearderTxt" onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink to="/joinus" className="hearderTxt" onClick={toggleMenu}>
          Join Our Team
        </NavLink>

        <NavLink to="/message" className="block" onClick={toggleMenu}>
        <Button className="buildCTA">Build Your Projects</Button>
      </NavLink>
      </div>
      ) :("")}
      </div>



      </div>
 
     
  );
}
