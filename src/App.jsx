import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import './App.css';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Drawer from './Components/Drawer/Drawer.jsx';

function App() {
  return (
    <Router>
        <div style={{display: 'flex'}}>
        <Drawer/>
        <Routes>
          <Route path="/" element={ <Navigate to="/about" replace/> }/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
