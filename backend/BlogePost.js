const express = require('express');
const router = express.Router(); // Create a new router instance

// Define the blog post route
const Router =()=>router.get('/blogpost', async (req, res) => {
    try {
        console.log("Blog post route hit successfully.");
        res.status(200).json({ message: "Blog post route is working!" });
    } catch (error) {
        console.error("An error occurred: " + error);
        res.status(500).json({ message: "An error occurred", error });
    }
});

module.exports = Router;
