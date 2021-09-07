const Task = require('../../db/models/task/index');
const _ = require('underscore');

module.exports.getAllTasks = (req, res) => {
  Task.find().then(result => {
    res.send({ data: result });
  }).catch(err => new Error(err));
}

module.exports.createNewTask = (req, res) => {
  if (Object.keys(req.body).length == 0) {
    return res.send('Not send data');
  }
  _.mapObject(req.body, (val, key) => {
    if (val == '') {
      return res.send('You have not entered data');
    }
  })
  const task = new Task(req.body);
  task.save().then(r => {
    res.send(r);
  }).catch(err => new Error(err));
}

module.exports.updateTaskInfo = (req, res) => {
  if (Object.keys(req.body).length == 0) {
    return res.send('Not send data');
  }
  const { _id, text, isCheck } = req.body;
  Task.updateOne(
    { _id },
    { text, isCheck },
  ).then(r => {
    res.send(r);
  }).catch(err => new Error(err));
}

module.exports.deleteTask = (req, res) => {
  Task.deleteOne({
    _id: req.params.id
  }
  ).then(r => {
    res.send(r);
  }).catch(err => new Error(err));
}