import React from "react";
import "./ProjectsInfo.css";

export default function ProjectsInfo(props) {
  return (
    <div className="ProjectsInfo">
      <a href={props.linkImage} target="_blank" rel="noopener noreferrer">
        <img className="img-fluid" src={props.image} alt="Certificate" />
      </a>
      <br />
      <div className="projectName">{props.name}</div>
      <span role="img" aria-label="pointer">
        👉
      </span>{" "}
      <a href={props.linkProject} target="_blank" rel="noopener noreferrer">
        Project
      </a>
      <br />
      <span role="img" aria-label="pointer">
        👉
      </span>{" "}
      <a href={props.linkGithub} target="_blank" rel="noopener noreferrer">
        Available on GitHub
      </a>
    </div>
  );
}
