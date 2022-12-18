import React, { useState } from "react";
import { Link } from "react-router-dom";
import cse0 from "../assets/images/CSE0.png";
import cse1 from "../assets/images/CSE1.png";
import cse2 from "../assets/images/CSE2.png";
import "../styles/Cse.css";
import { Slider } from "@mui/material";

function Cse() {
  const [floorImg, setFloorImage] = useState(0);

  const floorData = [cse0, cse1, cse2];

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
      <div className="cse-main">
        <div className="cse-left text-center">
          <Link to="/CSE" className="left-nav-links left-active-link">
            CSE
          </Link>
          <Link to="/MCA" className="left-nav-links">
            MCA
          </Link>
          <Link to="/CIVIL" className="left-nav-links ">
            CIVIL
          </Link>
          <Link to="/" className="left-nav-links">
            EEE
          </Link>
        </div>
        <div className="cse-mid">
          <img src={floorData[floorImg]} />
        </div>
        <div className="cse-right">
          <Slider
            aria-label="Custom marks"
            defaultValue={0}
            step={50}
            orientation="vertical"
            valueLabelDisplay="off"
            marks={marks}
            onChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  );
}
export default Cse;
