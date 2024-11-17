import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import JobListings from './components/JobListings/JobListings';
import Contact from './components/Contact/Contact';
import CompanyShowcase from './components/CompanyShowcase/CompanyShowcase';
import Login from './components/Login/Login';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/companies" element={<CompanyShowcase />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
