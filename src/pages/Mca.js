import React, { useState, useRef, useEffect } from "react";
import mca0 from "../assets/images/MCA0.png"
import mca1 from "../assets/images/MCA1.png"
import mca2 from "../assets/images/MCA2.png"
import  {Link} from "react-router-dom"
import "../styles/Mca.css"
import { Slider } from "@mui/material";

function Mca(){
  const canvasRef = useRef(null);
  const floorData = [mca0, mca1, mca2];
  const [currentImage, setCurrentImage] = useState(mca0);
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

  return(
    <div>
      <div className="mca-main">
        <div className='mca-left text-center'>
            <Link to="/CSE" className='left-nav-links'>
            CSE
            </Link>
            <Link to="/MCA" className='left-nav-links left-active-link'>
            MCA
            </Link>
            <Link to="/CIVIL" className='left-nav-links'>
            CIVIL
            </Link>
            <Link to="/EEE" className='left-nav-links'>
            EEE
            </Link>
        </div>
        <div className="d-flex justify-content-around w-100">
          <div className="mca-mid">
            <canvas ref={canvasRef} style={{ height: "calc(100vh - 71px)" }} />
          </div>
          <div className="mca-right">
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
  </div>
  );
}
export default Mca;
