const mysql = require('mysql')
require("dotenv").config();
const url = process.env.DATABASE_IP;
const user = process.env.USER;
const pass = process.env.PASS;
const db = process.env.DATABASE;

const connection = mysql.createConnection({
  host: url,
  user: user,
  password: pass,
  database: db
});

module.exports = connection;