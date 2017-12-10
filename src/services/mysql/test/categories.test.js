const test = require('ava')

const { connection, errorHandler } = require('./setup')
const categories = require('../categories')({connection, errorHandler})

test.beforeEach(t => connection.query('TRUNCATE TABLE categories'))

test('Criação de categories', async t => {
  const results = await categories.save('category-test')
  t.is(results.category.name, 'category-test')
})
