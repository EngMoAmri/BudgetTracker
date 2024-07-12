const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool(config.db);
/**
 * Create database tables if not exists
 * I think it's more efficient if creating tables
 * was outside this code, coz this code will be called
 * mutliple times
 */
query(`CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) NOT NULL,
    role VARCHAR (255) DEFAULT 'user'
  ); 
  `)
/**
 * Query the database using the pool
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
    const {rows, fields} = await pool.query(query, params);

    return rows;
}

module.exports = {
  query
}