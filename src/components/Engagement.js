import React from 'react';
import './Engagement.css'; // Ensure you have a CSS file for styling

const Engagement = () => {
  const engagements = [
    {
      title: "Alpha Lambda Delta National Honor Society (President)",
      date: "January 2023 - Present",
      description: "Overseeing the organization, conducting meetings, attending national leadership conferences."
    },
    {
      title: "National Society of Black Engineers (Member)",
      date: "September 2021 - Present",
      description: "Project collaborations. Attending STEM conferences and networking with Engineering Industry professionals."
    },
    {
      title: "Colorstack",
      date: "September 2024 - Present",
      description: "Engaging in mentorship programs, networking events and technical workshops to enhance problem-solving capabilities."
    },
    {
      title: "Game Development Club",
      date: "September 2021 - Present",
      description: "Game development using Epic Games’ Unreal 3D Computer Graphics Engine."
    },
    {
      title: "Johnson C Smith University Debate Team",
      date: "October 2023 - December 2024",
      description: "Participated in the 2022 North Carolina Independent Colleges and Universities Ethics Bowls."
    },
  ];

  return (
    <div className="engagement-container">
      {engagements.map((engagement, index) => (
        <div key={index} className={`engagement-section ${index % 2 === 0 ? 'light-grey' : 'darker-grey'}`}>
          <div className="engagement-header">
            <h3 className="engagement-title">{engagement.title}</h3>
            <span className="engagement-date">{engagement.date}</span>
          </div>
          <p className="engagement-description">{engagement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Engagement;
