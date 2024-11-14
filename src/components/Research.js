import React from 'react';
import './Research.css';

const Research = () => {
  const researchProjects = [
    {
      organization: "Johnson C. Smith University",
      title: "AI/Machine Learning",
      date: "May 2024 - July 2024",
      summary: "Machine Learning Research Intern specializing in earthquake prediction techniques using MATLAB. Developed predictive models leveraging Adaptive Neuro-Fuzzy Inference Systems (ANFIS), Artificial Neural Networks (ANN), and machine learning algorithms to transform seismic data analysis. Demonstrated expertise in data preprocessing, energy transformation methodologies, and comparative model evaluation across complex statistical and deep learning techniques. Successfully implemented advanced computational approaches to predict earthquake energy levels within a 3D grid framework, achieving high-accuracy predictive models with a coefficient of determination of 0.90314. Proficient in MATLAB tools including Regression Learner, ANFIS Designer, and Neural Network Apps for comprehensive data analysis and modeling. Skilled in translating complex geological challenges into innovative machine learning solutions, with a focus on enhancing early warning systems and disaster mitigation strategies."
    },
    {
      organization: "Minority Science and Engineering Improvement",
      title: "Virtual Reality",
      date: "August 2024 - October 2024",
      summary: "Virtual Reality (VR) Research Scholar specializing in educational technology and STEM innovation at Historically Black Colleges and Universities (HBCUs). Collaborated with Dr. Candace Viada to conduct a pioneering case study at Johnson C. Smith University exploring VR's transformative potential in academic environments. Investigated key performance indicators including student engagement, retention, and academic achievement through mixed-methods research methodology. Expertise in analyzing technological interventions in education, with a focus on bridging gaps between abstract concepts and practical application using immersive learning technologies. Skilled in qualitative and quantitative research techniques, survey design, and data collection strategies. Demonstrated ability to examine emerging educational technologies and their impact on student learning outcomes."
    },
    {
      organization: "NASA MINDS",
      title: "Systems Engineering",
      date: "January 2022 - May 2022",
      summary: "Conducted research on drone aerodynamics and wrote a Systems Engineering paper. Provided design recommendations for the construction of a drone capable of operating effectively in low Atmospheric pressures."
    }
  ];

  return (
    <div className="research-container">
      {researchProjects.map((project, index) => (
        <div key={index} className={`research-card ${index % 2 === 0 ? 'light-blue' : 'light-blue-alt'}`}>
          <div className="research-header">
            <span className="research-title">{project.organization} - {project.title}</span>
            <span className="research-date">{project.date}</span>
          </div>
          <p className="research-summary">{project.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Research;
