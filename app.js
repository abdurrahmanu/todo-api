const express = require('express');
const app = express()
const tasks = require('./router/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middlewares
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
// app.use(express.urlencoded({ extended: false }))

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen('5000', console.log('Server is running'))
    } catch (error) {
        console.log(error);
    }
}

start()