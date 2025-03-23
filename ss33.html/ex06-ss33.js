// Danh sách dữ liệu thời tiết có sẵn
const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};
function displayWeather(city, data) {
    document.getElementById("city").textContent = city;
    document.getElementById("temperature").textContent = `${data.temperature}°C`;
    document.getElementById("description").textContent = data.description;
    document.getElementById("humidity").textContent = `Độ ẩm: ${data.humidity}%`;
    document.getElementById("wind").textContent = `Tốc độ gió: ${data.windSpeed} km/h`;
    document.getElementById("weatherIcon").textContent = data.icon;
}
function displayError(message) {
    document.getElementById("weatherInfo").innerHTML = `<p class="error-message">${message}</p>`;
}
function searchWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    if (cityInput === "") {
        displayError("Vui lòng nhập tên thành phố!");
        return;
    }
    const city = Object.keys(weatherData).find(key => key.toLowerCase() === cityInput.toLowerCase());
    if (city) {
        document.getElementById("weatherInfo").innerHTML = `
            <h2 id="city"></h2>
            <div class="weather-details">
                <div class="weather-main">
                    <span id="weatherIcon"></span>
                    <p id="temperature"></p>
                </div>
                <p id="description"></p>
                <p id="humidity"></p>
                <p id="wind"></p>
            </div>
        `;
        displayWeather(city, weatherData[city]);
    } else {
        displayError("Không tìm thấy dữ liệu thời tiết cho thành phố này!");
    }
}
document.getElementById("cityInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});