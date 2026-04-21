const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blog.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Public routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Protected routes (Admin only)
router.post('/', authMiddleware, createBlog);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);

module.exports = router;