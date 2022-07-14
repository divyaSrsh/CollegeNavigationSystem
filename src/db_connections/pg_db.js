require('dotenv').config({ path: '../../cred.env' });
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PSQL_USER,
  database: process.env.PSQL_DATABASE,
  password: process.env.PSQL_PASSWORD,
  port: process.env.PSQL_PORT,
  host: process.env.PSQL_HOST,
});

module.exports = { pool };