import React, { useState } from 'react';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import EventForm from './Eventform';
import "../styles/Addevent.css";
import ieee from "../assets/images/ieee-logo.jpg";
import { Box } from '@mui/material';
import edit from "../assets/images/edit-icon.png";


const AddEvent = () => {
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
        // <BrowserRouter>
        <div className="addevent-main">
            <Box className="addevent-box-main">
                <div className="addevent-left">
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
                <div className="addevent-right">
                    
                        <div className='addevent-name'>
                            <div className='addevent-name-heading'>
                                <h3>Event Form</h3>
                            </div>
                            <div className='addevent-name-form'>
                                <EventForm />
                            </div>
                        </div>
                </div>
            </Box>
            
        </div>
        // </BrowserRouter>
    )
  };
  
  export default AddEvent;





// import React, { useState } from 'react';
// import axios from 'axios';

// const EventForm = () => {
//   const [title, setTitle] = useState('');
//   const [date, setDate] = useState('');

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('/api/events', { title, date });
//       console.log('Event created:', response.data);
//       // Add any success message or redirect logic here
//     } catch (error) {
//       console.error('Error creating event:', error);
//       // Add error handling logic here
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="title">Title:</label>
//         <input type="text" id="title" value={title} onChange={handleTitleChange} />
//       </div>
//       <div>
//         <label htmlFor="date">Date:</label>
//         <input type="date" id="date" value={date} onChange={handleDateChange} />
//       </div>
//       <button type="submit">Create Event</button>
//     </form>
//   );
// };

// export default EventForm;
