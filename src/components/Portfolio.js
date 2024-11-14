import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* About Card */}
      <div className="card about-card">
        <h3 className="card-label">About</h3>
        <p className="about-text">
          <span className="italic-bold">A student professional working towards attaining a bachelor’s degree in Information Systems Engineering.</span> 
          Enjoys software development and problem solving. A generative AI enthusiast who has completed his first project in this domain. Driven by intellectual curiosity to learn and to develop solutions to everyday challenges. Adaptable and a lifelong learner.
        </p>
      </div>

      {/* Work History Card */}
      <div className="card work-history-card">
        <h3 className="card-label">Work History</h3>
        <div className="job">
          <div className="job-title">
            <strong>Johnson C. Smith University</strong>
            <span className="job-dates">August 2023 - Present</span>
          </div>
          <div className="job-role">Peer Tutor</div>
          <p className="job-summary">
            Delivered 200+ hours of tutoring in Mathematics, Physics, Computer Science, and English writing courses.
          </p>
        </div>
        <div className="job">
          <div className="job-title">
            <strong>Morgan Stanley</strong>
            <span className="job-dates">June 2024 - August 2024</span>
          </div>
          <div className="job-role">Technology Summer Analyst</div>
          <p className="job-summary">
            Defined and tracked weekly sprint goals, ensuring completion of at least 90% of planned tasks. Managed the development of a content amplification web application using Agile methodology. Successfully integrated a generative AI Chat Completion API with backend services automating marketing content creation.
          </p>
        </div>
      </div>

      {/* Professional Skills Card */}
      <div className="card skills-card">
        <h3 className="card-label">Professional Skills</h3>
        <div className="skills-container">
          <div className="skills-category">
            <h4>Core Skills</h4>
            <div className="skill-card">Problem-solving</div>
            <div className="skill-card">Project Management</div>
            <div className="skill-card">Research</div>
            <div className="skill-card">Collaboration</div>
          </div>
          <div className="skills-category">
            <h4>Software</h4>
            <div className="skill-card sky-blue">Wireshark</div>
            <div className="skill-card sky-blue">Packet Tracer</div>
            <div className="skill-card sky-blue">Figma</div>
            <div className="skill-card sky-blue">Vim</div>
            <div className="skill-card sky-blue">Microsoft Visual Studio</div>
            <div className="skill-card sky-blue">PowToon</div>
            <div className="skill-card sky-blue">Microsoft Office</div>
            <div className="skill-card sky-blue">Tableau</div>
            <div className="skill-card sky-blue">XCode</div>
          </div>
          <div className="skills-category">
            <h4>Programming Languages and APIs</h4>
            <div className="skill-card green">Python</div>
            <div className="skill-card green">Java</div>
            <div className="skill-card green">React</div>
            <div className="skill-card green">CSS</div>
            <div className="skill-card green">JavaScript</div>
            <div className="skill-card green">Jinja2</div>
            <div className="skill-card green">Flask</div>
            <div className="skill-card green">MySQL</div>
            <div className="skill-card green">Linux</div>
            <div className="skill-card green">Swift</div>
            <div className="skill-card green">Django</div>
          </div>
        </div>
      </div>

      {/* Certification Card */}
      <div className="card certification-card">
        <h3 className="card-label">Certification</h3>
        <div className="certification-title">
          <strong>CCNA</strong>
          <span className="certification-dates">November 2024</span>
        </div>
        <p className="certification-summary">
          Cisco Routing and Networking Certification
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
