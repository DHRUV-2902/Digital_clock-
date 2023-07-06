const express = require("express");
const cors  = require("cors");
const app = express();
const axios = require('axios');

app.use(cors());
app.use(express.json());

app.get('/api/time', (req, res) => {
    res.json({ time: req.query.time });
  });

  app.post('/alarm', (req, res) => {
    const { alarmTime } = req.body;
    // Store the alarmTime in a variable or database for later use
  
    res.json({ message: 'Alarm set successfully' });
  });

  app.get('/time', async (req, res) => {
    const { city } = req.query;
    try {
      const response = await axios.get(
        `https://geolocation-api.com/api/geolocation?city=${city}`
      );
      const { timezone } = response.data.location;
      const currentTime = new Date().toLocaleString('en-US', {
        timeZone: timezone,
      });
      res.json({ time: currentTime });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch the time' });
    }
  });
  

app.listen(9000,()=>{console.log("server ready at 9000")})