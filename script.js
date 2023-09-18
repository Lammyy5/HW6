

// variables
const searchTextEl = document.querySelector('#search-text');
let cardEl = document.querySelector(".card");
let searchBtnEl = document.querySelector(".search-btn");
let weatherDataEl = document.querySelector(".weather-data");
let currentWeatherEl = document.querySelector(".current-weather")

const cityEntry = searchTextEl.val();
localStorage.getItem("city", cityEntry);







const apiKey = "6b0d57e0839124a28215d650b3438d88";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?q=" + cityEntry + "&appid=" + apiKey;




// functions


let getWeather = function() {
fetch(apiUrl)
.then(function (response){
  return response.json();
})
.then(function (data){
    // showWeather(data.results)
    console.log(data)
    showWeather();
}) 
    // todo: get weather from city searched
    
}
function showWeather (data) {
weatherDataEl.innerHtml = ""


currentWeatherEl.innerHTML = `
<h2>${data}</h2>
<h4>Temperature: 19c</h4>
<h4>Wind: 4.31 M/S</h4>
<h4>Humidity: 79%</h4>"
`
}
function searchHistory() {
    // make a button for all weather stored locally 
}
let searchButton = searchBtnEl.addEventListener("click", getWeather, function() {
    console.log(cityEntry)
    // todo: search city from input and call get weather
})

