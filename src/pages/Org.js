
import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../styles/Org.css";
import ieee from "../assets/images/ieee-logo.jpg";
import { Box } from '@mui/material';
import edit from "../assets/images/edit-icon.png";
import Groupimg from "../assets/images/org.jpg";
import MarkdownRenderer from '../components/markdownrender';
import rehypeRaw from 'rehype-raw';

const Org = () => {
    // let x=`### Hello there 👋 \
    // - I Love Science, Math and programming \
    // - I\’m currently doing my Bachelors in Computer Science at College of Engineering Trivandrum \
    // - How to reach me: \
    //     - [LinkedIn](https://www.linkedin.com/in/harishankar-s-kumar-780ba31b5) \
    //     - [Portfolio](https://harisk20.github.io) \
    // <div align=center> \
    // </div>  \
    // <br>\
    // The awesome Stats card are made using the resource [here](https://github.com/anuraghazra/github-readme-stats) \
    // `

    const navigate = useNavigate();

    const navigateAbout = () => {
         navigate('/About');
    };
    const navigateAddEvent = () => {
        navigate('/AddEvent');
    };
   
    const navigateShowEvent = () => {
        navigate('/ShowEvent');
    };
    const navigateOrg = () => {
        navigate('/Org');
    };
    return (
        <div className="org-main">
            <Box className="org-box-main">
                <div className="org-left">
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
                <div className="org-right"> 
                    
                    {/* <MarkdownRenderer markdownContent={x}/> */}
                    <div className='org-right-text'>
                    We at IEEE SB CET aim to provide 
                    a technical home, a place where each student 
                    member can develop and hone skills that will 
                    earmark them for prominent positions in their careers.
                    <br/>Through volunteering in the variety of workshops and 
                    events that we host, speaking in and attending chapter 
                    sessions, our members get to explore new realms of 
                    interest and adapt to different situations enabling 
                    them to easily fit into any technical or professional 
                    role, even after their student life.
                    </div>
                    <div className='org-right-img'>
                        <img className="group-img" src={Groupimg} alt="img" />
                    </div>
                </div>
            </Box>
            
        </div>
    )
  };
  
  export default Org;
