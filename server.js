const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const mapboxgl = require('mapbox-gl');
const apiKey = 'ae499524a2b83667d027b1c6d2476854';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/weather', function(req, res) {
    const cityInput = req.query.city;

    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const weatherData = JSON.parse(data);
            res.json(weatherData);
        });
    }).on('error', (error) => {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data');
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});