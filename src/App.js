import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';
import Drawer from './Components/Drawer/Drawer.js';

function App() {
  return (
    <Router>
        <div style={{display: 'flex'}}>
        <Drawer/>
        <Switch>
          <Route path="/" exact render={ () => <Redirect to="/about"/> }/>
          <Route path="/about" exact component={About}/>
          <Route path="/projects" exact component={Projects}/>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
