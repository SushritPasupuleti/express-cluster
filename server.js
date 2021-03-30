const express = require('express')
const cluster = require('cluster')
const os = require('os')
const app = express()
const port = 3000
const cors = require('cors');
bodyParser = require('body-parser'),

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello There!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})