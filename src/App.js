import React from "react";
import "./App.css";
import profilePic from "./images/Darko_a_male_character_pixar_style.png";
import jsIcon from "./images/icons8-javascript-48.png";
import reactIcon from "./images/icons8-react96.png";
import mongoIcon from "./images/icons8-mongodb-48.png";
import nodeIcon from "./images/icons8-nodejs-48.png";
import npmIcon from "./images/icons8-npm-48.png";
import jsonIcon from "./images/icons8-json-48.png";
import nextIcon from "./images/nextjs.png";
import githubIcon from "./images/Github_icon.png";
import linkedinIcon from "./images/linkedinIcon.png";
import instaIcon from "./images/instaIcon.png";
function App() {
  return (
    <div className="App">
      <nav className="navbar sticky">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="HiIMDarko">
        Hi,{" "}
        <img src={profilePic} className="profilePic" alt="darko profile pic" />{" "}
        <br />
        I’m Darko.
      </h1>
      <div className="container">
        <section id="about">
          <h2 className="section-header">About:</h2>
          <p className="section-text">
            i am a Web Developer, Music producer, Studio and label owner, and a
            Basketball veteran from Hamburg, Germany. I learned Web Development
            at NeueFische GmbH by doing a many different projects using modern
            technologies. I live in Hamburg and I am enthusiastic about the AI
            field. I am also a music producer with over a decade of experience
            as well as a veteran professional basketball player .{" "}
          </p>
        </section>
        <section id="projects">
          <h2 className="section-header">Projects:</h2>
          <a
            className="project-header"
            href="https://capstone-projekt-lil-storyteller.vercel.app/"
          >
            Lil Storyteller
          </a>
          <p className="section-text">
            {" "}
            This is an App that allows you to create your own story using AI
          </p>
          <a
            className="project-header"
            href="https://chefsquizquest.vercel.app/"
          >
            Chefs Quiz Quest
          </a>
          <p className="section-text">
            This is an AI powered Quiz. Both projects are open source and hosted
            on github
          </p>
        </section>
        <section id="skills">
          <h2 className="section-header">Skills:</h2>
          <div className="skillImageContainer">
            <img src={jsIcon} className="skillIcon" alt="jsIcon" />
            <img src={reactIcon} className="skillIcon" alt="reactIcon" />
            <img src={mongoIcon} className="skillIcon" alt="mongoIcon" />
            <img src={nodeIcon} className="skillIcon" alt="nodeIcon" />
            <img src={npmIcon} className="skillIcon" alt="npmIcon" />
            <img src={jsonIcon} className="skillIcon" alt="jsonIcon" />
            <img src={nextIcon} className="skillIcon" alt="nextIcon" />
          </div>
        </section>
        <section id="contact">
          <h2 className="section-header">Contact:</h2>
          <div className="contact-links">
            <a
              href="https://github.com/DarkoKrezic"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} className="contactIcon" alt="github" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/darko-krezic/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} className="contactIcon" alt="LinkedIn" />{" "}
            </a>
            <a
              href="https://www.instagram.com/darko_beats_/?hl=de"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instaIcon} className="contactIcon" alt="Instagram" />{" "}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
