import React from 'react';
import event1 from "../assets/images/event1.jpeg";
import '../styles/Event.css'

const Event = () => {
    return (
        <div className="e-main">
            {/* <Box className="e-box-main"> */}
                {/* <div className="event-right"> */}
                    <div >
                        <h3 className='e-heading'>Events</h3>
                        <div className='e-right-card'>
                            <div style={{backgroundColor: '#7209B7', width: '215px', height: "fit-content", marginRight: "15px"}}>
                                <div className='e-card-image-container'><img src={event1} style={{width: "210px", height: "210px"}} className='image'/></div>
                                <div className='e-card-title'>Eminence</div>
                                <div className='e-card-venue-container'>
                                    <div className='e-card-venue'>Seminar Hall</div>
                                </div>
                                <div className='e-card-date-container'>
                                    <div className='e-card-date'>23-03-2023</div>
                                    <div className='e-card-date-label'>10:30am</div>
                                </div>
                                <div className='e-details-container'>
                                    <a href="https://www.instagram.com/ieeesbcet/" target="_blank">
                                    More info..
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            {/* </Box> */}
            
        </div>
    )
  };
  
  export default Event;
