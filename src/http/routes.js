const routes = (server) => {
  // meu metodo get
  server.get('categoria', (req, res, next) => {
    res.send(['1', 'lalala'])
    next()
  })
  server.post('categoria', (req, res, next) => {
    console.log(req)
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
