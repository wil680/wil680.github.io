import "./Projects.css";
import { FaGithub, FaCode } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      name: "Coordinate",
      description:
        "A full-stack scheduling web app featuring secure Google login, a responsive calendar interface, and PostgreSQL-backed attendance tracking.",
      technology: "Node.js, React.js, Javascript",
      github: "https://github.com/wil680/coordinate",
    },
    {
      name: "Auction Bid Processing System",
      description:
        "Auction backend with real-time bidding, high-throughput processing, and consistent winner selection.",
      technology: "Go, Gin, Redis",
      github: "https://github.com/wil680",
    },
    {
      name: "Texas Hold’em Game Engine",
      description:
        "Poker engine with modular OOP design, state machine game flow, and optimized hand evaluation using rank lookup tables.",
      technology: "C++",
      github: "https://github.com/wil680/poker-engine",
    },
  ];

  return (
    <div id="projects">
      <div className="subsection">
        <h2 className="subsection-title">Projects</h2>
        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-content">
                <div className="project-heading">
                  <FiLayers size={24}></FiLayers>
                  <a href={project.github} target="_blank">
                    <FaGithub size={20} />
                  </a>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech">{project.technology}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
