import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login  from  "./pages/Login";
import Navigationbar from "./components/Navbar";
import {  BrowserRouter as Router,  Routes ,Route } from "react-router-dom"
import DeptMap from "./components/Department";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigationbar/>
       < Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dept" element={<DeptMap/>} />
        </ Routes  > 
          

      </Router>
    </div>
  );
}

export default App;
