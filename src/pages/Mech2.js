import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import a0 from "../assets/images/me2_0.png";
import a1 from "../assets/images/me2_1.png";
import a2 from "../assets/images/me2_2.png";
import {Nav,Button,Form} from "react-bootstrap";
import "../styles/Mech2.css";
import { Slider } from "@mui/material";

function Mech2() {
  const canvasRef = useRef(null);
  const floorData = [a0, a1, a2];
  const [currentImage, setCurrentImage] = useState(a0);
  const [floorImg, setFloorImage] = useState(0);
  const [locationImg,setLocationImg]=useState(0);

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
      // context.lineWidth = 20; 
      // context.strokeStyle = "red";
      // context.beginPath()
      // context.moveTo(950,700)
      // context.lineTo(2125,700)
      // context.lineTo(2125,900)
      // context.stroke()
      // context.closePath()
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
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default submission
    if (locationImg) {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="Mech2-main">
      {/* <div  className='search-btn '>
        <Nav className="me-auto">
          <Form className="d-flex" >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={onChange}
          />
          <Button className='search-side-btn'  variant="outline-success" onClick={handleClick} >Search</Button>
        </Form>
           
        </Nav>
      </div> */}
        <div className="Mech2-left text-center">
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
        <div className="d-flex justify-content-around w-100">
          <div className="Mech2-mid">
            <canvas ref={canvasRef} style={{ height: "calc(100vh - 71px)" }} />
          </div>
          <div className="Mech2-right">
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
export default Mech2;
