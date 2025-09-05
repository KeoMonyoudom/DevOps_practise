const express = require('express');
const app = express();

app.use(express.json());

// Example routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.post('/api/user', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });
  res.status(201).json({ id: 1, name });
});

module.exports = app;
