const test = require('ava')

const { connection, errorHandler } = require('./setup')
const categories = require('../categories')({connection, errorHandler})

// isolo o metodo create para usar ele isoladamente
const create = () => categories.save('category-test')

// limpa a tabela antes e dois do teste
test.beforeEach(t => connection.query('TRUNCATE TABLE categories'))
test.after.always(t => connection.query('TRUNCATE TABLE categories'))

// salva um elemento dentro da tabela de testes
test('Criação de categories', async t => {
  const results = await create()
  t.is(results.category.name, 'category-test')
})

// teste que atualiza um dado da tabela
test('Atualização de categories', async t => {
  await create()
  const update = await categories.update(1, 'category-test')
  t.is(update.category.name, 'category-test')
  t.is(update.affectedRows, 1)
})

test('Remoção de categories', async t => {
  await create()
  const removed = await categories.del(1)
  t.is(removed.affectedRows, 1)
})
