import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Routes, Route, useNavigate } from "react-router-dom";
import "../styles/Event.css";
import { Form } from "react-bootstrap";

const Event = () => {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItens] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/events");
      setItems(response.data.events);
      setSearchItens(response.data.events);
      // console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    // console.log(items);
    const search = items.filter((x) => {
      if (x.title.toLowerCase().includes(e.target.value)) return x;
    });
    setSearchItens(search);
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
    const search = items.filter((x) => {
      console.log(x.location);
      if (x.location.toUpperCase().includes(e.target.value)) return x;
    });
    setSearchItens(search);
  };

  return (
    <div className="e-main">
      {/* <Box className="e-box-main"> */}
      {/* <div className="event-right"> */}
      <div>
        <h3 className="e-heading">Events</h3>
        <div className="w-100 d-flex justify-content-end">
          <div>
            <Form.Control
              type="text"
              className="event-search p-0 ps-2 m-0"
              placeholder="Search Event"
              onChange={handleSearch}
            />
            <Form.Group className="mt-2 d-flex align-items-center justify-content-between">
              <Form.Label className="filter-label">
                Filter By Department
              </Form.Label>
              <Form.Control
                as="select"
                className="event-filter ms-2"
                aria-label="Default select example"
                onChange={handleFilter}
              >
                <option value="">All</option>
                <option value="CS">Computer Science</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="MCA">MCA</option>
                <option value="CE">Civil</option>
                <option value="A">Mechanical</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <div className="e-right-card">
          {searchItems.map((item) => {
            return (
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
                  <div className="e-card-date">
                    {item.datetime.split()[0].replace("GMT", "")}
                  </div>
                  {/* <div className="e-card-date-label">10:30am</div> */}
                </div>
                <div className="e-details-container">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </div> */}
      {/* </Box> */}
    </div>
  );
};

export default Event;
