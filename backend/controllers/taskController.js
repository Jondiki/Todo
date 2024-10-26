const Task = require('../models/Task');

exports.getTasks = (req, res) => {
  const userId = req.userId;
  Task.getAll(userId, (err, tasks) => {
    if (err) return res.status(500).send(err);
    res.json(tasks);
  });
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId;
  Task.create(title, description, userId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Task created');
  });
};

//  les méthodes pour le crud
