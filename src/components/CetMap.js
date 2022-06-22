// import React, {useState} from "react";
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer,Marker,Popup, useMap } from 'react-leaflet'
// import osm from "./osm_providers";
// import { useRef } from "react";

// function CetMap () {

//     return (
//         <div>
//            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={[51.505, -0.09]}>
//                 <Popup>
//                 A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//             </Marker>
//             </MapContainer>
            
//         </div>
//     );
// };

// export default CetMap;


import React from "react";
import { Map, MapContainer, TileLayer } from "react-leaflet";

const CetMap = () =>{
  const position = [1.35, 103.8];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={10}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default CetMap;