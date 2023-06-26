import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ce0 from "../assets/images/CE0.png";
import ce1 from "../assets/images/CE1.png";
import ce2 from "../assets/images/CE2.png";
import "../styles/dept.css";
import { Slider } from "@mui/material";

function Civil() {
  const canvasRef = useRef(null);
  const floorData = [ce0, ce1, ce2];
  const [currentImage, setCurrentImage] = useState(ce0);
  const [floorImg, setFloorImage] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const img = new Image();
    img.src = currentImage;
    context.clearRect(0, 0, canvas.width, canvas.height);
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [currentImage]);
 

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
    if (val / 50 !== floorImg) {
      setFloorImage(val / 50);
      setCurrentImage(floorData[val / 50]);
    }
  };

  return (
      <div className="dept-main">
        <div className="dept-left text-center">
          <Link to="/CSE" className="left-nav-links">
            CSE
          </Link>
          <Link to="/MCA" className="left-nav-links">
            MCA
          </Link>
          <Link to="/MAIN" className='left-nav-links'>
            MECH
            </Link>
          <Link to="/CIVIL" className="left-nav-links left-active-link">
            CIVIL
          </Link>
          <Link to="/EEE" className="left-nav-links">
            EEE
          </Link>
        </div>
        <div className="dept-mid">
          <canvas ref={canvasRef} style={{ height: "calc(100vh - 71px)" }} />
        </div>
        <div className="dept-right">
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
  );
}
export default Civil;
