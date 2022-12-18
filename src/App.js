import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login  from  "./pages/Login";
import Navigationbar from "./components/Navbar";
import {  BrowserRouter as Router,  Routes ,Route } from "react-router-dom"
import DeptMap from "./components/Department";
import Mca from "./pages/Mca";
import Cse from "./pages/Cse";
import Civil from "./pages/Civil";
import Eee from "./pages/Eee";


function App() {
  const[nav,setNav]=useState(true)
  return (
    <div className="App">
      
      <Router>
        <Navigationbar nav={nav} setNav={setNav}/>
       < Routes >
          <Route path="/" element={<Home nav={nav} />} />
          <Route path="/MCA" element={<Mca/>} />
          <Route path="/CSE" element={<Cse/>} />
          <Route path="/CIVIL" element={<Civil/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dept" element={<DeptMap nav={nav} />} />
          <Route path="/EEE" element={<Eee/>} />
        </ Routes  > 
          

      </Router>
    </div>
  );
}

export default App;
