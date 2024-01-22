
Weather
Overview
Weather Map App is a web application providing users with current weather information, extended forecasts, latest news, and exchange rates for a specific city. The app integrates with various APIs to deliver valuable data.

Features
Display current weather information: temperature, humidity, pressure, wind speed, etc.
Extended 14-day weather forecast.
Latest news articles for the specified city.
Exchange rates for a specific currency.

Technologies
Node.js & Express.js for backend.
Mapbox API for maps.
OpenWeather API for weather data.
News API for news articles.
ExchangeRate-API for exchange rates.

Prerequisites
Before running the application, ensure you have the following installed:

- Node.js: Download Node.js (https://nodejs.org/)
- npm (Node Package Manager): Included with Node.js installation

   Installation
Clone the repository:
   ```bash
   git clone <repository-url>
   cd WebBack2
   
APIs
All APIs use their own keys. News API returns 5 relevant articles, and ExchangeRate API provides all current currencies.

Design Decisions
Frontend and Backend Separation: Enhances maintainability and flexibility.
Dynamic Display of Data: Provides real-time information without page reloads.
Clearing Previous Data: Ensures a clean display for each new search.
Modular Code Structure: Supports scalability and codebase extensibility.

Structure
The code is organized into modular functions, promoting code reuse, readability, and ease of maintenance. 
Each function has a specific responsibility, such as fetching data, processing data, displaying weather information, and handling errors. 
This design decision supports a more scalable and extensible codebase.


