const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/weather', (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City name is required' });
    }

    const apiKey = process.env.API_KEY; // Read API key from .env file
    if (!apiKey) {
        return res.status(500).json({ error: 'API key is missing' });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(url)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error.message);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
