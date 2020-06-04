import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div className="SocialMedia">
      <a
        href="mailto:vaniarcosta26@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://www.linkedin.com/in/vaniarcosta/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/vniacsta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
