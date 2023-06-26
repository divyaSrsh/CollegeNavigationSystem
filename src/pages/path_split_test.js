import axios from "axios";
import splitPath from "./path_split.js";
import api_data from "../api.json"

const data = {
	'src': 'CS_101',
	'dest': 'CS_302',
	'dept': 'cse'
};
	
axios.post("http://"+ api_data.ip + ":" + api_data.api_port + "/shortestpath", data)
.then(response => {

	let length = 3
	let data = response.data.path;
	let paths, ids
	let res = splitPath(data, length);
	// console.log(ids);
	console.log(res);
	for( let i = 0; i < length; i ++)
	{
		console.log(res.path[i])
	}
})
.catch(error => {
	// Handle any errors that occurred during the request
	console.error(error);
});