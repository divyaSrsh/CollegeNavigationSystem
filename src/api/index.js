import axios from "axios";

const getUsers = async () => {
  try {
    return await axios.get("https://api.publicapis.org/entries");
  } catch (err) {
    console.log("User API call not complete");
  }
};
export {getUsers};