

// variables
const searchTextEl = document.querySelector("#search-text");
const getCityEl = document.querySelector("#get-city")
let cardEl = document.querySelector(".card");
let searchBtnEl = document.querySelector(".search-btn");
let weatherDataEl = document.querySelector(".weather-data");
let currentWeatherEl = document.querySelector(".current-weather")
const cityText = searchTextEl.value.trim();
const cityEntry = cityText;

// const cityEntry = searchTextEl.value;
localStorage.getItem("city", searchTextEl);


// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const searchTerm = search.value;

// })



const apiKey = "6b0d57e0839124a28215d650b3438d88" + cityEntry;
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&appid=6b0d57e0839124a28215d650b3438d88&q=";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?&appid=6b0d57e0839124a28215d650b3438d88q=" + cityEntry + "&appid=" + apiKey;



// functions
let getCity = function (event) {
let cityName = searchTextEl.value.trim();

if (cityName) {
    getWeather(cityName);
}

};

let getWeather = function(city) {
    let url = apiUrl + city
fetch(url)
.then(function (response){
  return response.json();
})
.then(function (data){
    // showWeather(data.results)
    console.log(city)
    
    // showWeather();
}) 
    // todo: get weather from city searched
    
}
function showWeather (data) {
weatherDataEl.innerHtml = ""


currentWeatherEl.innerHTML = `
<h2>${city}</h2>
<h4>Temperature: 19c</h4>
<h4>Wind: 4.31 M/S</h4>
<h4>Humidity: 79%</h4>
`
}
function searchHistory() {
    // make a button for all weather stored locally 
}
getCityEl.addEventListener("click", function (event) {
    event.preventDefault();
getCity();
    // getCity();

});
//     event.preventDefault();
//     console.log("form")
// });
    // todo: search city from input and call get weather


