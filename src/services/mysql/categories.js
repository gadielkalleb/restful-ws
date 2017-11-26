// deps é uma dependencia de connection que vem como parametro de de services/mysql/index.js
const categories = deps => {
  return {
    all: () => {
      // nao posso esquecer de retorna essa nova promise
      return new Promise((resolve, reject) => {
        const { connection } = deps
        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            reject(error)
          }
          resolve({ categories: results })
        })
      })
    },
    save: (name) => {

    },
    update: (id, name) => {

    },
    del: (id) => {

    }
  }
}

module.exports = categories
