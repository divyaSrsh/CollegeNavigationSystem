import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import location from "../assets/location.png"
import { addressPoints } from "./addressPoints";

function CetMap() {
  useEffect(() => {
    var map = L.map("map").setView([8.54619, 76.9062001], 18.5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var myIcon = L.icon({
      iconUrl:location,
      iconSize: [20, 20]
  });
  
  L.marker([8.545684428,76.9040217], {icon: myIcon}).addTo(map);
    ///L.marker([8.545684428,76.9040217], {icon:pointing}).addTo(map).bindPopup("Conference_Hall");

    //const points = addressPoints
  //     ? addressPoints.map((p) => {
  //         return [p[0], p[1]];
  //       })
  //     : [];

  //   L.heatLayer(points).addTo(map);
  }, []);

  return (
  <div id="map" style={{ height: "100vh" }}></div>
  );
}

export default CetMap;