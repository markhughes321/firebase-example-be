const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/firebase.js');

// Set up Express app
const app = express();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Set up notes routes
const notesRoutes = require('./routes/notes');
app.use('/notes', notesRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
