const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('./routes/index')

dotenv.config()

const app = express()

app.use(cors())

app.use('/', routes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('listening to ', PORT)
})