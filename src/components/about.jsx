import Toronto from "../../toronto.png";
import Waterloo from "../../waterloo.jpg";

export default function About() {
  return (
    <div id="about">
      <div className="subsection">
        <h2 className="subsection-title">About me</h2>
        <div className="body-and-picture">
          <div className="subsection-body" id="about-body">
            <p>
              I’m a 1B Computer Engineering student at the{" "}
              <a href="https://uwaterloo.ca/" target="_blank">
                <span className="highlight">University of Waterloo</span>
              </a>{" "}
              with a growing interest in software engineering.
            </p>
            <p>
              I’m currently working in full-stack development and interested in
              machine learning. Outside of work, I enjoy playing poker, binge
              watching Netflix, and playing the piano.
            </p>
          </div>
          <img src={Toronto} className="image" />
        </div>
      </div>
    </div>
  );
}
