/** @format */
const POSTGRES = require('../../postgres');

const { Pool } = require('pg');

const postgres =
  'postgres://qfptlfcs:3Eq4qAkFRLZqToiz2q5Y7w8F9q8zjh3K@kashin.db.elephantsql.com/qfptlfcs';

const pool = new Pool({
  connectionString: POSTGRES,
  //connectionString: postgres,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
