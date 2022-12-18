import React from "react";
import "leaflet/dist/leaflet.css";
import CetMap from "../components/CetMap";

import {Nav,Button,Form} from "react-bootstrap";

function Home({nav}) {
  return (
    <div >
      <div className="map"> 
      <CetMap nav={nav} />
        </div>
     
      
      
    </div>
  );
}

export default Home;
