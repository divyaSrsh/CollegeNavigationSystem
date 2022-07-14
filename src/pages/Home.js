import React from "react";
import "leaflet/dist/leaflet.css";
import CetMap from "../components/CetMap";

import {Nav,Button,Form} from "react-bootstrap";

function Home() {
  return (
    <div >
      <div className="map"> 
      <CetMap />
        </div>
     
      
      
    </div>
  );
}

export default Home;
