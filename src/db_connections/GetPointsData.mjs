// require('dotenv').config({ path: '../../cred.env' })
import dotenv from "dotenv";
dotenv.config({path: '../../cred.env'});
// console.log(__dirname);
// const { pool } = require("./pg_db");
import { pool }  from "./pg_db.js";

export async function getAllPoints() {
  try {
    const res = await pool.query("SELECT * FROM cse_map");
    console.log(res.rows);
  } catch (error) {
    console.error(error);
  }
}

// retrieveData()

export async function getPointData(x) {
	try{
		const res = await pool.query(`SELECT * FROM cse_map WHERE id='${x}'`);
		return res;
	} catch (error) {
		console.error(error);
	}
}

// (async () => {
// 	console.log(await getPointData('CS_304'));
// })();

// module.exports = {getAllPoints, getPointData}
// async function get_point_details(x = 'CS_109'){
	
// 	const user = process.env.NEO4J_USERNAME;

// 	const uri = process.env.NEO4J_URI;
// 	const password = process.env.NEO4J_PASSWORD;

   
// 	let result = [];

// 	try {
// 	} catch (error) {
// 	  console.error('Something went wrong: ', error)
// 	} finally {
// 	  await session.close()
// 	}
   
// 	// Don't forget to close the driver connection when you're finished with it
// 	await driver.close()
// 	// return(result)
// 	return(result)

// };
// //    (async() => {
// // 	console.log(await result)
// // 	return result; 
// //    });

module.exports = {getAllPoints, getPointData};

// // export default get_paths;
// (async() => {
// 	let res = await getPointData('CS_302');
// 	let res2 = JSON.parse(JSON.stringify(await res));
// 	let res4 = {};
// 	// let res3 = await res2.command;
// 	res4.command = await res2.command;
// 	res4.rowCount = await res2.rowCount;
// 	res4.oid = await res2.oid;
// 	res4.rows = await res2.rows;
// 	console.log(await res4);
// })();
