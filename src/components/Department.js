import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import location from "../assets/location.png"
import data  from "../assets/cet_main.json"
import {Nav,Button,Form,Col,Row} from "react-bootstrap";



const DeptMap= (props) => {
  // Map state:
  const [mapInstance, setMapInstance] = useState(null);
  const [marker, setMarker] = useState(null);
  const [value,setValue]=useState(null)

  // Map refs:
  const mapRef = useRef(null);
  const tileRef = useRef(null);
  const markerRef = useRef(null);

  // Base tile for the map:
  tileRef.current = L.tileLayer(
    `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  // Options for our map instance:
  const mapParams = {
    center:[8.54715, 76.90679], 
    zoom:  18.5,
    zoomControl: false,
    zoomSnap: 0.75,
    maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
    closePopupOnClick: false,
    layers: [tileRef.current], // Start with just the base layer
  };

  // Map creation:
  useEffect(() => {
    mapRef.current = L.map('map', mapParams);
    // Set map instance to state:
    setMapInstance(mapRef.current);
  }, []);


  const handleClick = (event) => {
    event.preventDefault(); // Prevent default submission
    if (marker) {
      marker.removeFrom(mapInstance);
      markerRef.current = null;
    } else {
        
        var f=0,x,y;
        data.map((building)=>{
          if (value.toLowerCase()=== building['Building name'].toLowerCase())
          {
            // console.log(building['Building name'],building['x'],building['y'])
            x=building['x']
            y=building['y']
            f=1;
          }
        })
        if(f===1){
            // console.log("hello")
            console.log(x,y,value)
            var myIcon = L.icon({
                iconUrl:location,
                iconSize: [50, 50]
            });
            markerRef.current = L.marker([x,y], {icon: myIcon}).addTo(mapInstance);
            mapInstance.setView([x,y], 25);
         }
         else{
            alert("no such building")
         }
    }
    setMarker(markerRef.current);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };



/** 
const SideBar = () => {
  return (
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Metrics
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );


export default Sidebar;*/
  return (
    <div>
      
     <Row>
      <Col md="auto">
      <div className='left-sidebar'>
        <Row>
        <p>CS</p>
        </Row>
        <Row>
        <p>Civil</p>
        </Row>
        <Row>
        <p>Mech</p>
        </Row>
        <Row>
        <p>IE</p>
        </Row>
        
      </div>
     
     </Col>   
     <Col >
     <Nav className="me-auto">
         <Form className="d-flex" >
         <Form.Control
           type="search"
           placeholder="Search"
           className="me-2"
           aria-label="Search"
           onChange={onChange}
         />
         <Button variant="outline-success" onClick={handleClick}>Search</Button>
       </Form>
           
         </Nav>
     <div id="map" ></div>
     </Col>  
    </Row>

 </div>
  );
};

export default DeptMap;
