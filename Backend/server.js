// Active Envirement Variables
require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || process.env.APP_PORT;

// Connect To MongoDB and Run Server

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server Is Running In Port : ', PORT);
    });
  })
  .catch(err => {
    console.log(err);
  });
