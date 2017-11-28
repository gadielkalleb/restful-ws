// deps é uma dependencia de connection que vem como parametro de de services/mysql/index.js
const categories = deps => {
  return {
    all: () => {
      // nao posso esquecer de retorna essa nova promise
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as categorias', reject)
            return false
          }
          resolve({ categories: results })
        })
      })
    },
    save: (name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        // metodo query tem essa propriedade [] um array que faz parte da biblioteca mysql para node evita sql injection
        connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao listar a categoria ${name}`, reject)
            return false
          }
          resolve({ category: { name, id: results.insertId } })
        })
      })
    },
    update: (id, name) => {

    },
    del: (id) => {

    }
  }
}

module.exports = categories
