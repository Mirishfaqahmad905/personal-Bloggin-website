const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// BlogPost Schema
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Technology', 'Lifestyle', 'Education', 'Health', 'Business', 'Other'], // Example categories
  },
  image: {
    type: String, // Store image as a URL or path
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically stores creation date
  },
});

// Export both models
module.exports.User = mongoose.model('User', userSchema);
module.exports.BlogPost = mongoose.model('BlogPost', blogPostSchema);