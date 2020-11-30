import React from "react";
import "./Projects.css";
import ProjectsInfo from "./ProjectsInfo";
import certificate1 from "./media/codecademy-js.png";
import certificate2 from "./media/certificate-plus.png";
import certificate3 from "./media/certificate-react.png";

export default function Projects() {
  return (
    <div className="Projects">
      <h3>Check out my certificates:</h3>
      <div className="row">
        <div className="col-sm">
          <ProjectsInfo
            image={certificate1}
            linkImage="https://www.codecademy.com/profiles/vniacsta/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
            name="Codecademy Javascript Certificate"
            linkProject="https://www.codecademy.com/profiles/vniacsta/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
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
            image={certificate3}
            linkImage="https://www.shecodes.io/certificates/85e03c27bd60c5d46e9d288834e0bd8e"
            name="SheCodes React"
            linkProject="https://react-app-project-vniacsta.netlify.app"
            linkGithub="https://github.com/vniacsta/react-app-project"
          />
        </div>
      </div>
    </div>
  );
}
