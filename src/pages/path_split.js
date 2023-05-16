export default function splitPath(data, length)
{
	// const data = {
	// 	'src': 'CS_101',
	// 	'dest': 'CS_302',
	// 	'dept': 'cse'
	// };
	  
	// axios.post('http://127.0.0.1:5000/shortestpath', data)
	// .then(response => {
		// Handle the response from the API
		// console.log(response.data);
	// let length = 3
	// let data = response.data.path;
	let path = Array.from({ length }, () => []);
	let ids = [];
	// console.log(data);
	let floor = Number(data[0].z);
	let temp = [], temp2 = []
	for (let i = 0; i < data.length; i++)
	{
		if(Number(data[i].z) != floor)
		{
			path[floor] = temp;
			temp = [[data[i].fx, data[i].fy]]
			ids[floor] = temp2 
			temp2 = [data[i].id]
			floor = Number(data[i].z)
		}
		else 
		{
			temp.push([data[i].fx, data[i].fy])
			temp2.push(data[i].id);
		}
		// console.log(data[i].id)
		// console.log(temp)
		// console.log(path)
	}
	if(temp.length > 0)
	{
		path[floor] = temp
		ids[floor] = temp2
	}
	// console.log(ids);
	// console.log(path);
	return( [path, ids])
	// })
	// .catch(error => {
	// 	// Handle any errors that occurred during the request
	// 	console.error(error);
	// });
}
