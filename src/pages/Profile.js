import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../styles/Profile.css";
import ieee from "../assets/images/ieee-logo.jpg";
import { Box } from '@mui/material';
import edit from "../assets/images/edit-icon.png";
import ieeebg from "../assets/images/ieee-bg3.jpg";


const Profile = () => {
    const navigate = useNavigate();

    const navigateAbout = () => {
         navigate('/About');
    };
    const navigateAddEvent = () => {
        navigate('/AddEvent');
    };
    return (
        <div className="profile-main">
            <Box className="profile-box-main">
                <div className="profile-left">
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
                <div className="profile-right">
                    
                </div>
            </Box>
            
        </div>
    )
  };
  
  export default Profile;
