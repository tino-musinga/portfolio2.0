import React from 'react';
import './Accomplishments.css'; // Ensure you have a CSS file for styling

const Accomplishments = () => {
  return (
    <div className="accomplishments-container">
      {/* Awards and Honors Section */}
      <div className="section awards-section">
        <h2>Awards and Honors</h2>
        <ul>
          <li>Johnson C. Smith University President’s List 21', 22’, 23’</li>
          <li>E4 Carolinas HBCU Energy Leadership Hackathon 1st Prize</li>
        </ul>
      </div>

      {/* Scholarships Section */}
      <div className="section scholarships-section">
        <h2>Scholarships</h2>
        <ul>
          <li>Morgan Stanley Richard B Fischer Scholarship 24’</li>
          <li>Duke Endowment James B Duke Academic Scholarship</li>
        </ul>
      </div>
    </div>
  );
};

export default Accomplishments;
