import test from 'ava'
require('dotenv').config()

const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_TESTE_DATABASE
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ error: msg })
}

const categories = require('../categories')({connection, errorHandler})

test('Criação de categories', async t => {
  const results = await categories.save('category-test')
  t.is(results.category.name, 'category-test')
})
