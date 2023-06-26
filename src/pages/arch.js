import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Arch0 from "../assets/images/arch_b2.png";
import Arch1 from "../assets/images/arch_basement1.png";
import Arch2 from "../assets/images/Arch_ground.png";
import Arch3 from "../assets/images/arch_1.png";
import "../styles/Arch.css";
import { Slider } from "@mui/material";

function Arch() {
  const canvasRef = useRef(null);
  const floorData = [Arch0, Arch1, Arch2, Arch3];
  const [currentImage, setCurrentImage] = useState(Arch0);
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
    <div>
      <div className="Arch-main">
        <div className="Arch-left text-center">
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
        <div className="d-flex justify-content-around w-90">
          <div className="Arch-mid">
            <canvas ref={canvasRef} style={{ height: "calc(100vh - 71px)" }} />
          </div>
          <div className="Arch-right">
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
      </div>
    </div>
  );
}
export default Arch;


