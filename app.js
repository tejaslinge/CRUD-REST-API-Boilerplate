const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/CRUD'
const bodyParser = require('body-parser')

const app = express()

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const con = mongoose.connection

con.on('open', () => {
    console.log('DB Connected!')
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());

const FarmRouter = require('./routes/routes')
FarmRouter(app);
// app.use('/api', FarmRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(9000, () => {
    console.log('Server started')
})