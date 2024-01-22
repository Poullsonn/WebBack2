
mapboxgl.accessToken = 'pk.eyJ1IjoicG91bGxzb24iLCJhIjoiY2xyb3V0MmpzMGJuODJtbmplaHZmOHd0bSJ9.ncGI1jl1Y9cWQwquGUlqUw';

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    fetch(`/weather?city=${cityInput}`)
        .then(response => response.json())
        .then(data => {
            displayMap(data.coord.lat, data.coord.lon, cityInput); 
            displayWeather(data); 
            
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} &deg;C</p>
        <p>Feels Like: ${data.main.feels_like} &deg;C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Rain Volume (last 3 hours): ${data.rain ? data.rain['3h'] : 0} mm</p>
    `;
}

function displayMap(latitude, longitude, cityInput) {
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = '';

    const mapScript = document.createElement('script');
    mapScript.src = 'https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js';
    mapScript.onload = function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoicG91bGxzb24iLCJhIjoiY2xyb3V0MmpzMGJuODJtbmplaHZmOHd0bSJ9.ncGI1jl1Y9cWQwquGUlqUw';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 10
        });

        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${cityInput}</h3>`))
            .addTo(map);
    };

    document.head.appendChild(mapScript);
}

function getNationalDish() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            displayNationalDish(data.meals[0]);
        })
        .catch(error => console.error('Error fetching national dish data:', error));
}

function displayNationalDish(meal) {
    const nationalDishInfo = document.getElementById('nationalDishInfo');
    nationalDishInfo.innerHTML = '';

    if (meal) {
        nationalDishInfo.innerHTML = `
            <h2>National Dish</h2>
            <p>Name: ${meal.strMeal}</p>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 300px; max-height: 300px;">
        `;
    } else {
        nationalDishInfo.innerHTML = '<p>No information found for the national dish.</p>';
    }
}

function getAdvice() {
    getAdviceData();
}

function getAdviceData() {
    const adviceUrl = 'https://api.adviceslip.com/advice';

    fetch(adviceUrl)
        .then(response => response.json())
        .then(data => {
            displayAdvice(data);
        })
        .catch(error => console.error('Error fetching advice data:', error));
}

function displayAdvice(advice) {
    const adviceInfo = document.getElementById('placeHistoryInfo');
    adviceInfo.innerHTML = '';

    if (advice.slip) {
        adviceInfo.innerHTML = `
            <h2>Random Advice</h2>
            <p>${advice.slip.advice}</p>
        `;
    } else {
        adviceInfo.innerHTML = '<p>No advice found.</p>';
    }
}
