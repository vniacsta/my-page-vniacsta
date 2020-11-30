import React from "react";
import "./Projects.css";
import ProjectsInfo from "./ProjectsInfo";
import veganpower from "./media/veganpower.png";
import weatherApp from "./media/react-weather.png";
import quizApp from "./media/quiz-app-js.png";
import calcularhoras from "./media/calcularhoras.png";
import aecrru from "./media/aecrru.png";

export default function Projects() {
  return (
    <div className="Projects">
      <h3>Check out my projects so far:</h3>
      <table>
        <tr>
          <td>
            <ProjectsInfo
              image={veganpower}
              linkImage="https://veganpower.netlify.app"
              name="Vegan Power"
              linkProject="https://veganpower.netlify.app"
              linkGithub="https://github.com/vniacsta/veganpower-vanilla-website"
              />
          </td>
          <td>
            <ProjectsInfo
              image={weatherApp}
              linkImage="https://react-app-project-vniacsta.netlify.app/"
              name="Weather App React"
              linkProject="https://react-app-project-vniacsta.netlify.app/"
              linkGithub="https://github.com/vniacsta/react-app-project"
              />
          </td>
          <td>
            <ProjectsInfo
              image={quizApp}
              linkImage="https://quiz-app-javascript-vniacsta.netlify.app/"
              name="Quiz App Javascript"
              linkProject="https://quiz-app-javascript-vniacsta.netlify.app/"
              linkGithub="https://github.com/vniacsta/js-quiz-lordoftherings"
              />
          </td>
        </tr>
        <tr>
          <td>
            <ProjectsInfo
              image={calcularhoras}
              linkImage="https://calcularhoras.pt"
              name="Calcular Horas"
              linkProject="https://calcularhoras.pt"
              linkGithub="https://github.com/vniacsta/calculate-hours"
              />
          </td> 
          <td>
            <ProjectsInfo
              image={aecrru}
              linkImage="https://www.aecrru.pt/"
              name="AECRRU | Construction company website"
              linkProject="https://www.aecrru.pt/"
              linkGithub="https://github.com/vniacsta/js-website-aecrru"
              />
          </td> 
        </tr>
      </table>
    </div>
  );
}
