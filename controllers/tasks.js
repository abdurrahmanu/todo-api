const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('get All tasks')
};

const createTask = async (req, res) => {
    console.log(req.body);
    const task = await Task.create(req.body)
    res.json(task)
};

const getTask = (req, res) => {
    res.json(req.params.id)
};

const updateTask = (req, res) => {
    res.send('update this task')
};

const deleteTask = (req, res) => {
    res.send('delete this task')
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};

