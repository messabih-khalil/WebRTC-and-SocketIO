const express = require('express');
const cors = require('cors');
// Initialize App
const app = express();
// App Middleware
app.use(express.json());
app.use(cors());

// App Routes

app.use('/api/auth', require('./routes/auth.routes'));

module.exports = app;
