import React, { Component } from "react";
import Slider from "react-slick";
import "./Projects.css";
import ProjectsInfo from "./ProjectsInfo";
import veganpower from "./media/veganpower.png";
import weatherApp from "./media/react-weather.png";
import quizApp from "./media/quiz-app-js.png";
import calcularhoras from "./media/calcularhoras.png";
import aecrru from "./media/aecrru.png";
import phaserjs from "./media/phaserjs.png";

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
      <div className='Projects'>
        <h3>Check out some of my front-end projects:</h3>
        <Slider {...settings}>
          <div>
            <ProjectsInfo
              image={veganpower}
              linkImage='https://veganpower.netlify.app/'
              name='Vegan Power'
              linkProject='https://veganpower.netlify.app/'
              linkGithub='https://github.com/vniacsta/veganpower-vanilla-website'
            />
          </div>
          <div>
            <ProjectsInfo
              image={phaserjs}
              linkImage='https://vniacsta.github.io/my-phaser-games/'
              name='My PhaserJS games'
              linkProject='https://vniacsta.github.io/my-phaser-games/'
              linkGithub='https://github.com/vniacsta/my-phaser-games'
            />
          </div>
          <div>
            <ProjectsInfo
              image={aecrru}
              linkImage='https://www.aecrru.pt/'
              name='AECRRU | Construction company website'
              linkProject='https://www.aecrru.pt/'
              linkGithub='https://github.com/vniacsta/js-website-aecrru'
            />
          </div>
          <div>
            <ProjectsInfo
              image={weatherApp}
              linkImage='https://react-app-project-vniacsta.netlify.app/'
              name='Weather App React'
              linkProject='https://react-app-project-vniacsta.netlify.app/'
              linkGithub='https://github.com/vniacsta/react-app-project'
            />
          </div>
          <div>
            <ProjectsInfo
              image={quizApp}
              linkImage='https://quiz-app-javascript-vniacsta.netlify.app/'
              name='Quiz App Javascript'
              linkProject='https://quiz-app-javascript-vniacsta.netlify.app/'
              linkGithub='https://github.com/vniacsta/js-quiz-lordoftherings'
            />
          </div>
          <div>
            <ProjectsInfo
              image={calcularhoras}
              linkImage='https://calcular-horas.netlify.app/'
              name='Calcular Horas'
              linkProject='https://calcular-horas.netlify.app/'
              linkGithub='https://github.com/vniacsta/calculate-hours'
            />
          </div>
        </Slider>
      </div>
    );
  }
}
