const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data store
let goals = [
  { id: 1, title: 'Complete FED Tutorial 5', completed: false },
  { id: 2, title: 'Deploy to Render', completed: false },
  { id: 3, title: 'Deploy to Vercel', completed: false }
];
let nextId = 4;

// GET / — serve static HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET /goals — return all goals
app.get('/goals', (req, res) => {
  res.json(goals);
});

// POST /goals — create a new goal
app.post('/goals', (req, res) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }
  const goal = { id: nextId++, title: title.trim(), completed: false };
  goals.push(goal);
  res.status(201).json(goal);
});

// PUT /goals/:id — update an existing goal
app.put('/goals/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const goal = goals.find(g => g.id === id);
  if (!goal) return res.status(404).json({ error: 'Goal not found' });
  if (title !== undefined) goal.title = title.trim();
  if (completed !== undefined) goal.completed = Boolean(completed);
  res.json(goal);
});

// DELETE /goals/:id — remove a goal
app.delete('/goals/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = goals.findIndex(g => g.id === id);
  if (index === -1) return res.status(404).json({ error: 'Goal not found' });
  goals.splice(index, 1);
  res.json({ message: `Goal ${id} deleted` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
