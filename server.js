// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Sample Microservice', timestamp: new Date() });
});

// Example GET endpoint
app.get('/api/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

// Example POST endpoint
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received successfully', data });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
