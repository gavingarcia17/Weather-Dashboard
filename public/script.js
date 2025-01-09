document.getElementById('get-weather-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.trim();
    const weatherResult = document.getElementById('weather-result');
    // const apiKey = '5ecc5be1452099de6735bc3042dd4982'; // Moved to server-side
    
    if (!city) {
        weatherResult.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    // Save the city to local storage
    localStorage.setItem('lastCity', city);

    fetch(`/api/weather?city=${city}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response to check for errors
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error.message);
            weatherResult.innerHTML = '<p>Failed to fetch weather data</p>';
        });
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

// Retrieve the last searched city from local storage when the page loads
window.addEventListener('load', () => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
        document.getElementById('city-input').value = lastCity;
        document.getElementById('get-weather-btn').click();
    }
});
