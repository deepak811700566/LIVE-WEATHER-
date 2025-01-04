document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value.trim();
    const apiKey = '14ca34ac7bc507ae755579e2edf37ada'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = `📍 ${data.name}`;
                document.getElementById('temperature').textContent = `🌡️ Temperature: ${data.main.temp}°C`;
                document.getElementById('condition').textContent = `🌥️ Condition: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `💧 Humidity: ${data.main.humidity}%`;
                document.getElementById('weatherResult').classList.remove('hidden');
            } else {
                alert(data.message || "City not found!");
                document.getElementById('weatherResult').classList.add('hidden');
            }
        })
        .catch(error => {
            alert("An error occurred while fetching weather data.");
            console.error('Error:', error);
        });
});
