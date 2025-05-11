async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "8256e8fe129c6fe1ccffda5624b60517"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      document.getElementById("weather").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].main}</p>
      `;
    } catch (error) {
      document.getElementById("weather").innerHTML = `<p>${error.message}</p>`;
    }
  }
  