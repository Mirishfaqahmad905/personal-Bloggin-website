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
    enum: ['Technology', 'Lifestyle', 'Education', 'Health','AI & Machine Learning','Business', 'Food' ,'Travel','Crypto' ,'Brand', 'Other'], // Example categories
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


const ScholarshipSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  benefits: { type: [String], required: true },
  requirements: { type: [String], required: true },
  eligibilityCriteria: { type: [String], required: true },
  deadline: { type: Date, required: true },
  applicationProcess: { type: String, required: true },
  officialLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["superadmin", "moderator", "editor"],
    default: "moderator"
  },
  permissions: {
    type: [String],
    default: ["read", "write", "edit", "delete"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the model
const Admin = mongoose.model("Admin", adminSchema);

// ✅ Correct way to export the model
const Scholarship = mongoose.model('Scholarship', ScholarshipSchema);
module.exports = { Scholarship ,Admin };  // ✅ Make sure to export it correctly
module.exports.User = mongoose.model('User', userSchema);
module.exports.BlogPost = mongoose.model('BlogPost', blogPostSchema);