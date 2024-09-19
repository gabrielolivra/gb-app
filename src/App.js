import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./router/Home";
import Contact from "./router/Contact";
import Projects from './router/Projects';
import Header from './components/Header';
import "./styles/reset.css"

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/projetos" element={<Projects></Projects>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
