const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { email, password, pseudo } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).send(err);
    User.create(email, hash, pseudo, (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('User created');
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, result) => {
    if (err || result.length === 0) return res.status(400).send('User not found');
    bcrypt.compare(password, result[0].password, (err, match) => {
      if (err || !match) return res.status(400).send('Invalid credentials');
      const token = jwt.sign({ userId: result[0].id }, 'SECRET_KEY', { expiresIn: '1h' });
      res.json({ token });
    });
  });
};
