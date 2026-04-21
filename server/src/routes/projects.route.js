const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projects.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Public routes
router.get('/', getProjects);
router.get('/:id', getProjectById);

// Protected routes (Admin only)
router.post('/', authMiddleware, createProject);
router.put('/:id', authMiddleware, updateProject);
router.delete('/:id', authMiddleware, deleteProject);

module.exports = router;