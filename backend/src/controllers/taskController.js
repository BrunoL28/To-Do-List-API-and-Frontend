const taskModel = require( "../models/taskModel" );

const getAll = async ( _request, response ) => {

    const tasks = await taskModel.getAll();

    return response.status(200).json(tasks);
};

const newTask = async ( request, response ) => {

    const createdTask = await taskModel.newTask( request.body );

    return response.status(201).json(createdTask);

};

module.exports = {
    getAll,
    newTask
};