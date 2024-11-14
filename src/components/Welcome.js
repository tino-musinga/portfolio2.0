
// // import React from 'react';
// // import './Welcome.css'; // Ensure you have a CSS file for styling
// // import ProfPic from './tino.jpg';

// // const Welcome = () => {
// //   return (
// //     <div className="welcome-container">
// //       <img src={ProfPic} alt="Welcome" className="welcome-image" />
// //       <a href="/portfolio" className="portfolio-button">Portfolio</a>
// //     </div>
// //   );
// // };

// // // export default Welcome;


// // import React from 'react';
// // import './Welcome.css'; // Ensure you have a CSS file for styling
// // import ProfPic from './tino.jpg';

// // const Welcome = () => {
// //   return (
// //     <div className="welcome-container">
// //       <h1 className="welcome-name">Tinotenda Musingarimi</h1>
// //       <p className="welcome-title">Full Stack Software Engineering Student</p>
// //       <p className="welcome-degree">BSc Information Systems Engineering / Cyber Security</p>
// //       <img src={ProfPic} alt="Welcome" className="welcome-image" />
// //       <a href="/portfolio" className="portfolio-button">Portfolio</a>
// //     </div>
// //   );
// // };

// // export default Welcome;


// // import React from 'react';
// // import './Welcome.css'; // Ensure you have a CSS file for styling
// // import ProfPic from './tino.jpg';

// // const Welcome = () => {
// //   return (
// //     <div className="welcome-container">
// //       <h1 className="welcome-name">Tinotenda Musingarimi</h1>
// //       <p className="welcome-title">Full Stack Software Engineering Student</p>
// //       <p className="welcome-degree">BSc Information Systems Engineering / Cyber Security</p>
// //       <img src={ProfPic} alt="Welcome" className="welcome-image" />
// //       <div className="button-container">
// //         <a href="/portfolio" className="portfolio-button">Portfolio</a>
// //         <a href="https://github.com/tino-musinga" className="github-button">GitHub</a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Welcome;

// import React from 'react';
// import './Welcome.css'; // Ensure you have a CSS file for styling
// import ProfPic from './tino.jpg';

// const Welcome = () => {
//   return (
//     <div className="welcome-container">
//       <h1 className="welcome-name">Tinotenda Musingarimi</h1>
//       <p className="welcome-title">Full Stack Software Engineering Student</p>
//       <p className="welcome-degree">BSc Information Systems Engineering / Cyber Security</p>
//       <img src={ProfPic} alt="Welcome" className="welcome-image" />
//       <div className="button-container">
//         <a href="/portfolio" className="portfolio-button">Portfolio</a>
        
//         <a 
//           href="https://github.com/tino-musinga" 
//           className="github-button" 
//           target="_blank" 
//           rel="noopener noreferrer"
//         >
//           GitHub
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


import React from 'react';
import './Welcome.css'; // Ensure you have a CSS file for styling
import ProfPic from './tino.jpg';
import NewsCarousel from './NewsCarousel'; // Import the NewsCarousel component

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-name">Tinotenda Musingarimi</h1>
      <p className="welcome-title">Full Stack Software Engineering Student</p>
      <p className="welcome-degree">BSc Information Systems Engineering / Cyber Security</p>
      <img src={ProfPic} alt="Welcome" className="welcome-image" />
      <div className="button-container">
        <a href="/portfolio" className="portfolio-button">Portfolio</a>
        <a 
          href="https://github.com/tino-musinga" 
          className="github-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <NewsCarousel /> {/* Add the NewsCarousel component here */}
    </div>
  );
};

export default Welcome;





