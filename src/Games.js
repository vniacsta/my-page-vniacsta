import React from "react";
import "./Games.css";
import joystick from "./media/joystick-pink.svg";

export default function Games() {
  return (
    <div className="Games">
      <a href="https://vniacsta.github.io/my-phaser-games/" target="_blank" rel="noopener noreferrer">
        <img className="joystickIcon" src={joystick} alt="Joystick Icon" />
        <p className="playMessage">
          Wanna play<br/>some oldies?
        </p>
      </a>
    </div>
  );
}