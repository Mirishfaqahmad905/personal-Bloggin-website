const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Scholarship ,Admin} = require('./Schema.js'); // ✅ Import correctly
const { User, BlogPost } = require('./Schema.js');
 // Import User model
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
// Test route
router.get('/', (req, res) => {
  res.send("Routing is working correctly!");
});
// blogepost_
router.post('/bloge/post', async (req, res) => {
  try {
      const { title, category, image, description } = req.body;

      // Validate request data
      if (!title || !category || !image || !description) {
          return res.status(400).json({ message: 'All fields are required' });
      }

      // Create a new blog post
      const newBlog = new BlogPost({
          title,
          category,
          image,
          description,
      });
      // Save to database
      await newBlog.save();
      res.status(201).json({ message: 'Blog post created successfully', blog: newBlog });
  } catch (error) {
      console.error('Error saving blog post:', error);
      res.status(500).json({ message: 'Server error', error });
  }
});
// gettin blogepost data
// Get all blogs
router.get('/api/bloge', async (req, res) => {
  try {
    const blogs = await BlogPost.find(); // Fetch all blog posts
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});
// 
// Signup route
router.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error!' });
  }
});

// Login route
router.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found!' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials!' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful!', token, user: { fullName: user.fullName, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error!' });
  }
});

// Protected route example (requires authentication)
router.get('/api/profile', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password'); // Exclude password from response

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
s
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token!' });
  }
});
// POST route to add a new scholarship
router.post('/api/scholarships', async (req, res) => {
  try {
    // Extract data from request body
    const {
      name,
      country,
      image,
      benefits,
      requirements,
      eligibilityCriteria,
      deadline,
      applicationProcess,
      officialLink
    } = req.body;

    // Validate required fields
    if (!name || !country || !image || !benefits || !requirements || !eligibilityCriteria || !deadline || !applicationProcess || !officialLink) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Convert comma-separated values to arrays if they are strings
    const benefitsArray = Array.isArray(benefits) ? benefits : benefits.split(',').map(item => item.trim());
    const requirementsArray = Array.isArray(requirements) ? requirements : requirements.split(',').map(item => item.trim());
    const eligibilityCriteriaArray = Array.isArray(eligibilityCriteria) ? eligibilityCriteria : eligibilityCriteria.split(',').map(item => item.trim());
    // Create a new Scholarship instance
    const newScholarship = new Scholarship({
      name,
      country,
      image,
      benefits: benefitsArray,
      requirements: requirementsArray,
      eligibilityCriteria: eligibilityCriteriaArray,
      deadline,
      applicationProcess,
      officialLink
    });

    // Save to the database
    await newScholarship.save();

    res.status(201).json({ message: 'Scholarship posted successfully!', scholarship: newScholarship });
  } catch (error) {
    console.error('Error saving scholarship:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get("/get_scholarship_post", async (req, res) => {
  try {
    const scholarshipData = await Scholarship.find();
    
    // Sending JSON response
    res.status(200).json({ message: "Success", data: scholarshipData });
  } catch (err) {
    console.error("Error occurred:", err);
    
    // Return an error response
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});


// const createAdmin = async () => {
//   try {
//     const newAdmin = new Admin({
//       username: "admin",
//       email: "techhub905@gmail.com",
//       password: "AAshfAAq123@", // Storing as plain text (Not Secure)
//       role: "superadmin"
//     });

//     await newAdmin.save();
//     console.log("Admin created successfully with plain password!");
//   } catch (error) {
//     console.error("Error creating admin:", error);
//   }
// };
// createAdmin();
// Run the function
// createAdmin();


// router.post("/api/login/admin", async (req, res) => {
//   const { username, password, role } = req.body;
// console.log(username,password)
//   try {
//     // Check if admin exists
//     const admin = await Admin.findOne({ username, role });
//     if (!admin) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }
//     // Compare password
//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({ token, message: "Login successful" });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.post("/api/login/admin", async (req, res) => {
  const { username, email, password, role } = req.body;
  
  console.log("Received Data:", req.body);

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    // Fetch admin by email or username
    const admin = await Admin.findOne({ $or: [{ email }, { username }] });
    console.log("Found Admin:", admin);

    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Ensure the provided role matches the stored role
    if (admin.role !== role) {
      return res.status(400).json({ message: "Invalid role" });
    }

    console.log("Stored Plain Password:", admin.password);

    // Compare plain text passwords directly
    if (password !== admin.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful" });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
