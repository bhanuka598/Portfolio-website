const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    excerpt: {
      type: String,
      default: '',
    },
    tags: {
      type: [String],
      default: [],
    },
    coverImageUrl: {
      type: String,
      default: '',
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);