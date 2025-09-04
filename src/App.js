import './App.css';
import React from 'react';
import Header from './components/Header/Header.js';
import HomePage from './components/HomePage/HomePage.js';
import Contact from './components/Contact/Contact.js';
import Careers from './components/Careers/Careers.js';
import Services from './components/Services/Services.js';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import PageWrapper from './components/PageWrapper/PageWrapper'; // Import PageWrapper

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<PageWrapper><HomePage /></PageWrapper>} />
              <Route path='/contact' element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path='/about' element={<PageWrapper><AboutUs /></PageWrapper>} />
              <Route path='/careers' element={<PageWrapper><Careers /></PageWrapper>} />
              <Route path='/services' element={<PageWrapper><Services /></PageWrapper>} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
