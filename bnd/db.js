const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'st',
  password: 'Saef//060502',
  database: 'st-db'
})

module.exports = connection
