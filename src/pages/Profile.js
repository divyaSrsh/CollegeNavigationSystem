import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../styles/Profile.css";
import ieee from "../assets/images/ieee-logo.jpg";
import { Box } from '@mui/material';
import edit from "../assets/images/edit-icon.png";
import bg from "../assets/images/bg.jpeg";

const Profile = () => {
    const navigate = useNavigate();

    const navigateAbout = () => {
         navigate('/About');
    };
    const navigateAddEvent = () => {
        navigate('/AddEvent');
    };
    // const navigateLoc = () => {
    //     navigate('/Location');
    // };
    const navigateShowEvent = () => {
        navigate('/ShowEvent');
    };
    const navigateOrg = () => {
        navigate('/Org');
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
                        <button onClick={navigateOrg}> IEEE Organisation </button>
                        {/* <button onClick={navigateLoc}> LOCATION </button> */}
                        <button onClick={navigateShowEvent}> EVENTS </button>
                        <button onClick={navigateAddEvent}> ADD EVENT </button>
                        <button onClick={navigateAbout}> ABOUT </button>
                    </div>
                </div>
                <div className="profile-right">
                    <img className="bg-img" src={bg}/>
                </div>
            </Box>
            
        </div>
    )
  };
  
  export default Profile;
