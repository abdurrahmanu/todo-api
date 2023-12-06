const express = require('express');
const app = express()
const tasks = require('./router/tasks')

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/tasks', tasks)

app.listen('5000', console.log('Server listening at 5000'));