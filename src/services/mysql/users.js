// deps é uma dependencia de connection que vem como parametro de de services/mysql/index.js
const users = deps => {
  return {
    all: () => {
      // nao posso esquecer de retorna essa nova promise
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT id, email FROM users', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar o usuario', reject)
            return false
          }
          resolve({ users: results })
        })
      })
    },
    save: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        // metodo query tem essa propriedade [] um array que faz parte da biblioteca mysql para node evita sql injection
        connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao listar o usuario ${email}`, reject)
            return false
          }
          resolve({ user: { email, id: results.insertId } })
        })
      })
    },
    update: (id, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        // metodo query tem essa propriedade [] um array que faz parte da biblioteca mysql para node evita sql injection
        connection.query('UPDATE users SET password = ? WHERE id = ?', [password, id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao atualizar o usuario de id ${id}`, reject)
            return false
          }
          resolve({ user: { id }, affectedRows: results.affectedRows })
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        // metodo query tem essa propriedade [] um array que faz parte da biblioteca mysql para node evita sql injection
        connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao remover o usuario de id ${id}`, reject)
            return false
          }
          resolve({ message: 'usuario removido com sucesso!', affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = users
