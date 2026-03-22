import styles from "./Projects.module.css";
import ProjectsInfo from "./ProjectsInfo";
import joystick from "./media/joystick-pink.svg";
import weatherApp from "./media/react-weather.png";
import quizApp from "./media/quiz-app-js.png";
import calcularhoras from "./media/calcularhoras.png";
import aecrru from "./media/aecrru.png";
import phaserjs from "./media/phaserjs.png";

const projects = [
  {
    image: phaserjs,
    icon: joystick,
    name: "PhaserJS Games",
    description: "Wanna play some oldies?",
    linkProject: "https://vniacsta.github.io/my-phaser-games/",
    linkGithub: "https://github.com/vniacsta/my-phaser-games",
    featured: true,
  },
  {
    image: aecrru,
    name: "AECRRU",
    description: "Construction company website",
    linkProject: "https://www.aecrru.pt/",
    linkGithub: "https://github.com/vniacsta/js-website-aecrru",
  },
  {
    image: weatherApp,
    name: "Weather App",
    description: "React weather dashboard",
    linkProject: "https://react-app-project-vniacsta.netlify.app/",
    linkGithub: "https://github.com/vniacsta/react-app-project",
  },
  {
    image: quizApp,
    name: "Quiz App",
    description: "Lord of the Rings trivia",
    linkProject: "https://quiz-app-javascript-vniacsta.netlify.app/",
    linkGithub: "https://github.com/vniacsta/js-quiz-lordoftherings",
  },
  {
    image: calcularhoras,
    name: "Calcular Horas",
    description: "Work hours calculator",
    linkProject: "https://calcular-horas.netlify.app/",
    linkGithub: "https://github.com/vniacsta/calculate-hours",
  },
];

export default function Projects() {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Older Projects</h2>
      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectsInfo key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
