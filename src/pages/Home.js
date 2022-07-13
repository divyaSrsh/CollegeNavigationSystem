import React from "react";
import "leaflet/dist/leaflet.css";
import CetMap from "../components/CetMap";

import {Nav,Button,Form} from "react-bootstrap";

function Home() {
  return (
    <div className="map-container">
      <div className="map"> 
      <CetMap />
        </div>
      <div className="search-bar">
      <Nav >
        <Form >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Nav>
      </div>
      
      
    </div>
  );
}

export default Home;
