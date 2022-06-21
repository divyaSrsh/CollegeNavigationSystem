import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navigationbar from "./components/Navbar";
import {  BrowserRouter as Router,  Routes ,Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigationbar/>
       < Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
        </ Routes  > 
          

      </Router>
    </div>
  );
}

export default App;
