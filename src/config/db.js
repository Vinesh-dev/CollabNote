const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "collabnote",
  password: "3366",
  port: 5432,
});

module.exports = pool;
