import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Route exact path = "/" component = { Dashboard } />
        <Route path = "/navbar" component = { NavBar } />

      </div>
    </Router>

  );
}

export default App;
