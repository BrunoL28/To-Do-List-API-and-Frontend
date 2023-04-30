const taskModel = require( "../models/taskModel" );

const getAll = async ( request, response ) => {

    const task = await taskModel.getAll();

    return response.status(200).json(task);
};

module.exports = {
    getAll
};