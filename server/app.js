const router = require('./routes/jokes.js')

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', router);

//Start the server
//Terminal Command: nodemon app.js
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});