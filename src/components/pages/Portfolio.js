import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import Professional_Po from  "../../imagesA/Professional_Portfolio.PNG";
import Card from "./Card";
import Professional_Portfolio from  "../../imagesA/Professional_Portfolio.PNG";
import Code_Refactor from "../../imagesA/Code_Refactor.PNG";
import Password_Generator from "../../imagesA/Password_Generator.PNG";
import Weather from "../../imagesA/Weather.PNG";
import Professional_README_Generator from "../../imagesA/Professional_README_Generator.PNG";
import Regex_HEX_Tutorial from "../../imagesA/Regex_HEX_Tutorial.PNG";

function Portfolio() {
  return (
        // Portfolio container
    <div className="wrapper">
      <h2 className="title">Portfolio</h2>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Professional Portfolio",
              description: "Advanced CSS Challenge: Professional Portfolio",
              imgSrc: Professional_Portfolio,
              deployedLink:
                "https://github.com/HungQuocDang/Assigment-02",
              githubLink:
                "https://hungquocdang.github.io/Assigment-02/",
            },
            {
              title: "Code Refactor",
              description: "HTML CSS Git Challenge: Code Refactor",
              imgSrc: Code_Refactor,
              deployedLink:
                "https://hungquocdang.github.io/Assigment-01/",
              githubLink:
                "https://github.com/HungQuocDang/Assigment-01",
            },
            {
              title: "Password Generator",
              description: "JavaScript Challenge: Password Generator",
              imgSrc: Password_Generator,
              deployedLink:
                "https://hungquocdang.github.io/Assignment-03B/",
              githubLink:
                "https://github.com/HungQuocDang/Assignment-03B",
            },
            {
              title: "Weather Dashboard",
              description: "Server-Side APIs Challenge: Weather Dashboard",
              imgSrc: Weather,
              deployedLink:
                "https://hungquocdang.github.io/WeatherForecast/",
              githubLink:
                "https://github.com/HungQuocDang/WeatherForecast",
            },
            {
              title: "Regex Tutorial",
              description: "Computer Science for JavaScript Challenge: Regex Tutorial",
              imgSrc: Regex_HEX_Tutorial,
              deployedLink:
                " https://hungquocdang.github.io/Matching-Hex-Regex-Aug30/",
              githubLink:
                "https://gist.github.com/HungQuocDang/45a182cac3bf92b2b4501193c52aacda",
            },
            {
              title: "Professional README Generator",
              description: "Node.js Challenge: Professional README Generator",
              imgSrc:Professional_README_Generator,
              deployedLink:
                "https://hungquocdang.github.io/readme-generator/",
              githubLink:
                "https://github.com/HungQuocDang/readme-generator",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Card
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;

