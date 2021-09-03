const Task = require('../../db/models/task/index');

module.exports.getAllTasks = (req, res) => {
    Task.find().then(result => {
        res.send({ data: result })
    })
}

module.exports.createNewTask = (req, res) => {
    const task = new Task(req.body)
    task.save().then(r => {
        res.send(r)
    }).catch(err => new Error(err))
}

module.exports.changeTaskInfo = (req, res) => {
    const { _id: id, text, isCheck } = req.body
    Task.findByIdAndUpdate(id, {
        id,
        text,
        isCheck
    }).then(r => {
        res.send(r)
    }).catch(err => new Error(err))
}

module.exports.deleteTask = (req, res) => {
    Task.findOneAndRemove({
        _id: req.params.id
    }).then(r => {
        res.send(r);
    }).catch(err => new Error(err));
}