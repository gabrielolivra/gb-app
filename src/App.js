import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./router/Home";
import Header from './components/Header';
import About from './router/About';
import Services from './router/Services';
import Portfolio from './router/Portfolio'
import "./styles/reset.css"



function App() {
  return (
    <Router>
      <div >
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
