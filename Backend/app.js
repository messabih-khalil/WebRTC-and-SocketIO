const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Initialize App
const app = express();
// App Middleware
app.use(express.json());
app.use(cors());


module.exports = app;
