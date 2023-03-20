// const { getAllPoints, getPointData } = require('./GetPointsData');

// const { getPaths } = require("./GetPaths.mjs");
// const { getAllPoints, getPointData } = require("./GetPointsData.mjs");

// require('dotenv').config({ path: '../../cred.env' })
import { getAllPoints, getPointData } from './GetPointsData.mjs';
import { getPaths } from './GetPaths.mjs';
// { getPaths } = 
// let res = await getPointData('CS_302');
// let res2 = JSON.parse(JSON.stringify(await res));
// let res4 = {};
// // let res3 = await res2.command;
// res4.command = await res2.command;
// res4.rowCount = await res2.rowCount;
// res4.oid = await res2.oid;
// res4.rows = await res2.rows;
// console.log(await res4);
(async() => {

	x = "CS_302";
	y = "CS_101";
	path = await getPaths(x, y);
	console.log(path);
	for( var i =0; i < path.length; i++)
	{
		res = getPointData(path[i]);
		let res2 = JSON.parse(JSON.stringify(res));
		console.log(res2);
		// do stuff like adding markers etc
	}
} );