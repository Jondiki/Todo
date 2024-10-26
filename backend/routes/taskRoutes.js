const express = require('express');
const { getTasks, createTask } = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', getTasks);
router.post('/task', createTask);
router.put('/task', createTask);
router.put
// Routes pour PUT et DELETE ici

module.exports = router;
