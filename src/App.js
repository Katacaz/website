import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContentCreation from './components/ContentCreation';
import ReviewBlog from './components/ReviewBlog';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/content" element={<ContentCreation />} />
            <Route path="/blog" element={<ReviewBlog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
