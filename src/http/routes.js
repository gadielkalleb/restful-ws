const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('ola...')
    next()
  })
}

module.exports = routes
