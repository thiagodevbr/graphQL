const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('src/db/db.json')
const db = low(adapter)

const userModel = require('./models/User')
const movieModel = require('./models/Movie')

module.exports = {
  models: {
    User: userModel(db),
    Movie: movieModel(db)
  },
  db
}
