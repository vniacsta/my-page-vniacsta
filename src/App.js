import React from "react";
import avatar from "./media/avatar.jpeg";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Games from "./Games";
import Description from "./Description";
import Projects from "./Projects";
import Certificates from "./Certificates";
import SocialMedia from "./SocialMedia";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="clearfix">
          <img className="my-avatar" src={avatar} alt="Vania Costa" />
          <div className="right">
            <h1 className="name">Vânia Costa</h1>
            <h3>Full-Stack Developer | Marketer</h3>
          </div>
        </header>
        <section>
          <Games />
          <Description />
          <Projects />
          <Certificates />
        </section>
        <footer>
          <SocialMedia />
          <small>
            © 2020 · Made with{" "}
            <span role="img" aria-label="geek">
              💗
            </span> 
            {" "}by VniaCsta,{" "}
            <a
              href="https://github.com/vniacsta/my-page-vniacsta"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
