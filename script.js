function getWeather() {
    const locationInput = document.getElementById("location");
    const location = locationInput.value.trim();

    if (location === "") {
        return;
    }

    // Replace "YOUR_API_KEY" with a valid API key from OpenWeatherMap
    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>Weather for ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "<p>Error fetching weather data. Please try again later.</p>";
            console.error(error);
        });

    locationInput.value = "";
}
