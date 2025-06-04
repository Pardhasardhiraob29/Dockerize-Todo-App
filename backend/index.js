const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

let tasks = [];
let idCounter = 1;

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: idCounter++, text: req.body.text };
  tasks.push(newTask);
  res.json(newTask);
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

