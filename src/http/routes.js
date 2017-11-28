const db = require('../services/mysql')

const routes = (server) => {
  // meu metodo get
  server.get('categoria', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })
  server.post('categoria', async (req, res, next) => {
    const { name } = req.params
    try {
      res.send(await db.categories().save(name))
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })
  // server.put('categoria', (req, res, next) => {
  //   res.send()
  //   next()
  // })
  // server.delete('categoria', (req, res, next) => {
  //   res.send()
  //   next()
  // })

  server.get('/', (req, res, next) => {
    res.send('ola...')
    next()
  })
}

module.exports = routes
