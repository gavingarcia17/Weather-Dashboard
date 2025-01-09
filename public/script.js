document.getElementById('get-weather-btn').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value.trim();
    const weatherResult = document.getElementById('weather-result');
    
    if (!city) {
        weatherResult.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    try {
        const response = await fetch(`/api/weather?city=${city}`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = '<p>Error fetching weather data.</p>';
    }
});

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    if (data.main) {
        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        weatherResult.innerHTML = '<p>City not found</p>';
    }
}
