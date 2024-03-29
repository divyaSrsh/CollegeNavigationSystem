import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ce0 from "../assets/images/ce2_0.png";
import ce1 from "../assets/images/ce2_1.png";
import "../styles/dept.css";
import { Slider } from "@mui/material";

function Civil2() {
  const canvasRef = useRef(null);
  const floorData = [ce0, ce1];
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
      value: 100,
      label: "First Floor",
    },
  ];

  const handleImageChange = (e, val) => {
    if (val / 100 !== floorImg) {
      setFloorImage(val / 100);
      setCurrentImage(floorData[val / 100]);
    }
  };

  return (
      <div className="dept-main">
        <div className="dept-left text-center">
            <Link to="/CSE" className='left-nav-links'>
            CSE
            </Link>
            <Link to="/MCA" className='left-nav-links '>
            MCA
            </Link>
            <Link to="/CIVIL" className='left-nav-links'>
            CIVIL
            </Link>
            <Link to="/CIVIL2" className='left-nav-links'>
            CIVIL-II
            </Link>
            <Link to="/Arch" className='left-nav-links'>
            ARCHIE
            </Link>
            <Link to="/MAIN" className='left-nav-links'>
            MECH
            </Link>
            <Link to="/MAIN2" className='left-nav-links'>
            MECH-II
            </Link>
            <Link to="/EEE" className='left-nav-links'>
            EEE
            </Link>
            <Link to="/EC" className="left-nav-links">
            EC
            </Link>
            <Link to="/EC2" className='left-nav-links'>
            EC-II
            </Link>
        </div>
          <div className="dept-mid">
            <canvas ref={canvasRef}/>
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
          <div className="dept-path">

          </div>
      </div>
  );
}
export default Civil2;
