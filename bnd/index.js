const express = require('express')
const app = express()
const db = require('./db')
const cors = require('cors')

app.use(cors())

app.get('/transactions', (req, res) => {
  db.query(
    'SELECT * FROM `st_transactions`',
    function (err, results, fields) {
      if (err) throw err

      res.send(results)
    }
  )
})

app.listen(3000)
