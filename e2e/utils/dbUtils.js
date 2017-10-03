const fs = require('fs')
const noop = x => x

module.exports = dbPath => ({
  dbFile: "",

  clearDb: (cb = noop) => {
    const emptyDb = JSON.stringify({ "jedi": []}, null, 2)
    fs.writeFile(dbPath, emptyDb, (err) => {
      if (err) {
        console.error(err)
      }
      cb()
    })
  },

  restoreDb: (cb = noop) => {
    fs.writeFile(dbPath, this.dbFile, (err) => {
      if (err) {
        console.error(err)
      }
      cb()
    })
  },

  saveDb: (cb = noop) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
      }
      this.dbFile = data
      cb()
    })
  }
})
