import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login  from  "./pages/Login";
import Event from "./pages/Event";
import Navigationbar from "./components/Navbar";
import {  BrowserRouter as Router,  Routes ,Route, useNavigate } from "react-router-dom"
import DeptMap from "./components/Department";
import Mca from "./pages/Mca";
import Cse from "./pages/Cse";
import Mech from "./pages/Mech";
import Mech2 from "./pages/Mech2";
import Civil from "./pages/Civil";
import Civil2 from "./pages/Civil2";
import Eee from "./pages/Eee";
import Ec from "./pages/Ec";
import Profile from "./pages/Profile";
import Arch from "./pages/arch";
import About from "./pages/About";
import Ec2 from "./pages/Ec2";
import Addevent from "./pages/addevent";
import ShowEvent from "./pages/ShowEvent";
// import Location from "./pages/Location";
import Org from "./pages/Org";
import { ImportExport } from "@mui/icons-material";
// import Navigation from "./pages/Navigation";

function App() {
  const[nav,setNav]=useState(true);
  // const [login, setLogin] = React.useState(false);
  // const navigate = useNavigate();
  return (
    <div className="App">
      
      <Router>
        <Navigationbar nav={nav} setNav={setNav}/>
       < Routes >
          <Route path="/" element={<Home nav={nav} />} />
          <Route path="/MCA" element={<Mca/>} />
          <Route path="/CSE" element={<Cse/>} />
          <Route path="/CIVIL2" element={<Civil2/>} />
          <Route path="/MAIN2" element={<Mech2/>} />
          {/* <Route path="/Navi" element={<Navigation />} /> */}
          <Route path="/CIVIL" element={<Civil/>} />
          <Route path="/EC" element={<Ec/>} />
          <Route path="/MAIN" element={<Mech/>} />
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/login" element={<Login/>}> */}
            {/* {login ? useNavigate("/profile")  : <LoginPage setLogin={setLogin} />} */}
          {/* </Route> */}
          <Route path="/event" element={<Event/>} />
          <Route path="/dept" element={<DeptMap nav={nav} />} />
          <Route path="/EEE" element={<Eee/>} />
          <Route path="/EC2" element={<Ec2/>} />
          <Route path="/Arch" element={<Arch/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Addevent" element={<Addevent/>} />
          <Route path="/ShowEvent" element={<ShowEvent/>} />
          <Route path="/Org" element={<Org/>} />
          <Route path="/Location" element={<Location/>} />
        </ Routes  > 
          

      </Router>
    </div>
  );
}

export default App;
