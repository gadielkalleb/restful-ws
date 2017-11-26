const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1Pieceluffy',
  database: 'Tables_in_restful_ws'
})

const categoryModule = require('./categories')({connection})

module.exports = {
  categories: () => categoryModule
}
