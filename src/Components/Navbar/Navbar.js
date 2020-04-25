import React from "react";
import { Navbar } from "react-bootstrap";
import smyellowgem from "../../../src/img/smyellowgem.png";
import "./Navbar.css";
import DigButton from "../DigButton/DigButton";

const MajjNavbar = () => {
  return (
    <>
      <Navbar id="navbar" fixed="top">
        <Navbar.Brand href="#home" id="navbarText">
          <img
            alt=""
            src={smyellowgem}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          MAJJ
        </Navbar.Brand>
        <DigButton id="digButton"/>
      </Navbar>
    </>
  );
};

export default MajjNavbar;
