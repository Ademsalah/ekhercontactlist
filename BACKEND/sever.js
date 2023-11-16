const express = require('express')
const app = express()
const port = 5002 
const connectdb = require('./config/connect')
const contactRouter = require('./routes/contauserRouter')
const cors = require ('cors')
connectdb()
app.use(cors())
app.use(express.json())
  app.use('/contact',contactRouter)

app.listen(port,err=>
    err?console.log(err):console.log(`ur great ${port}`) )