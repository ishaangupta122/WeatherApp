// DOM content
const form = document.getElementById("form");
const searchBox = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const Location = document.getElementById("location");
const locationImg = document.getElementById("location-img");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const temperatureDesc = document.getElementById("temperature-description");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const windSpeed = document.getElementById("wind");

// Fetching Data
const fetchingWeather = async (location) => {
  const apiKey = "59a0fc1c81dc0b1a90b82921edc1b1b1";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${
    searchBox.value || location
  }&appid=${apiKey}&units=metric`;
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);
  // console.log(apiURL);
  Location.innerText = data.name;
  temperature.innerText = data.main.temp + "°c";
  humidity.innerText = data.main.humidity + "%";
  pressure.innerText = data.main.pressure + " hPa";
  windSpeed.innerText = data.wind.speed + " m/s";
  temperatureDesc.innerText = data.weather[0].main;
  locationImg.src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
};

// Fetching Weather on Submitting Form
const searchForm = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchingWeather(searchBox.value);
  });
};
fetchingWeather("patiala");
searchForm();
