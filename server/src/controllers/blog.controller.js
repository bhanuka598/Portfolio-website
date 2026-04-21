const Blog = require('../models/Blog');

// @desc    Get all published blogs
// @route   GET /api/blog
// @access  Public
const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    res.json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by slug
// @route   GET /api/blog/:slug
// @access  Public
const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true });
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }
    res.json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a blog post
// @route   POST /api/blog
// @access  Private (Admin)
const createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a blog post
// @route   PUT /api/blog/:id
// @access  Private (Admin)
const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }
    res.json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a blog post
// @route   DELETE /api/blog/:id
// @access  Private (Admin)
const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }
    res.json({ success: true, message: 'Blog post deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog };