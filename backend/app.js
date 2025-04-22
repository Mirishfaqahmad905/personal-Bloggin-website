const express = require('express');
const router=require('./router.js');
const app=express();
const cors=require('cores');
const bodyparaser=require('body-parser');
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); 
const {userSchema,blogPostSchema}=require('./Schema.js');
const Port = process.env.Port || 5000; // Use process.env.Port if it exists, otherwise default to 300
app.use('/',router);
require('./Connection.js'); // Assuming this file handles database connection
const Schema_ = require('./Schema.js'); // Assuming this file contains your schema definitions
app.use(express.json());
// Start the server and listen on the specified port
 app.use('/',router);
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
