// require('dotenv').config({ path: './cred.env' });
import dotenv from "dotenv";
dotenv.config({path: '../../cred.env'});

// const { Pool } = require("pg");
import { Pool } from "pg";

console.log(process.env.PSQL_USER)
const pool = new Pool({
  user: process.env.PSQL_USER,
  database: process.env.PSQL_DATABASE,
  password: process.env.PSQL_PASSWORD,
  port: process.env.PSQL_PORT,
  host: process.env.PSQL_HOST,
});

// export default pool;
module.exports = { pool };