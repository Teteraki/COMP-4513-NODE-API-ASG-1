// Import our .env contents to be used in the server. e.g., PORT
require('dotenv').config();

// Create express app and import all routes from index.js
const app = require('express')();
const apiRoutes = require('./routes/index');

app.use("/api", apiRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server live on port: ' + `${PORT}`));