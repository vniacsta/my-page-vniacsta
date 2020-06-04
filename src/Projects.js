import React from "react";
import "./Projects.css";
import ProjectsInfo from "./ProjectsInfo";
import certificate1 from "./media/certificate-workshop.png";
import certificate2 from "./media/certificate-plus.png";
import veganpower from "./media/veganpower.png";

export default function Projects() {
  return (
    <div className="Projects">
      <h3>Check out my projects so far:</h3>
      <div className="row">
        <div className="col-sm">
          <ProjectsInfo
            image={certificate1}
            linkImage="https://www.shecodes.io/certificates/94cdf9634ba3f7307a9a636f12a0be51"
            name="SheCodes Workshop"
            linkProject="https://www.shecodes.io/workshops/shecodes-29/projects/7224"
            linkGithub="#"
          />
        </div>
        <div className="col-sm">
          <ProjectsInfo
            image={veganpower}
            linkImage="https://veganpower.netlify.app"
            name="Vegan Power"
            linkProject="https://veganpower.netlify.app"
            linkGithub="https://github.com/vniacsta/veganpower-vanilla-website"
          />
        </div>
        <div className="col-sm">
          <ProjectsInfo
            image={certificate2}
            linkImage="https://www.shecodes.io/certificates/40b6e552c908d683be92506fe52494c4"
            name="SheCodes Plus"
            linkProject="https://weather-project-by-vniacsta.netlify.app"
            linkGithub="https://github.com/vniacsta/weather-app-project"
          />
        </div>
        <div className="col-sm">
          <ProjectsInfo
            image=""
            linkImage=""
            name="SheCodes React"
            linkProject="https://react-app-project-vniacsta.netlify.app"
            linkGithub="https://github.com/vniacsta/react-app-project"
          />
        </div>
      </div>
    </div>
  );
}
