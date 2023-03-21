import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../styles/About.css";
import ieee from "../assets/images/ieee-logo.jpg";
import { Box } from '@mui/material';
import edit from "../assets/images/edit-icon.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';

const About = () => {
    const navigate = useNavigate();

    const navigateAbout = () => {
         navigate('/About');
    };
    const navigateAddEvent = () => {
        navigate('/AddEvent');
    };
    const navigateLoc = () => {
        navigate('/Location');
    };
    const navigateShowEvent = () => {
        navigate('/ShowEvent');
    };
    const navigateOrg = () => {
        navigate('/Org');
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
                        <button onClick={navigateOrg}> IEEE Organisation </button>
                        <button onClick={navigateLoc}> LOCATION </button>
                        <button onClick={navigateShowEvent}> EVENTS </button>
                        <button onClick={navigateAddEvent}> ADD EVENT </button>
                        <button onClick={navigateAbout}> ABOUT </button>
                    </div>
                </div>
                <div className="about-right">
                    <div className='about-right-up'>
                        <div className='about-name'>
                            <h3>Execoms</h3>
                            <ul>
                                <li>Chairperson : Amrita A Nair</li>
                                <li>Vice Chairperson : Rohan Damodar S</li>
                                <li>Secretary : Ankita S Naik</li>
                                <li>Joint Secretary : Devi Binoy</li>
                                <li>Treasurer : Anirudh U</li>
                            </ul>
                        </div>
                        <div className='about-contact'>
                            <h3>Contact</h3>
                            <div className='about-contact-icon'>
                                <EmailIcon/>ieeesb@cet.ac.in
                            </div>
                            <div className='about-contact-icon'>
                                <LocalPhoneIcon/>+919145671209
                            </div>
                            <div className='about-contact-icon'>
                                <BusinessIcon/> College Of Engineering, Trivandrum<br/>
                                        Sreekariyam<br/>
                                        PIN : 695017 
                            </div>
                        </div>
                    </div>
                    <h3 className='follow'>Follow Us</h3>
                    <div className='about-links'>
                        {/* <h3>Follow Us</h3> */}
                        <a href="https://www.linkedin.com/company/ieee-sb-cet/" target="_blank">
                            <LinkedInIcon/>
                        </a>
                        <a href="https://twitter.com/IEEEorg" target="_blank">
                            <TwitterIcon/>
                        </a>
                        <a href="https://www.instagram.com/ieeesbcet/" target="_blank">
                            <InstagramIcon/>
                        </a>
                        <a href="https://www.facebook.com/IEEE.SB.CET" target="_blank">
                            <FacebookIcon/>
                        </a>
                        <a href="https://www.youtube.com/user/IEEEorg" target="_blank">
                            <YouTubeIcon/>
                        </a>
                    </div> 
                    
                </div>
            </Box>
            
        </div>
    )
  };
  
  export default About;
