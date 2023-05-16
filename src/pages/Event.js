import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Routes, Route, useNavigate } from "react-router-dom";
import "../styles/Event.css";

const Event = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/events");
      setItems(response.data.events);
      // console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="e-main">
      {/* <Box className="e-box-main"> */}
      {/* <div className="event-right"> */}
      <div>
        <h3 className="e-heading">Events</h3>
        <div className="e-right-card">
          {items.map((item) => {
            return(
                <div
            style={{
              backgroundColor: "#7209B7",
              width: "215px",
              height: "fit-content",
              marginRight: "25px",
            }}
          >
            <div className="e-card-image-container">
              <img
                src={item.image}
                style={{ width: "210px", height: "210px" }}
                className="image"
              />
            </div>
            <div className="e-card-title">{item.title}</div>
            <div className="e-card-venue-container">
              <div className="e-card-venue">{item.location}</div>
            </div>
            <div className="e-card-date-container">
              <div className="e-card-date">{item.datetime.split()[0].replace('GMT','')}</div>
              {/* <div className="e-card-date-label">10:30am</div> */}
            </div>
            <div className="e-details-container">
              {item.description}
            </div>
          </div>
            )
          })}
          
        </div>
      </div>
      {/* </div> */}
      {/* </Box> */}
    </div>
  );
};

export default Event;
