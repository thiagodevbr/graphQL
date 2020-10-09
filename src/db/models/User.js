const { uuid } = require('uuidv4')
const { ApolloError } = require('apollo-server')

const userModel = db => {
  return {
    findOne(filter) {
      return db.get('user').filter(filter).value()
    },

    findAll() {
      return db.get('user').value()
    },

    create(user) {
      const newUser = { id: uuid(), ...user }
      const data = db.get('user').filter(user).value()
      if (!data.length) db.get('user').push(newUser).write()
      else return new ApolloError("This name already exists. Try other name!")
      return newUser
    }
  }
}

module.exports = userModel