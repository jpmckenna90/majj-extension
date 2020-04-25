import React from "react";
import { Button } from "react-bootstrap";
import whiteaxe from "../../img/whiteaxe.png";
import userprofilewhitesmall from "../../img/userprofilewhitesmall.png";
import "./DigButton.css";

function DigButton() {
  let urls = [
    "https://www.google.com",
    "https://www.reddit.com",
    "https://www.apple.com",
    "https://www.netflix.com",
  ];

  const getPage = () => {
    let current = urls[Math.floor(Math.random() * urls.length)];
    // console.log(current);
    window.open(current, "_blank");
  };
  return (
    <div>
      <Button className="mod-btn">
        <img src={whiteaxe} alt="axe" onClick={getPage}></img>
      </Button>
      <Button className="mod-btn">
        <img src={userprofilewhitesmall} alt="user"></img>
      </Button>
    </div>
  );
}

export default DigButton;
