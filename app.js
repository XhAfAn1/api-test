const express = require('express')
const app = express()

const port = 3000


const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! iqbal donkey')
})

app.post('/data', (req, res) => {
  res.send(`Hello ${req.body.name}!`)
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
