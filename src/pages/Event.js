import React, { useState } from "react";
import "../styles/Event.css";
import {Button }from "react-bootstrap"; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Event() {
    return(
       <div className="event-main">
            <div className="event-bar">
                <div className="event-bar-left">
                    <Button>Total Events : </Button>
                    <Button>0 </Button>
                </div>
                <div className="event-bar-right">
                    caleder
                </div>
            </div>
            <div className="event-carosuel">
                <Carousel>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>;
            </div>
       </div> 
    ) 
};
export default Event;