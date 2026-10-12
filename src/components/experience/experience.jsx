import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Tangam Systems",
      link: "https://www.tangamsystems.com/",
      date: "September 2026 -  December 2026",
    },
    {
      role: "Software Developer",
      company: "Port 443",
      link: "https://www.port443.io/",
      date: "January 2026 - April 2026",
    },
  ];

  return (
    <div id="experience">
      <div className="subsection">
        <h2 className="subsection-title">Experience</h2>
        <div className="experience-container">
          <div className="experience-item">
            {experiences.map((experience, index) => (
              <div className="subsection-body" key={index}>
                <div className="experience-row">
                  <div className="bar"></div>
                  <div className="experience-content">
                    <h3 className="role">
                      {experience.role} @{" "}
                      <a href={experience.link} target="_blank">
                        <span className="highlight">{experience.company}</span>
                      </a>
                    </h3>
                    <p className="date">{experience.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
