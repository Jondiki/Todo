const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
