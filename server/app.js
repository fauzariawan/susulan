const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)


app.listen(port, () => {
  console.log(`this app run at port:${port}`)
})