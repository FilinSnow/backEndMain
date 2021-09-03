const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createNewTask,
    changeTaskInfo,
    deleteTask
} = require('../controllers/task.controller');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.delete('/deleteTask/:id', deleteTask);
router.patch('/updateTask', changeTaskInfo);

module.exports = router;