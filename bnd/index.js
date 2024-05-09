const express = require('express')
const app = express()
const db = require('./db')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/transactions', (req, res) => {
  db.query(
    'SELECT * FROM `st_transactions`',
    function (err, results, fields) {
      if (err) throw err

      res.send(results)
    }
  )
})

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  db.query(
    'SELECT password FROM `st_users` WHERE username = "' + username + '"',
    function (err, results, fields) {
      if (err) throw err

      if (results.length === 0) return
      bcrypt.compare(password, results[0].password, (err, result) => {
        if (err) throw err
        if (result) {
          const token = jwt.sign({username: username, }, '12345', {expiresIn: '1d'})
          const cookieOptions = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            path: '/',
          }
          res.cookie('lgtkn', token, cookieOptions)
          res.send({status: 'ok', redirect: '/'})
        }
      })
    }
  )
})

app.listen(3000)
