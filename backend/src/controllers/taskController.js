const taskModel = require('../models/taskModel');

const getAll = async (_request, response) => {

    const tasks = await taskModel.getAll();

    return response.status(200).json(tasks);
};

const newTask = async (request, response) => {

    const createdTask = await taskModel.newTask(request.body);

    return response.status(201).json(createdTask);

};

const deleteTask = async (request, response) => {

    const { id } = request.params;

    await taskModel.deleteTask(id);

    return response.status(204).json();
};

const updateTask = async (request, response) => {

    const id = request.params;

    await taskModel.updateTask(id, request.body);

    return response.status(204).json();
};

module.exports = {
    getAll,
    newTask,
    deleteTask,
    updateTask,
};