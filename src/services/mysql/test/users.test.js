const test = require('ava')
const { connection, errorHandler } = require('./setup')
const users = require('../users')({connection, errorHandler})
// isolo o metodo create para usar ele isoladamente
const create = () => users.save('user@test.com', '12345678 ')

// limpa a tabela antes e dois do teste
test.beforeEach(t => connection.query('TRUNCATE TABLE users'))
test.after.always(t => connection.query('TRUNCATE TABLE users'))

test('Lista de usuario', async t => {
  await create()
  const list = await users.all()
  t.is(list.users.length, 1)
  t.is(list.users[0].email, 'user@test.com')
})

// salva um elemento dentro da tabela de testes
test('Criação de usuario', async t => {
  const results = await create()
  t.is(results.user.email, 'user@test.com')
})

// teste que atualiza um dado da tabela
test('Atualização de usuario', async t => {
  await create()
  const update = await users.update(1, '12345679')
  t.is(update.affectedRows, 1)
})

test('Remoção de usuario', async t => {
  await create()
  const removed = await users.del(1)
  t.is(removed.affectedRows, 1)
})
