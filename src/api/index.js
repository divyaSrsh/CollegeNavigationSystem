import axios from "axios";

const getFloors= async () => {
  try {
    return await axios.get("http://127.0.0.1:5000/floors/cse1");
  } catch (err) {
    console.log("User API call not complete");
  }
};
export {getFloors};