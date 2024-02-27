import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


// document.addEventListener('DOMContentLoaded', function() {
//   const hamburgerMenu = document.querySelector('.hamburger-menu');
  
//   if (hamburgerMenu) {
//       hamburgerMenu.addEventListener('click', function() {
//           console.log("Hamburger menu clicked.");
//           this.classList.toggle('active');
//       });
//   }
// });

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

<div className="hidden block "  style={{position:"absolute", top:"40px", width:"100%",   transition: "transform 0.4s, opacity 0.4s",}}>
{isActive? (
<div className="  mobileheaderLinks" >
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

        <NavLink to="/message" className="block">
        <Button className="buildCTA">Build Your Projects</Button>
      </NavLink>
      </div>
      ) :("")}
      </div>



      </div>
 
     
  );
}
