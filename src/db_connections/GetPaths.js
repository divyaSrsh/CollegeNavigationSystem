require('dotenv').config({ path: '../../cred.env' })

async function get_paths(x = 'CS_109', y='CS_302'){
	const neo4j = require('neo4j-driver')
	
	const user = process.env.NEO4J_USERNAME;

	const uri = process.env.NEO4J_URI;
	const password = process.env.NEO4J_PASSWORD;

	const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
	const session = driver.session()
   
	const node1Name = x
	const node2Name = y
   
	let result = [];

	try {
	  // To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
	  // The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
	//   const writeQuery = `MERGE (p1:room { name: $node1Name })
	// 					  MERGE (p2:room { name: $node2Name })
	// 					  MERGE (p1)-[:KNOWS]->(p2)
	// 					  RETURN p1, p2`
   
	  // Write transactions allow the driver to handle retries and transient  errors
	//   const writeResult = await session.writeTransaction(tx =>
	// 	tx.run(writeQuery, { node1Name, node2Name })
	//   )
	//   writeResult.records.forEach(record => {
	// 	const person1Node = record.get('p1')
	// 	const person2Node = record.get('p2')
	// 	console.log(
	// 	  `Created friendship between: ${person1Node.properties.name}, ${person2Node.properties.name}`
	// 	)
	//   })
   
	//   const readQuery = `MATCH (p:room)
	// 					 WHERE p.name = $personName
	// 					 RETURN p.name AS name`
		const readQuery = `match (p1:room {id: '${node1Name}' }), (p2:room {id: '${node2Name}'}), path = shortestPath((p1)-[*..15]-(p2)) return path`
		// const readQuery = `match (p1:room {id: 'CS_108' }), (p2:room {id: 'CS_304'}), path = shortestPath((p1)-[*..15]-(p2)) return path`
		const readResult = await session.readTransaction(tx =>
			// tx.run(readQuery, { room1Name: node1Name, room2Name: node2Name })
			tx.run(readQuery)
		)
		// console.log(readResult)
		record_set = []
		readResult.records.map(record => {
			// console.log(record)
			list = []
			var segments = record["_fields"][0]["segments"];
			segments.forEach(element => {
				// console.log(element)
				list.push(element.start.properties.id)
			});
			list.push(record._fields[0].end.properties.id)
			// console.log(list)
			record_set.push(list )
			// console.log(`Found point: `)
			// console.log(JSON.stringify(record)); 
		})
	  	// let unique = [...new Set(record_set)];
		// console.log(record_set[0])
		result = record_set[0]
		// console.log(unique)

	} catch (error) {
	  console.error('Something went wrong: ', error)
	} finally {
	  await session.close()
	}
   
	// Don't forget to close the driver connection when you're finished with it
	await driver.close()
	// return(result)
	return(result)

};
//    (async() => {
// 	console.log(await result)
// 	return result; 
//    });

// export default get_paths;
(async() => {
	console.log(await get_paths('CS_302', 'CS_117'));
})();
