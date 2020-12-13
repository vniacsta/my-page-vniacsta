import React, { Component } from "react";
import Slider from "react-slick";
import "./Projects.css";
import ProjectsInfo from "./ProjectsInfo";
import certificate1 from "./media/codecademy-js.png";
import certificate4 from "./media/codecademy-phaser.png";
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="Projects">
        <h3>Check out my certificates:</h3>
        <Slider {...settings}>
          <div>
            <ProjectsInfo
              image={certificate1}
              linkImage="https://www.codecademy.com/profiles/vniacsta/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
              name="Codecademy Javascript"
              linkProject="https://www.codecademy.com/profiles/vniacsta/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
              />
          </div>
          <div>
            <ProjectsInfo
              image={certificate4}
              linkImage="https://www.codecademy.com/profiles/vniacsta/certificates/5ddbff3dd1bd3b001397ae9f"
              name="Codecademy Phaser.JS"
              linkProject="https://www.codecademy.com/profiles/vniacsta/certificates/5ddbff3dd1bd3b001397ae9f"
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
        </Slider>
      </div>
    );
  }
}
