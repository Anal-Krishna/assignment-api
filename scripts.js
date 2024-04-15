async function getWeather() {
  const apiKey = '1d5d9e576f6a633ad28dca75de2fe5fd';
  const city = document.getElementById('city').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;

      const studentId = '200552815';
      const studentName = 'ANAL KRISHNA PARUTHIYAZHUTH SABU';

      const weatherHtml = `
          <h2>Weather in ${city}</h2>
          <p>Description: ${weatherDescription}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Humidity: ${humidity}%</p>
      `;

      const studentInfoHtml = `
          <p>Student ID: ${studentId}</p>
          <p>Name: ${studentName}</p>
      `;

      document.getElementById('weather').innerHTML = `
          ${studentInfoHtml}
          ${weatherHtml}
      `;
  } catch (error) {
      console.error('Error:', error);
      document.getElementById('weather').innerHTML = '<p>Failed to fetch weather data.</p>';
  }
}
