/** @format */

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
