import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Eventform.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../firebase";
import { useRef } from "react";
const EventForm = () => {
  const [event, setEvent] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    image: "",
    description: "",
    Operation: "Create",
    id: localStorage.getItem("userId"),

    // Add other fields as needed
  });

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleUpload = () => {
    const fileToUpload = inputRef.current.files[0];
    const fileName =
      new Date().getTime() + "_" + inputRef.current.files[0].name;
    console.log(fileName);
    const storageRef = ref(storage, `/eventPosters/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, fileToUpload);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploaded = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // onUpload(url);
          console.log(url);
          setEvent({...event, image: url})
        });
      }
    );
  };

  const handleChange = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]));
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reqData = {
        title: event.title,
        location: event.location,
        datetime: event.date + " " + event.time,
        image: event.image,
        image_extension: ".png",
        description: event.description,
        Operation: "Create",
        id: '2',
        // localStorage.getItem("userId"),
      };
      console.log(reqData);
      const response = await axios.post(
        "http://localhost:5000/events",
        reqData
      );
      // .then((res)=>{});
      // Replace "/api/events" with your backend endpoint
      console.log(response.data); // Optional: Do something with the response
      // Reset the form after successful submission
      // setEvent({
      //   title: '',
      //   location: '',
      //   date: '',
      //   time: '',
      //   Poster: '',
      //   description: '',

      // });
      navigate("/ShowEvent");
    } catch (error) {
      console.error(error);
    }
    // navigate('/ShowEvent');
  };

  return (
    <form className="eventform" onSubmit={handleSubmit}>
      <label>
        Title :
        <input
          type="text"
          name="title"
          value={event.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location :
        <input
          type="text"
          name="location"
          value={event.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date :
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time :
        <input
          type="time"
          name="time"
          value={event.time}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Poster :
        <input
          type="file"
          ref={inputRef}
          name="image"
          accept="image/*"
          onChange={handleUpload}
        />
      </label>
      <br />
      <label>
        Description :
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
