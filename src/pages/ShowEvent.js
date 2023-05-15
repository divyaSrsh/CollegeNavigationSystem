import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import "../styles/ShowEvent.css";
import ieee from "../assets/images/ieee-logo.jpg";
import { Box } from '@mui/material';
import edit from "../assets/images/edit-icon.png";
import event1 from "../assets/images/event1.jpeg";
import event2 from "../assets/images/event2.jpeg";


const ShowEvent = () => {
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
        <div className="se-main">
            <Box className="se-box-main">
                <div className="se-left">
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
                <div className="se-right">
                  <div>
                    <h3 className='event-heading'>Events</h3>
                    <div className='se-right-card'>

                    
                        <div style={{backgroundColor: 'white', width: '215px', height: "fit-content", marginRight: "15px"}}>
                          <div className='card-image-container'><img src={event1} style={{width: "210px", height: "210px"}}/></div>
                          <div className='card-title'>Eminence</div>
                          <div className='card-venue-container'>
                            <div className='card-venue'>Seminar Hall</div>
                          </div>
                          <div className='card-date-container'>
                            <div className='card-date'>23-03-2023</div>
                            <div className='card-date-label'>10:30am</div>
                          </div>
                          <div className='details-container'>
                            <a href="https://www.instagram.com/ieeesbcet/" target="_blank">
                              More info..
                            </a>
                          </div>
                        </div>

                        <div style={{backgroundColor: 'white', width: '215px', height: "fit-content", marginRight: "15px"}}>
                          <div className='card-image-container'><img src={event2} style={{width: "210px", height: "210px"}}/></div>
                          <div className='card-title'>Hack-a-Week</div>
                          <div className='card-venue-container'>
                            <div className='card-venue'>EEE 203</div>
                          </div>
                          <div className='card-date-container'>
                            <div className='card-date'>30-03-2023</div>
                            <div className='card-date-label'>10am to 4pm</div>
                          </div>
                          <div className='details-container'>
                            <a href="https://www.instagram.com/ieeesbcet/" target="_blank">
                              More info..
                            </a>
                          </div>
                        </div>

                        <div style={{backgroundColor: 'white', width: '215px', height: "fit-content", marginRight: "15px"}}>
                          <div className='card-image-container'><img src={event2} style={{width: "210px", height: "210px"}}/></div>
                          <div className='card-title'>Hack-a-Week</div>
                          <div className='card-venue-container'>
                            <div className='card-venue'>EEE 203</div>
                          </div>
                          <div className='card-date-container'>
                            <div className='card-date'>30-03-2023</div>
                            <div className='card-date-label'>10am to 4pm</div>
                          </div>
                          <div className='details-container'>
                            <a href="https://www.instagram.com/ieeesbcet/" target="_blank">
                              More info..
                            </a>
                          </div>
                        </div>

                        <div style={{backgroundColor: 'white', width: '215px', height: "fit-content", marginRight: "15px"}}>
                          <div className='card-image-container'><img src={event2} style={{width: "210px", height: "210px"}}/></div>
                          <div className='card-title'>Hack-a-Week</div>
                          <div className='card-venue-container'>
                            <div className='card-venue'>EEE 203</div>
                          </div>
                          <div className='card-date-container'>
                            <div className='card-date'>30-03-2023</div>
                            <div className='card-date-label'>10am to 4pm</div>
                          </div>
                          <div className='details-container'>
                            <a href="https://www.instagram.com/ieeesbcet/" target="_blank">
                              More info..
                            </a>
                          </div>
                        </div>
                        
                        <div style={{backgroundColor: 'white', width: '215px', height: "fit-content", marginRight: "15px"}}>
                          <div className='card-image-container'><img src={event2} style={{width: "210px", height: "210px"}}/></div>
                          <div className='card-title'>Hack-a-Week</div>
                          <div className='card-venue-container'>
                            <div className='card-venue'>EEE 203</div>
                          </div>
                          <div className='card-date-container'>
                            <div className='card-date'>30-03-2023</div>
                            <div className='card-date-label'>10am to 4pm</div>
                          </div>
                          <div className='details-container'>
                            <a href="https://www.instagram.com/ieeesbcet/" target="_blank">
                              More info..
                            </a>
                          </div>
                        </div>



                    </div>
                    </div>
                </div>
            </Box>
            
        </div>
    )
  };
  
  export default ShowEvent;
