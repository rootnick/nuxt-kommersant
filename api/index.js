const express = require('express')
const app = express()

app.use('/test', (req, res) => {
    res.end('Test API!')
  })

module.exports = app

