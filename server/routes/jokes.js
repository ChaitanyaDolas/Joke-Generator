const express = require('express');
const axios = require('axios');

const router = express.Router();

//Route handler for fetching a random joke
router.get('/random', async (req, res) => {
  try{
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const joke = response.data;

    //Send the joke as a JSON response
    res.json(joke);
  } catch (error) {
    console.error('Error while fetching the jokes', error);
    res.status(500).json({ error: 'Failed to fetch the joke' });
  }
});

module.exports = router;