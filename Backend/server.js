// Active Envirement Variables
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || process.env.APP_PORT;

// Run Server

app.listen(PORT, () => {
  console.log('Server Is Running In Port : ', PORT);
});
