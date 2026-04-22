const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middleware/error.middleware');
const loggerMiddleware = require('./middleware/logger.middleware');

// Route imports
const authRoute = require('./routes/auth.route');
const projectsRoute = require('./routes/projects.route');
const blogRoute = require('./routes/blog.route');
const contactRoute = require('./routes/contact.route');

const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoute);
app.use('/api/projects', projectsRoute);
app.use('/api/blog', blogRoute);
app.use('/api/contact', contactRoute);

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ─── Global Error Handler (must be last) ──────────────────────────────────────
app.use(errorMiddleware);

module.exports = app;