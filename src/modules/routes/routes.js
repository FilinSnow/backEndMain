const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createNewTask,
    updateTaskInfo,
    deleteTask
} = require('../controllers/task.controller');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.delete('/deleteTask/:id', deleteTask);
router.patch('/updateTask', updateTaskInfo);

module.exports = router;