import React, { useState } from "react";
import { Link } from "react-router-dom";
import ce0 from "../assets/images/CE0.png";
import ce1 from "../assets/images/CE1.png";
import ce2 from "../assets/images/CE0.png";
import "../styles/Civil.css";
import { Slider } from "@mui/material";

function Civil() {
  const [floorImg, setFloorImage] = useState(0);

  const floorData = [ce0, ce1, ce2];

  const marks = [
    {
      value: 0,
      label: "Ground Floor",
    },
    {
      value: 50,
      label: "First Floor",
    },
    {
      value: 100,
      label: "Second Floor",
    },
  ];

  const handleImageChange = (e, val) => {
    if (val / 50 !== floorImg) setFloorImage(val / 50);
  };

  return (
    <div>
      <div className="civil-main">
        <div className="civil-left text-center">
          <Link to="/CSE" className="left-nav-links">
            CSE
          </Link>
          <Link to="/MCA" className="left-nav-links">
            MCA
          </Link>
          <Link to="/CIVIL" className="left-nav-links left-active-link">
            CIVIL
          </Link>
          <Link to="/" className="left-nav-links">
            EEE
          </Link>
        </div>
        <div className="civil-mid">
          <img src={floorData[floorImg]} />
        </div>
        <div className="civil-right">
          <Slider
            aria-label="Custom marks"
            defaultValue={0}
            step={50}
            orientation="vertical"
            valueLabelDisplay="off"
            marks={marks}
            onChange={handleImageChange}
          />
          <h4>Route</h4>
        </div>
      </div>
    </div>
  );
}
export default Civil;
