const db = require('../services/mysql')

const routes = (server) => {
  server.post('autenticacao', async (req, res, next) => {
    try {
      const { email, password } = req.params
      console.log(email, password)
      res.send(await db.auth().authenticate(email, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('usuario', async (req, res, next) => {
    try {
      const { email, password } = req.params
      console.log(email, password)
      res.send(await db.users().save(email, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  // meu metodo get
  server.get('categoria', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.post('categoria', async (req, res, next) => {
    const { name } = req.params
    try {
      res.send(await db.categories().save(name))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.put('categoria', async (req, res, next) => {
    const { id, name } = req.params
    try {
      res.send(await db.categories().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.del('categoria', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.categories().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('/', (req, res, next) => {
    res.send('ola...')
    next()
  })
}

module.exports = routes
