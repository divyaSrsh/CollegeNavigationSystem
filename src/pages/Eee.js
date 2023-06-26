import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Eee1 from "../assets/images/Eee0.png";
import Eee2 from "../assets/images/Eee1.png";
import Eee3 from "../assets/images/Eee2.png";
import Eee0 from "../assets/images/Eeeb.png";
import "../styles/dept.css";
import { Slider } from "@mui/material";

function Eee() {
  const canvasRef = useRef(null);
  const floorData = [Eee0, Eee1, Eee2, Eee3];
  const [currentImage, setCurrentImage] = useState(Eee0);
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
      label: "Basement Floor",
    },
    {
      value: 33,
      label: "Ground Floor",
    },
    {
      value: 66,
      label: "First Floor",
    },
    {
      value: 99,
      label: "Second Floor",
    },
  ];

  const handleImageChange = (e, val) => {
    if (val / 33 !== floorImg){
      setFloorImage(val / 33);
      setCurrentImage(floorData[val / 33]);
    }
  };


  return (
      <div className="dept-main">
        <div className="dept-left text-center">
          <Link to="/CSE" className="left-nav-links ">
            CSE
          </Link>
          <Link to="/MCA" className="left-nav-links">
            MCA
          </Link>
          <Link to="/MAIN" className='left-nav-links'>
            MECH
            </Link>
          <Link to="/CIVIL" className="left-nav-links ">
            CIVIL
          </Link>
          <Link to="/EEE" className="left-nav-links left-active-link">
            EEE
          </Link>
        </div>
        <div className="dept-mid">
          <canvas ref={canvasRef} />
        </div>
        <div className="dept-right">
          <Slider
            aria-label="Custom marks"
            defaultValue={0}
            step={33}
            max={99}
            orientation="vertical"
            valueLabelDisplay="off"
            marks={marks}
            onChange={handleImageChange}
          />
        </div>
      </div>
  );
}
export default Eee;


