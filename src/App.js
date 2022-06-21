import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component="Home" />
          </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
