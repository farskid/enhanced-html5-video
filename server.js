// Requires
const express = require('express')

// Variables
const app = express()
const port = process.env.PORT || 4000

// Server Logic
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test/index.html')
})

app.listen(port, () => {
  console.log('Server running on localhost:' + port)
})