import React, { Component } from "react";
import Slider from "react-slick";
import "./Projects.css";
import ProjectsInfo from "./ProjectsInfo";
import certificate1 from "./media/codecademy-js.png";
import certificate2 from "./media/certificate-plus.png";
import certificate3 from "./media/certificate-react.png";


export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 3,
      swipeToSlide: true,
    };
    return (
      <div className="Projects">
        <h3>Check out my certificates:</h3>
        <Slider {...settings}>
          <div>
            <ProjectsInfo
              image={certificate1}
              linkImage="https://www.codecademy.com/profiles/vniacsta/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
              name="Codecademy Javascript Certificate"
              linkProject="https://www.codecademy.com/profiles/vniacsta/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
              />
          </div>
          <div>
            <ProjectsInfo
              image={certificate2}
              linkImage="https://www.shecodes.io/certificates/40b6e552c908d683be92506fe52494c4"
              name="SheCodes Plus"
              linkProject="https://weather-project-by-vniacsta.netlify.app"
              linkGithub="https://github.com/vniacsta/weather-app-project"
            />
          </div>
          <div>
            <ProjectsInfo
              image={certificate3}
              linkImage="https://www.shecodes.io/certificates/85e03c27bd60c5d46e9d288834e0bd8e"
              name="SheCodes React"
              linkProject="https://react-app-project-vniacsta.netlify.app"
              linkGithub="https://github.com/vniacsta/react-app-project"
            />
          </div>
          <div>
            
          </div>
        </Slider>
      </div>
    );
  }
}
