const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1Pieceluffy',
  database: 'Tables_in_restful_ws'
})

const categories = connection.query('SELECT * FROM categories', (error, results) => {
  if (error) {}
  return {categories: results}
})

module.exports = categories
