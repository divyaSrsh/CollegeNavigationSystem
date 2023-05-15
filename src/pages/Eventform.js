import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Eventform.css'
const EventForm = () => {
    const [event, setEvent] = useState({
      title: '',
      location: '',
      date: '',
      time: '',
      poster: null,
      description: '',
      // Add other fields as needed
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
      setEvent({ ...event, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('127.0.0.1:5000/events', event);
        // .then((res)=>{}); 
        // Replace "/api/events" with your backend endpoint
        console.log(response.data); // Optional: Do something with the response
        // Reset the form after successful submission
        setEvent({
          title: '',
          location: '',
          date: '',
          time: '',
          poster: '',
          description: '',
        });
        navigate('/ShowEvent');
      } catch (error) {
        console.error(error);
      }
      // navigate('/ShowEvent');
    };
  
    return (
      <form className='eventform' onSubmit={handleSubmit}>
        <label>
          Title  :
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location  :
          <input
            type="text"
            name="location"
            value={event.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date  :
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Time  :
          <input
            type="time"
            name="time"
            value={event.time}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Poster  :
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
            Description  :
            <textarea
            type="textarea"
            name="description"
            value={event.description}
            onChange={handleChange}
            />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default EventForm;
   