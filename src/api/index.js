import axios from "axios";

const getFloors= async () => {
  try {
    return await axios.get("http://127.0.0.1:5000/floors/cse1");
  } catch (err) {
    console.log("CSE Floors API call not complete");
  }
};

const getLogin= async (props) => {
  try {
    console.log(props.username+" "+props.password)
    return await axios.post("http://127.0.0.1:5000/login", {
        username: props.username,
        password: props.password,
        // Add more parameters as needed
        
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Referrer-Policy': 'no-referrer'
        }
      });
  } catch (err) {
    console.log("Login API call not complete");
  }
};

export {getFloors,getLogin};
