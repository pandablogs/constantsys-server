const express = require('express');
const path = require('path')
const  routes  = require('./routes/routes');
const connectDatabase = require('./config/db');
require('dotenv').config();

// Establish Database Connection
connectDatabase();

const app = express();

const port = process.env.PORT || 8080;
// Accept JSON DATA
app.use(express.json());

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join('public')));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use('/api',routes);

app.listen(port,()=>{
    console.log("Server Started on Port 8080")
});