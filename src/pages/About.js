import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../styles/About.css";
import ieee from "../assets/images/ieee-logo.jpg";
import { Box } from '@mui/material';
import edit from "../assets/images/edit-icon.png";
import MenuIcon from '@material-ui/icons/Menu';
const About = () => {
    const navigate = useNavigate();

    const navigateAbout = () => {
         navigate('/About');
    };
    const navigateAddEvent = () => {
        navigate('/AddEvent');
    };
    return (
        <div className="about-main">
            <Box className="about-box-main">
                <div className="about-left">
                    <div className="left-name">
                        <img className="logo-img" src={ieee}/>
                        <img className="edit-img" src={edit}/>
                    </div>
                    <div className="left-buttons">
                        <button> IEEE Organisation </button>
                        <button> LOCATION </button>
                        <button> EVENTS </button>
                        <button onClick={navigateAddEvent}> ADD EVENT </button>
                        <button onClick={navigateAbout}> ABOUT </button>
                    </div>
                </div>
                <div className="about-right">
                    <div className='about-name'>
                        <h3>Execoms</h3>
                        <MenuIcon />
                        <ul>
                            <li>Chairperson : Amrita A Nair</li>
                            <li>Vice Chairperson : Rohan Damodar S</li>
                            <li>Secretary : Ankita S Naik</li>
                            <li>Joint Secretary : Devi Binoy</li>
                            <li>Treasurer : Anirudh U</li>
                        </ul>
                    </div>
                    <div className='about-links'>
                     
                    </div> 
                    
                </div>
            </Box>
            
        </div>
    )
  };
  
  export default About;
