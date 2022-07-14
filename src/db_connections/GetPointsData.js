require('dotenv').config({ path: '../../cred.env' })

const { pool } = require("./pg_db");

async function getAllPoints() {
  try {
    const res = await pool.query("SELECT * FROM cse_map");
    console.log(res.rows);
  } catch (error) {
    console.error(error);
  }
}

// retrieveData()

async function getPointData(x) {
	try{
		const res = await pool.query(`SELECT * FROM cse_map WHERE id='${x}'`);
		return res;
	} catch (error) {
		console.error(error);
	}
}

(async () => {
	console.log(await getPointData('CS_304'));
})();
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

// // export default get_paths;
// (async() => {
// 	console.log(await get_point_details('CS_302'));
// })();
