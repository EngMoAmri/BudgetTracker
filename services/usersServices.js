const db = require('./database');
const config = require('../config');

async function getUsers() {
  const rows = await db.query(
    'SELECT * FROM users', 
    []
  );
  var data = [];
  if(rows){
    data = rows;
  }
  return data;
}

module.exports = {
    getUsers
}