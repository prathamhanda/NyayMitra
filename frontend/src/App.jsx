import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ChatbotPage from './components/ChatbotPage'; // Import the ChatbotPage

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<><Navbar /><LandingPage /></>} />
        <Route path="/dashboard/*" element={<><Navbar /><Dashboard /></>} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
