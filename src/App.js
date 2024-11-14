import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Research from './components/Research';
import Engagement from './components/Engagement'; // Import the Engagement component
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Accomplishments from './components/Accomplishments';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/research" element={<Research />} />
          <Route path="/engagement" element={<Engagement />} /> {/* Add route for Engagement */}
          <Route path="/accomplishments" element={<Accomplishments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
