const db = require('../services/mysql')

const routes = (server) => {
  // meu metodo get
  server.get('categoria', (req, res, next) => {
    // console.log(db.categories())
    db.categories().all().then(categories => {
      res.send(categories)
      next()
    }).catch(error => {
      res.send(error)
      next()
    })
  })
  server.post('categoria', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
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
