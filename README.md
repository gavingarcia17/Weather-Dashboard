# Weather-Dashboard


Weather Board is a simple web application that allows users to get the current weather information for a specified city. The application fetches weather data from a weather API and displays it to the user.

## Features

- Search for the current weather by city name.
- Display the temperature and weather description.
- Save the last searched city to local storage.
- Automatically fetch and display the weather for the last searched city when the page loads.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-board.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-board
    ```
3. Open the `index.html` file in your web browser.

## Usage

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. The current weather information for the specified city will be displayed.
4. The last searched city will be saved and automatically loaded the next time you open the application.

## API

The application uses the OpenWeatherMap API to fetch weather data. You will need an API key to use the service. Replace the `apiKey` variable in `public/script.js` with your own API key.

## License

This project is licensed under the MIT License.
